import './SEO.scss';
import SEOinfo from '../../components/SEOinfo/SEOinfo';
import LetsConnect from '../../components/LetsConnect/LetsConnect';

import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import services from '../../data/seo-info.json';

import c9cLogoBlack from '../../assets/images/c9c-logo-black.png';
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import HeroImage from '../../assets/images/seo-hero.jpg';

const scrollVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SEO = () => {
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
    "name": "Cloud9 Calm Co. | SEO Services",
    "description": "Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence.",
    "url": "https://www.cloud9calm.com/seo-services",
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
        <title>Cloud9 Calm Co. | SEO Services</title>
        <meta
          name="description"
          content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence."
        />
        <meta
          name="keywords"
          content="Penticton SEO support, SEO Penticton, Okanagan SEO, SEO strategy, website optimization, technical SEO, Cloud9 Calm Co."
        />
        <link rel="canonical" href="https://www.cloud9calm.com/seo-services" />

        {/* Open Graph */}
        <meta property="og:title" content="Cloud9 Calm Co. | SEO Services" />
        <meta
          property="og:description"
          content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services."
        />
        <meta property="og:image" content="https://www.cloud9calm.com/static/media/seo-hero.jpg" />
        <meta property="og:url" content="https://www.cloud9calm.com/seo-services" />
        <meta property="og:type" content="website" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud9 Calm Co. | SEO Services" />
        <meta
          name="twitter:description"
          content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated SEO support services."
        />
        <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/seo-hero.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <motion.main
        className="seo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariant}
      >
        {/* HERO (BEM: seo__*) */}
        <section className="seo__hero" aria-label="SEO services hero">
          <img
            src={HeroImage}
            alt="Cloud9 Calm Co. SEO services"
            className="seo__hero-image"
          />
          <div className="seo__hero-overlay">
            <h1 className="seo__hero-title">SEO Services</h1>
            <p className="seo__hero-subtitle">
              Strategy, content, and technical SEO to grow qualified traffic and conversions.
            </p>
          </div>
        </section>

        <motion.h2 className="seo__title" variants={scrollVariant}>
          More information on SEO Services
        </motion.h2>

        <motion.div className="seo__top-section" variants={scrollVariant}>
          <img
            className="seo__logo"
            src={isDarkMode ? c9cLogoWhite : c9cLogoBlack}
            alt="Cloud9 Calm Co. logo"
          />
          <h3 className="seo__sub-title">
            Maximize your SEO potential with my dedicated support services. I manage strategy, optimize site health, and lift rankings while keeping your site fast and user-friendly.
          </h3>
        </motion.div>

        <motion.div className="seo__info" variants={scrollVariant}>
          {Array.isArray(services) &&
            services.map((service, index) => (
              <motion.div key={index} className="seo__info-section" variants={scrollVariant}>
                <h4 className="seo__info-title">{service.title}</h4>
                <p className="seo__info-desc">{service.description}</p>
              </motion.div>
            ))}
        </motion.div>

        <SEOinfo />
        <LetsConnect />
      </motion.main>
    </>
  );
};

export default SEO;