import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import AOSRefresher from "./components/AOSRefresher";
import VLTInit from "./components/VLTInit";
import AOSInit from './components/AOSInit';
export const metadata = {
  title: "Vectorart.co - Graphics & Digital Imaging Service Company",
  description: "Professional graphics & digital imaging services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/img/Favicon.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.vectorart.co/" />

        {/* Google Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500&display=swap"
        />

        {/* Core CSS */}
        <link rel="stylesheet" href="/assets/css/framework/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fonts/Swansea/style.css" />
        <link rel="stylesheet" href="/assets/fonts/Skape/style.css" />
        <link rel="stylesheet" href="/assets/fonts/Socicons/socicon.css" />

        {/* Theme CSS */}
        <link rel="stylesheet" href="/assets/css/vlt-plugins.min.css" />
        <link rel="stylesheet" href="/assets/css/vlt-main.min.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />

        {/* Animation / Plugin CSS */}
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/justifiedGallery.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/superfish.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />

        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        {/* SweetAlert */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.0/dist/sweetalert2.min.css"
        />
      </head>

      <body>
        {/* Layout */}
        <AOSInit />
        <Navbar />
        {children}
         <AOSRefresher />
        <Footer />

        {/* Init handlers */}
        <VLTInit />
       

        {/* ================== SCRIPTS (ORDER MATTERS) ================== */}

        {/* jQuery */}
        <Script
          src="/assets/vendors/jquery-3.5.1.min.js"
          strategy="afterInteractive"
        />

        {/* Core helpers */}
        <Script
          src="/assets/scripts/vlt-helpers.js"
          strategy="afterInteractive"
        />

        {/* Plugins */}
        <Script
          src="/assets/scripts/vlt-plugins.js"
          strategy="afterInteractive"
        />

        {/* Controllers (ONLY ONE) */}
        <Script
          src="/assets/scripts/vlt-controllers.min.js"
          strategy="afterInteractive"
        />

        {/* Vendor libraries */}
        <Script src="/assets/vendors/aos.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/jquery.fancybox.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/jquery.justifiedGallery.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/jquery.scrollTo.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/jquery.validate.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/superfish.js" strategy="afterInteractive" />
        <Script src="/assets/vendors/swiper.min.js" strategy="afterInteractive" />

        {/* External */}
        <Script
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.0/dist/sweetalert2.all.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
