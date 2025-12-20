'use client';

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

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        <div className="vlt-page-content">

          {/* Header section */}
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
                    <h1 className="vlt-page-title__title" style={{ color: "white", fontSize: "4rem", fontWeight:"700"}}>
                      Terms & Conditions
                    </h1>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
            <div className="vlt-gap-150"></div>
          </section>

          <div className="vlt-gap-80"></div>

          {/* Content Section */}
          <section>
            <div className="container">
              <div className="row">
                <div className="vlt-animated-block">

                  <FadeInSection delay={0.1}>
                    <h5>Effective Date: 26/8/24</h5>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 1. Introduction */}
                  <FadeInSection delay={0.1}>
                    <h5>1. Introduction</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      Welcome to Vector Art! These Terms and Conditions (“Terms”) govern your access to and use of our website www.vectorart.co and the purchase of our SVG badges. By using our website and services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 2. Use of Website */}
                  <FadeInSection delay={0.1}>
                    <h5>2. Use of the Website</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Eligibility:</b> You must be at least 13 years old to use our website and purchase products.</li>
                      <li><b>Account Registration:</b> You are responsible for maintaining your account and password.</li>
                      <li><b>Prohibited Activities:</b>
                        <ol>
                          <li>Use the website for unlawful purposes.</li>
                          <li>Harm or disable the website.</li>
                          <li>Use automated means to access the website.</li>
                          <li>Impersonate any person or entity.</li>
                        </ol>
                      </li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 3. Products and Services */}
                  <FadeInSection delay={0.1}>
                    <h5>3. Products and Services</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Product Descriptions:</b> We aim for accuracy but do not guarantee completeness or error-free descriptions.</li>
                      <li><b>Pricing:</b> Prices may change without notice.</li>
                      <li><b>Order Acceptance:</b> We may refuse or cancel orders under certain conditions.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 4. Payment and Billing */}
                  <FadeInSection delay={0.1}>
                    <h5>4. Payment and Billing</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Payment Methods:</b> We accept major cards, PayPal, and listed methods.</li>
                      <li><b>Billing Information:</b> Must be accurate or orders may be delayed.</li>
                      <li><b>Taxes:</b> You are responsible for applicable taxes.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 5. Returns & Refunds */}
                  <FadeInSection delay={0.1}>
                    <h5>5. Returns and Refunds</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Non-Returnable Items:</b> Custom orders and digital downloads are not returnable.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 6. Intellectual Property */}
                  <FadeInSection delay={0.1}>
                    <h5>6. Intellectual Property</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Ownership:</b> All website content belongs to Vector Art or licensors.</li>
                      <li><b>Trademarks:</b> Vector Art trademarks may not be used without consent.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 7. Limitation of Liability */}
                  <FadeInSection delay={0.1}>
                    <h5>7. Limitation of Liability</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>No Warranties:</b> Services are provided “as is.”</li>
                      <li><b>Limitation:</b> Vector Art is not liable for damages arising from use of the website.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 8. Indemnification */}
                  <FadeInSection delay={0.1}>
                    <h5>8. Indemnification</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>You agree to indemnify and hold Vector Art harmless from claims arising from your use.</p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 9. Governing Law */}
                  <FadeInSection delay={0.1}>
                    <h5>9. Governing Law and Dispute Resolution</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <ul>
                      <li><b>Governing Law:</b> Governed by the laws of the USA.</li>
                      <li><b>Dispute Resolution:</b> Binding arbitration under AAA rules.</li>
                    </ul>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 10. Changes */}
                  <FadeInSection delay={0.1}>
                    <h5>10. Changes to These Terms</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>Updates will be posted here. Continued use = acceptance.</p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  {/* 11. Contact */}
                  <FadeInSection delay={0.1}>
                    <h5>11. Contact Us</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      Vector Art <br />
                      info@vectorart.co <br />
                      +1 860 261 2601
                    </p>
                  </FadeInSection>

                </div>
              </div>

              <div className="vlt-gap-80"></div>
            </div>
          </section>

        </div>

        <div className="vlt-gap-80"></div>

        <div id="content"></div>
      </main>
    </>
  );
}
