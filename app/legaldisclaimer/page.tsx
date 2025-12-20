"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* AOS-like reusable fade component */
const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const LegalDisclaimerPage = () => {
  const title = "Legal Disclaimer | Vector Art";
  const keywords =
    "embroidery digitizing companies, embroidery digitizing services, digitizing company, online digitizing, image digitizing";
  const description =
    "Vectorart.co is the top digitizing services for efficient machine performance and a personalized touch in every project.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      {/* Site overlay */}
      <div className="vlt-site-overlay"></div>

      {/* Main */}
      <main className="vlt-main">
        <div className="vlt-page-content">

          {/* Page Header */}
          <section
            className="has-white-color"
            style={{
              backgroundImage:
                "url(assets/img/pages/digitizing/digitizingbg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="vlt-page-title vlt-page-title--style-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <h1
                      className="vlt-page-title__title"
                      style={{
                        color: "white",
                        fontSize: "4rem",
                        fontWeight: "700",
                      }}
                    >
                      Legal Disclaimer
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

                  <FadeInSection delay={0.1}>
                    <h5>1. General Information</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      The information provided on the Vector Art website
                      www.vectorart.co is for general informational purposes
                      only. While we strive to keep the information up to date
                      and accurate, we make no representations or warranties of
                      any kind.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>2. No Professional Advice</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      The content provided on our website does not constitute
                      legal, financial, or professional advice. For specific
                      advice, consult a qualified professional.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>3. Product Descriptions and Images</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      We strive to display accurate product images, but actual
                      appearance may vary depending on your device.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>4. Limitation of Liability</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      Vector Art shall not be liable for any damages arising
                      from the use or inability to use our website or products.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>5. External Links</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      We are not responsible for the content or privacy
                      practices of third-party websites.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>6. Intellectual Property</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      All website content is owned by Vector Art and protected
                      under intellectual property laws.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>7. Changes to This Disclaimer</h5>
                  </FadeInSection>

                  <FadeInSection delay={0.3}>
                    <p>
                      Updates may occur at any time. Continued use means
                      acceptance.
                    </p>
                  </FadeInSection>

                  <div className="vlt-gap-30"></div>

                  <FadeInSection delay={0.1}>
                    <h5>8. Contact Information</h5>
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
            </div>

            <div className="vlt-gap-80"></div>
          </section>

          <div id="content"></div>
        </div>
      </main>
    </>
  );
};

export default LegalDisclaimerPage;
