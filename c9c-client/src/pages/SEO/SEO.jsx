import './SEO.scss'; 
import SEOinfo from '../../components/SEOinfo/SEOinfo';
import LetsConnect from '../../components/LetsConnect/LetsConnect';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import seoGraphic from '../../assets/images/c9c-3d-seo.webp';
import services from '../../data/seo-info.json'; 
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';

const SEO = () => {
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
                
                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="Cloud9 Calm Co. | SEO Services" />
                <meta property="og:description" content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence." />
                <meta property="og:image" content="https://www.cloud9calm.com/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png" />
                <meta property="og:url" content="https://www.cloud9calm.com/seo-services" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cloud9 Calm Co. | SEO Services" />
                <meta name="twitter:description" content="Maximize your SEO potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence." />
                <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png" />
                
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className='seo'>
                <h2 className='seo__title'>More information on SEO Services</h2>
                <div className='seo__top-section'>
                    <img 
                        className='seo__logo'
                        src={c9cLogoWhite}
                        alt="Cloud9 Calm Logo in white" />
                    <h3 className='seo__sub-title'>
                        Maximize your SEO potential with my dedicated SEO support services. I specialize in managing your SEO strategy, optimizing search engine rankings, and ensuring smooth operations for your online presence.
                    </h3>
                </div>
                <img
                    className='seo__graphic'
                    src={seoGraphic}
                    alt="Graphic of SEO services"
                />
                <div className='seo__info'>
                    {Array.isArray(services) && services.map((service, index) => (
                        <div key={index} className='seo__info-section'>
                            <h4 className='seo__info-title'>{service.title}</h4>
                            <p className='seo__info-desc'>{service.description}</p>
                        </div>
                    ))}
                </div>
                <SEOinfo />
                <LetsConnect />
            </main>
        </>
    );
}

export default SEO;