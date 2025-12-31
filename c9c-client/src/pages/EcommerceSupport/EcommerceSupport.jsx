import './EcommerceSupport.scss';

import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import EcommerceInfo from '../../components/EcommerceSupportInfo/EcommerceSupportInfo';
import LetsConnect from '../../components/LetsConnect/LetsConnect';

import services from '../../data/ecommerce-support-services.json';

import c9cLogoBlack from '../../assets/images/c9c-logo-black.png';
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import HeroImage from '../../assets/images/2afb314a-8a5d-473a-99b3-a0507a44172a.jpeg';

const scrollVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EcommerceSupport = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.body.classList.contains('dark-theme');
      setIsDarkMode(currentTheme);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cloud9 Calm Co. | eCommerce Services",
    "description": "Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store.",
    "url": "https://www.cloud9calm.com/ecommerce-support",
    "mainEntity": {
      "@type": "Organization",
      "name": "Cloud9 Calm Co.",
      "logo": "https://www.cloud9calm.com/static/media/c9c-logo-white.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61559123841203",
        "https://x.com/cloud9calmco",
        "https://www.linkedin.com/company/102845546"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Cloud9 Calm Co. | eCommerce Services</title>
        <meta
          name="description"
          content="Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store."
        />
        <meta
          name="keywords"
          content="Penticton eCommerce support, Okanagan eCommerce support, Shopify support, eCommerce developer, sales funnel optimization, store updates, Cloud9 Calm Co."
        />
        <link rel="canonical" href="https://www.cloud9calm.com/ecommerce-support" />

        {/* Open Graph */}
        <meta property="og:title" content="Cloud9 Calm Co. | eCommerce Services" />
        <meta
          property="og:description"
          content="Dedicated eCommerce support: platform management, funnel optimization, smooth store operations."
        />
        {/* Use your hero as share image for consistency */}
        <meta property="og:image" content="https://www.cloud9calm.com/static/media/ecom-hero.jpg" />
        <meta property="og:url" content="https://www.cloud9calm.com/ecommerce-support" />
        <meta property="og:type" content="website" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud9 Calm Co. | eCommerce Services" />
        <meta
          name="twitter:description"
          content="Dedicated eCommerce support: platform management, funnel optimization, smooth store operations."
        />
        <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/ecom-hero.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <motion.main
        className="ecom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariant}
      >
        {/* HERO */}
        <section className="ecom__hero" aria-label="eCommerce services hero">
          <img
            src={HeroImage}
            alt="Cloud9 Calm Co. eCommerce services"
            className="ecom__hero-image"
          />
          <div className="ecom__hero-overlay">
            <h1 className="ecom__hero-title">eCommerce Support</h1>
            <p className="ecom__hero-subtitle">
              Shopify support and other plaftorms, conversion-focused UX, and performance that keeps carts moving.
            </p>
          </div>
        </section>

        <motion.h2 className="ecom__title" variants={scrollVariant}>
          More information on eCommerce Support
        </motion.h2>

        <motion.div className="ecom__top-section" variants={scrollVariant}>
          <img
            className="ecom__logo"
            src={isDarkMode ? c9cLogoWhite : c9cLogoBlack}
            alt="Cloud9 Calm Co. logo"
          />
          <h3 className="ecom__sub-title">
            Maximize your eCommerce potential with my dedicated support services. I manage platforms, optimize funnels, and keep your store running smoothly.
          </h3>
        </motion.div>

        <motion.div className="ecom__info" variants={scrollVariant}>
          {Array.isArray(services) &&
            services.map((service, index) => (
              <motion.div key={index} className="ecom__info-section" variants={scrollVariant}>
                <h4 className="ecom__info-title">{service.title}</h4>
                <p className="ecom__info-desc">{service.description}</p>
              </motion.div>
            ))}
        </motion.div>

        <EcommerceInfo />
        <LetsConnect />
      </motion.main>
    </>
  );
};

export default EcommerceSupport;