// app/news/[slug]/ReviewFormHandler.tsx
'use client';

import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

// Declare global grecaptcha type
declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoadCallback?: () => void;
  }
}

export default function ReviewFormHandler() {
  const recaptchaRendered = useRef<Set<string>>(new Set());
  const recaptchaScriptLoaded = useRef(false);

  // Get reCAPTCHA site key from environment variable
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ;

  useEffect(() => {
    const formConfigs = [
      { id: 'reviewForm', type: 'vpl2025' },
      { id: 'asiReviewForm', type: 'asi' },
      { id: 'ppaiReviewForm', type: 'ppai' },
      { id: 'ppaiExpoReviewForm', type: 'ppaiExpo' },
      { id: 'aiReviewForm', type: 'ai' },
      { id: 'vplReviewForm', type: 'vpl' },
      { id: 'boothReviewForm', type: 'booth' },
    ];

    // Render reCAPTCHA for a specific form
    const renderRecaptchaForForm = (formId: string) => {
      if (recaptchaRendered.current.has(formId)) {
        return; // Already rendered for this form
      }

      const form = document.getElementById(formId) as HTMLFormElement;
      if (!form || !window.grecaptcha || !recaptchaSiteKey) {
        return;
      }

      // Check if reCAPTCHA container already exists
      let recaptchaContainer = form.querySelector('.recaptcha-container');
      
      if (!recaptchaContainer) {
        // Find the submit button
        const submitButton = form.querySelector('button[type="submit"]');
        
        if (submitButton) {
          // Create reCAPTCHA container
          recaptchaContainer = document.createElement('div');
          recaptchaContainer.className = 'recaptcha-container';
          recaptchaContainer.style.marginBottom = '20px';
          recaptchaContainer.style.display = 'flex';
          recaptchaContainer.style.justifyContent = 'center';
          
          // Create the actual reCAPTCHA div
          const recaptchaDiv = document.createElement('div');
          recaptchaDiv.className = `g-recaptcha-${formId}`;
          recaptchaContainer.appendChild(recaptchaDiv);
          
          // Insert before submit button
          submitButton.parentNode?.insertBefore(recaptchaContainer, submitButton);
          
          // Render reCAPTCHA
          try {
            window.grecaptcha.render(recaptchaDiv, {
              sitekey: recaptchaSiteKey,
            });
            recaptchaRendered.current.add(formId);
            console.log(`✅ reCAPTCHA rendered for form: ${formId}`);
          } catch (error) {
            console.error(`❌ Failed to render reCAPTCHA for ${formId}:`, error);
          }
        }
      }
    };

    // Render reCAPTCHA for all visible forms
    const renderRecaptchaForAllForms = () => {
      if (!window.grecaptcha || !window.grecaptcha.render || !recaptchaSiteKey) {
        if (!recaptchaSiteKey) {
          console.error('❌ reCAPTCHA site key is missing. Cannot render reCAPTCHA.');
        }
        return;
      }

      formConfigs.forEach(({ id }) => {
        renderRecaptchaForForm(id);
      });
    };

    // Load reCAPTCHA script
    const loadRecaptchaScript = () => {
      if (recaptchaScriptLoaded.current || document.getElementById('recaptcha-script')) {
        // Script already loaded or loading
        if (window.grecaptcha && window.grecaptcha.render) {
          renderRecaptchaForAllForms();
        }
        return;
      }

      recaptchaScriptLoaded.current = true;
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      
      // Include site key in the script URL
      if (recaptchaSiteKey) {
        script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit&sitekey=${recaptchaSiteKey}`;
      } else {
        script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      }
      
      script.async = true;
      script.defer = true;
      
      // Global callback for when reCAPTCHA loads
      window.onRecaptchaLoad = () => {
        console.log('✅ reCAPTCHA loaded successfully');
        renderRecaptchaForAllForms();
      };

      document.head.appendChild(script);
    };

    // Handle form submission
    const handleFormSubmit = async (e: Event, formType: string, formElement: HTMLFormElement) => {
      e.preventDefault();
      
      if (!recaptchaSiteKey) {
        await Swal.fire({
          icon: 'error',
          title: 'Configuration Error',
          text: 'reCAPTCHA is not properly configured. Please contact support.',
          confirmButtonColor: '#e74c3c',
          confirmButtonText: 'OK',
        });
        return;
      }

      // Get reCAPTCHA response
      const recaptchaContainer = formElement.querySelector('.recaptcha-container');
      let recaptchaResponse = '';
      
      if (recaptchaContainer && window.grecaptcha) {
        try {
          recaptchaResponse = window.grecaptcha.getResponse();
        } catch (error) {
          console.error('Error getting reCAPTCHA response:', error);
        }
      }
      
      // Validate reCAPTCHA
      if (!recaptchaResponse) {
        await Swal.fire({
          icon: 'warning',
          title: 'Verification Required',
          text: 'Please complete the reCAPTCHA verification before submitting.',
          confirmButtonColor: '#e74c3c',
          confirmButtonText: 'OK',
        });
        return;
      }
      
      const formData = new FormData(formElement);
      
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        agree: formData.get('agree') === 'on',
        formType: formType,
        recaptchaToken: recaptchaResponse,
      };

      // Show loading state
      Swal.fire({
        title: 'Submitting...',
        text: 'Please wait while we process your feedback',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          // Success alert
          await Swal.fire({
            icon: 'success',
            title: 'Thank You!',
            text: result.message,
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'OK',
          });
          
          // Reset form and reCAPTCHA
          formElement.reset();
          if (window.grecaptcha) {
            window.grecaptcha.reset();
          }
        } else {
          // Error alert
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.message || 'Something went wrong!',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Try Again',
          });
          
          // Reset reCAPTCHA on error
          if (window.grecaptcha) {
            window.grecaptcha.reset();
          }
        }
      } catch (error) {
        console.error('Submission error:', error);
        await Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Unable to submit feedback. Please check your connection and try again.',
          confirmButtonColor: '#e74c3c',
          confirmButtonText: 'OK',
        });
        
        // Reset reCAPTCHA on error
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      }
    };

    // Attach event listeners to all forms
    const handlers: Array<{ element: HTMLFormElement; handler: (e: Event) => void }> = [];

    const attachHandlers = () => {
      formConfigs.forEach(({ id, type }) => {
        const form = document.getElementById(id) as HTMLFormElement;
        if (form) {
          // Check if handler already attached
          const existingHandler = handlers.find(h => h.element === form);
          if (!existingHandler) {
            const handler = (e: Event) => handleFormSubmit(e, type, form);
            form.addEventListener('submit', handler);
            handlers.push({ element: form, handler });
          }
        }
      });
    };

    // Use MutationObserver to watch for forms being added to the DOM
    const observer = new MutationObserver(() => {
      attachHandlers();
      renderRecaptchaForAllForms();
    });

    // Start observing the document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial setup
    if (recaptchaSiteKey) {
      loadRecaptchaScript();
    } else {
      console.error('❌ reCAPTCHA site key is missing. Please check your environment variables.');
    }
    attachHandlers();

    // Try rendering reCAPTCHA multiple times with increasing delays
    // This ensures it catches forms that load at different times
    const delays = [100, 300, 500, 1000, 2000];
    const timeouts: NodeJS.Timeout[] = [];

    delays.forEach(delay => {
      const timeout = setTimeout(() => {
        attachHandlers();
        renderRecaptchaForAllForms();
      }, delay);
      timeouts.push(timeout);
    });

    // Cleanup
    return () => {
      observer.disconnect();
      timeouts.forEach(timeout => clearTimeout(timeout));
      handlers.forEach(({ element, handler }) => {
        element.removeEventListener('submit', handler);
      });
    };
  }, []);

  return null;
}