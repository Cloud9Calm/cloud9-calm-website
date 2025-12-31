import '../WebsiteDevelopment/WebsiteDevelopment.scss';

import WebDevelopmentInfo from '../../components/WebDevelopmentInfo/WebDevelopmentInfo';
import LetsConnect from '../../components/LetsConnect/LetsConnect';

import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import services from '../../data/website-development-info.json';

import c9cLogoBlack from '../../assets/images/c9c-logo-black.png';
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import HeroImage from '../../assets/images/3e548acf-8432-475b-a913-e172b72f2d9d.jpeg';

const scrollVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WebsiteDevelopment = () => {
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
    "name": "Website Development Services | Cloud9 Calm Co.",
    "description": "Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality.",
    "url": "https://www.cloud9calm.com/website-development",
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
        <title>Website Development Services | Cloud9 Calm Co.</title>
        <meta
          name="description"
          content="Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality."
        />
        <meta
          name="keywords"
          content="Penticton website developer, website Penticton, Okanagan website developer, website Okanagan, web development, website support, technical support, website updates, Cloud9 Calm Co."
        />
        <link rel="canonical" href="https://www.cloud9calm.com/website-development" />

        <meta property="og:title" content="Website Development Services | Cloud9 Calm Co." />
        <meta
          property="og:description"
          content="Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality."
        />
        <meta property="og:image" content="https://www.cloud9calm.com/static/media/website-dev-hero.jpg" />
        <meta property="og:url" content="https://www.cloud9calm.com/website-development" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development Services | Cloud9 Calm Co." />
        <meta
          name="twitter:description"
          content="Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality."
        />
        <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/website-dev-hero.jpg" />


        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <motion.main
        className="webdev"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariant}
      >

  <section className="webdev__hero" aria-label="Website development services hero">
  <img
    src={HeroImage}
    alt="Cloud9 Calm Co. website development services"
    className="webdev__hero-image"
  />
  <div className="webdev__hero-overlay">
    <h1 className="webdev__hero-title">Web Development Services</h1>
    <p className="webdev__hero-subtitle">
      Custom websites, technical retainers, and SEO-focused builds for brands across the Okanagan and beyond.
    </p>
  </div>
</section>

        <motion.h2 className="webdev__title" variants={scrollVariant}>
          More information on Website Development
        </motion.h2>

        <motion.div className="webdev__top-section" variants={scrollVariant}>
          <img
            className="webdev__logo"
            src={isDarkMode ? c9cLogoWhite : c9cLogoBlack}
            alt="Cloud9 Calm Logo"
          />
          <h3 className="webdev__sub-title">
            Empower your online presence with my dedicated web development support services. I specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality.
          </h3>
        </motion.div>

        <motion.div className="webdev__info" variants={scrollVariant}>
          {services.map((service, index) => (
            <motion.div key={index} className="webdev__info-section" variants={scrollVariant}>
              <h4 className="webdev__info-title">{service.title}</h4>
              <p className="webdev__info-desc">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <WebDevelopmentInfo />
        <LetsConnect />
      </motion.main>
    </>
  );
};

export default WebsiteDevelopment;