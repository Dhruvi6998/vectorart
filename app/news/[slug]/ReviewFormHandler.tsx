// app/news/[slug]/ReviewFormHandler.tsx
'use client';

import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function ReviewFormHandler() {
  useEffect(() => {
    // Handle all review forms on the page
    const handleFormSubmit = async (e: Event, formType: string) => {
      e.preventDefault();
      
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        agree: formData.get('agree') === 'on',
        formType: formType,
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
          
          // Reset form
          form.reset();
        } else {
          // Error alert
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.message || 'Something went wrong!',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Try Again',
          });
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
      }
    };

    // Map of form IDs to form types
    const formConfigs = [
      { id: 'reviewForm', type: 'vpl2025' },
      { id: 'asiReviewForm', type: 'asi' },
      { id: 'ppaiReviewForm', type: 'ppai' },
      { id: 'ppaiExpoReviewForm', type: 'ppaiExpo' },
      { id: 'aiReviewForm', type: 'ai' },
      { id: 'vplReviewForm', type: 'vpl' },
      { id: 'boothReviewForm', type: 'booth' },
    ];

    // Attach event listeners to all forms
    const handlers: Array<{ element: HTMLFormElement; handler: (e: Event) => void }> = [];

    formConfigs.forEach(({ id, type }) => {
      const form = document.getElementById(id) as HTMLFormElement;
      if (form) {
        const handler = (e: Event) => handleFormSubmit(e, type);
        form.addEventListener('submit', handler);
        handlers.push({ element: form, handler });
      }
    });

    // Cleanup
    return () => {
      handlers.forEach(({ element, handler }) => {
        element.removeEventListener('submit', handler);
      });
    };
  }, []);

  return null;
}