import './EcommerceSupport.scss'; 
import Contact from '../Contact/Contact'; 

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ecommerceGraphic from '../../assets/images/c9c-3d-ecommerce.webp';
import services from '../../data/ecommerce-support-services.json'; 
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import EcommerceInfo from '../../components/EcommerceSupportInfo/EcommerceSupportInfo'; 

const EcommerceSupport = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cloud9 Calm Co. | eCommerce Services",
        "description": "Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store.",
        "url": "https://www.cloud9calm.com/ecommerce-support",
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
                <title>Cloud9 Calm Co. | eCommerce Services</title>
                <meta name="description" content="Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store." />
                <meta name="keywords" content="Penticton eCommerce support, eCommerce Penticton, Okanagan eCommerce developer, Shopify support, eCommerce solutions, website support, technical support, online store updates, Cloud9 Calm Co." />
                <link rel="canonical" href="https://www.cloud9calm.com/ecommerce-support" />
                
                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="Cloud9 Calm Co. | eCommerce Services" />
                <meta property="og:description" content="Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store." />
                <meta property="og:image" content="https://www.cloud9calm.com/path/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png" />
                <meta property="og:url" content="https://www.cloud9calm.com/ecommerce-support" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cloud9 Calm Co. | eCommerce Services" />
                <meta name="twitter:description" content="Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store." />
                <meta name="twitter:image" content="https://www.cloud9calm.com/path/static/media/c9c-logo-white.bbb962e17ff69fa4080b.png" />
                
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className='ecom'>
                <h2 className='ecom__title'>More information on eCommerce Support</h2>
                <div className='ecom__top-section'>
                    <img 
                        className='ecom__logo'
                        src={c9cLogoWhite}
                        alt="Cloud9 Calm Logo in white" />
                    <h3 className='ecom__sub-title'>
                        Maximize your eCommerce potential with my dedicated eCommerce support services. I specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store.
                    </h3>
                </div>
                <img
                    className='ecom__graphic'
                    src={ecommerceGraphic}
                    alt="Graphic of people managing an online store"
                />
                <div className='ecom__info'>
                    {services.map((service, index) => (
                        <div key={index} className='ecom__info-section'>
                            <h4 className='ecom__info-title'>{service.title}</h4>
                            <p className='ecom__info-desc'>{service.description}</p>
                        </div>
                    ))}
                </div>
                <EcommerceInfo />
                <Contact />
            </main>
        </>
    );
}

export default EcommerceSupport;