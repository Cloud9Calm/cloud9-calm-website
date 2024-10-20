import './SEO.scss'; 
import SEOinfo from '../../components/SEOinfo/SEOinfo';
import LetsConnect from '../../components/LetsConnect/LetsConnect';

import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import seoGraphic from '../../assets/images/c9c-3d-seo.webp';
import services from '../../data/seo-info.json'; 

import c9cLogoBlack from '../../assets/images/c9c-logo-black.png';
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import { motion } from 'framer-motion';

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
            "logo": "https://www.cloud9calm.com/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png",
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
                <meta name="description" content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence." />
                <meta name="keywords" content="Penticton SEO support, SEO Penticton, Okanagan SEO developer, SEO solutions, website support, technical support, online presence optimization, Cloud9 Calm Co." />
                <link rel="canonical" href="https://www.cloud9calm.com/seo-services" />
                
                <meta property="og:title" content="Cloud9 Calm Co. | SEO Services" />
                <meta property="og:description" content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence." />
                <meta property="og:image" content="https://www.cloud9calm.com/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png" />
                <meta property="og:url" content="https://www.cloud9calm.com/seo-services" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cloud9 Calm Co. | SEO Services" />
                <meta name="twitter:description" content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence." />
                <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png" />
                
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <motion.main 
                className='seo'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scrollVariant}
            >
                <motion.h2 
                    className='seo__title'
                    variants={scrollVariant}
                >
                    More information on SEO Services
                </motion.h2>
                <motion.div 
                    className='seo__top-section'
                    variants={scrollVariant}
                >
                    <img 
                        className='seo__logo'
                        src={isDarkMode ? c9cLogoWhite : c9cLogoBlack}
                        alt="Cloud9 Calm Logo" />
                    <h3 className='seo__sub-title'>
                        Maximize your SEO potential with my dedicated SEO support services. I specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence.
                    </h3>
                </motion.div>
                <motion.img
                    className='seo__graphic'
                    src={seoGraphic}
                    alt="Graphic of SEO services"
                    variants={scrollVariant}
                />
                <motion.div 
                    className='seo__info'
                    variants={scrollVariant}
                >
                    {Array.isArray(services) && services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className='seo__info-section'
                            variants={scrollVariant}
                        >
                            <h4 className='seo__info-title'>{service.title}</h4>
                            <p className='seo__info-desc'>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <SEOinfo />
                <LetsConnect />
            </motion.main>
        </>
    );
}

export default SEO;