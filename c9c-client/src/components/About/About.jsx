import React from 'react';
import { Helmet } from 'react-helmet';
import '../About/About.scss';
import Logo from '../../assets/images/cloud9-calm-logo.png';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Cloud9 Calm Co.</title>
        <meta name="description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
        <meta name="keywords" content="Penticton Website Design, Website Maintenance Penticton, E-commerce Support Penticton, Penticton Web Developer, Web Design Services Penticton, Local Web Designer Penticton, Custom Web Design Services, Responsive Web Design, Website Optimization Services, SEO Services for E-commerce, E-commerce Site Management, Cloud9 Calm Co." />        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About - Cloud9 Calm Co." />
        <meta property="og:description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cloud9calm.com/about" />
      </Helmet>
      <section className='about'>
        <h2 className='about__title'>What I Do</h2>
            <h3 className='about__description'>Crafting web solutions, enhancing eCommerce success</h3>
        
        <section className='about__cards-container'>
            <div className='about__card-1 cards'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>Web Development</h4>
                <p className='about__cards-description'>Web development involves the building and maintenance of websites and web applications that run online on a browser. It encompasses everything from creating simple static web pages to complex web-based applications, electronic businesses, and social network service</p>
            </div>
            
            <div className='about__card-2 cards'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>eCommerce Solutions</h4>
                <p className='about__cards-description'>E-commerce solutions streamline online sales through user-friendly websites, ensuring secure transactions and a smooth customer journey from browsing to checkout.</p>
            </div>
            
            <div className='about__card-3 cards'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>SEO</h4>
                <p className='about__cards-description'>I specialize in improving your search engine ranking by optimizing your website for search engines. With a tailored strategy, I can help you reach your target audience and increase your online visibility effectively.</p>
            </div>
        </section>
      </section>
    </>
  );
}

export default About;