import '../WebsiteDevelopment/WebsiteDevelopment.scss';
import services from '../../data/website-development-info.json'; 
import WebDevelopmentInfo from '../../components/WebDevelopmentInfo/WebDevelopmentInfo';
import LetsConnect from '../../components/LetsConnect/LetsConnect'; 

import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

import websiteGraphic from '../../assets/images/c9c-3d-graphic.webp';
import c9cLogoBlack from '../../assets/images/c9c-logo-black.png';
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';

const WebsiteDevelopment = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            const currentTheme = document.body.classList.contains('dark-theme');
            setIsDarkMode(currentTheme);
        };

        checkTheme(); // Initial check when component mounts

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
            "logo": "https://www.cloud9calm.com/path/to/c9c-logo-white.png",
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
                <meta name="description" content="Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality." />
                <meta name="keywords" content="Penticton website developer, website Penticton, Okanagan website developer, website Okanagan, web development, website support, technical support, website updates, Cloud9 Calm Co." />
                <link rel="canonical" href="https://www.cloud9calm.com/website-development" />
                
                <meta property="og:title" content="Website Development Services | Cloud9 Calm Co." />
                <meta property="og:description" content="Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality." />
                <meta property="og:image" content="https://www.cloud9calm.com/path/to/c9c-logo-white.png" />
                <meta property="og:url" content="https://www.cloud9calm.com/website-development" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Website Development Services | Cloud9 Calm Co." />
                <meta name="twitter:description" content="Empower your online presence with Cloud9 Calm Co.'s dedicated web development support services. We specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality." />
                <meta name="twitter:image" content="https://www.cloud9calm.com/path/to/c9c-logo-white.png" />
                
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <main className='webdev'>
                <h2 className='webdev__title'>More information on Website Development</h2>
                <div className='webdev__top-section'>
                    <img 
                        className='webdev__logo'
                        src={isDarkMode ? c9cLogoWhite : c9cLogoBlack}
                        alt="Cloud9 Calm Logo" />
                    <h3 className='webdev__sub-title'>
                        Empower your online presence with my dedicated web development support services. I specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality.
                    </h3>
                </div>
                <img
                    className='webdev__graphic'
                    src={websiteGraphic}
                    alt="Graphic of two people working on a computer"
                />
                <div className='webdev__info'>
                    {services.map((service, index) => (
                        <div key={index} className='webdev__info-section'>
                            <h4 className='webdev__info-title'>{service.title}</h4>
                            <p className='webdev__info-desc'>{service.description}</p>
                        </div>
                    ))}
                </div>
                <WebDevelopmentInfo />
                <LetsConnect />
            </main>
        </>
    );
}

export default WebsiteDevelopment;