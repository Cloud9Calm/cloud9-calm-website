import React, { useEffect, useState } from 'react';
import '../Hero/Hero.scss';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import WhiteLogo from '../../assets/images/c9c-logo-white.png';
import BlackLogo from '../../assets/images/c9c-logo-black.png';

const Hero = () => {
    const [logo, setLogo] = useState(BlackLogo);

    useEffect(() => {
        const updateLogo = () => {
            const isDarkMode = document.body.classList.contains('dark-theme');
            setLogo(isDarkMode ? WhiteLogo : BlackLogo);
        };

        updateLogo();

        const observer = new MutationObserver(updateLogo);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <Helmet>
            <title>Cloud9 Calm Co | Penticton and Okanagan's Website Solutions</title>
            <meta name="description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
            <meta name="keywords" content="Penticton Website Design, Website Maintenance Penticton, E-commerce Support Penticton, Penticton Web Developer, Web Design Services Penticton, Local Web Designer Penticton, Custom Web Design Services, Responsive Web Design, Website Optimization Services, SEO Services for E-commerce, E-commerce Site Management, Cloud9 Calm Co." />        
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Cloud9 Calm Co." />
            <meta property="og:description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.cloud9calm.com/about" />
        </Helmet>

        <section className="hero" id='home'>
            <img className='hero__logo' src={logo} alt="Cloud9 Calm Co. logo" />
            <h1 className='hero__title'>Custom Web Solutions for Growing Businesses</h1>
            <p className='hero__info'>Helping you connect, grow, and thrive online with tailored web development, eCommerce, and SEO services. ☁️</p>
        
            <Link 
              to='/contact' 
              className="hero__cta-button" 
            >
              Start Your Project
            </Link>
        </section>
        </>
    );
};

export default Hero;