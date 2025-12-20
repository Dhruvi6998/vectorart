'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        <div className="vlt-page-content">

          {/* Page Header */}
          <section
            className="has-white-color"
            style={{
              backgroundImage: "url(/assets/img/pages/digitizing/digitizingbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="vlt-page-title__title" style={{ color: "white" }}>
                      Privacy Policy
                    </h1>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>

            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Main Content */}
          <section>
            <div className="container">
              <div className="row">
                <div className="vlt-animated-block">

                  <FadeInSection delay={0.1}>
                    <h5>Effective Date: 26/8/24</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      At VectorArt, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our website, request graphic design services, or purchase USA badges from our store.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>1. Information We Collect</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Contact Information:</b> Name, email address, phone number, and mailing address when you inquire about our services or make a purchase.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Payment Information:</b> Credit card or other payment details when you make purchases through our website.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Project Details:</b> Specific design requirements, content, and other project-related information that you share with us.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Website Data:</b> IP address, browser type, and usage data when you visit our website.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>2. How We Use Your Information</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Communication:</b> To respond to inquiries and send project updates.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Payment Processing:</b> To securely process transactions.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Improvement of Services:</b> To enhance our offerings.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Legal Compliance:</b> For legal and regulatory obligations.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>3. Sharing of Your Information</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>We do not sell your personal information, but may share it under:</p>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Service Providers:</b> Third-party vendors for service delivery.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Legal Requirements:</b> Court orders or law enforcement.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>4. Data Security</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>We use industry-standard security measures such as encryption and secure servers.</p>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>However, no system is completely secure, and information is shared at your own risk.</p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>5. Cookies and Tracking Technologies</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>We use cookies to enhance your experience and analyze website traffic.</p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>6. Your Rights</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Access & Correction:</b> Request your saved personal data.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Data Deletion:</b> Request removal unless legally required.</li>
                    </ul>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Opt-out:</b> Unsubscribe from promotional emails.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>7. Third-Party Links</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>We are not responsible for the privacy practices of external sites linked from our website.</p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>8. Changes to this Privacy Policy</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>Updates may occur at any time and will take effect upon posting.</p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>9. Contact Information</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      If you have questions, contact us at:<br />
                      Vector Art <br />
                      info@vectorart.co <br />
                      +1 860 261 2601
                    </p>
                  </FadeInSection>

                </div>
              </div>
            </div>

            <div className="vlt-gap-80"></div>
          </section>

          <div id="content"></div>

        </div>
      </main>
    </>
  );
}
