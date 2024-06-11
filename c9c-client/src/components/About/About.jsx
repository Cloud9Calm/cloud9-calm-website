import React from 'react';
import { Helmet } from 'react-helmet';
import '../About/About.scss';
import Logo from '../../assets/images/cloud9-calm-logo.png';
import erinCronie from '../../assets/images/erin-cronie-developer.jpg'; 

const About = () => {
  return (
      <section className='about' id='about'>
        <Helmet>
          <title>About Erin Cronie | Cloud9 Calm Co.</title>
          <meta name="description" content="Learn more about Erin Cronie, a passionate software developer and founder of Cloud9 Calm Co., specializing in web development, eCommerce solutions, and SEO services." />
          <meta name="keywords" content="Erin Cronie, Cloud9 Calm Co., software developer, web development, eCommerce solutions, SEO services" />
          <meta property="og:title" content="About Erin Cronie | Cloud9 Calm Co." />
          <meta property="og:description" content="Discover Erin Cronie's journey in tech and her expertise in web development, eCommerce solutions, and SEO services at Cloud9 Calm Co." />
          <meta property="og:image" content={erinCronie} />
          <meta property="og:url" content="https://cloud9calm.com/#about" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        
        <h2 className='about__title'>More about Erin!</h2>
        <img 
            className='about__profile-img'
            src={erinCronie} 
            alt="Erin Cronie, owner of Cloud9 Calm Co." />
        <p className='about__description'>
          Hey there, I’m Erin! 👋 I grew up in the picturesque village of Naramata, BC, Canada, where I spent six years immersed in the wine industry. During this time, I served as the general manager at Mile Zero Wine Bar, honing my leadership and hospitality skills. I also worked as a sales representative with Whistler Tree Wines, where I developed a deep appreciation for fine wines and cultivated strong customer relationships. This experience enriched my understanding of business management and customer service, shaping my professional journey in unique and valuable ways.
        </p>
        
        <h3 className='about__title'>Services I can offer</h3> 
        <section className='about__cards-container'>
            <div className='about__card-1'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>Web Development</h4>
                <p className='about__cards-description'>Web development involves the building and maintenance of websites and web applications that run online on a browser. It encompasses everything from creating simple static web pages to complex web-based applications, electronic businesses, and social network services.</p>
            </div>
            
            <div className='about__card-2'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>eCommerce Solutions</h4>
                <p className='about__cards-description'>E-commerce solutions streamline online sales through user-friendly websites, ensuring secure transactions and a smooth customer journey from browsing to checkout.</p>
            </div>
            
            <div className='about__card-3'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>SEO</h4>
                <p className='about__cards-description'>I specialize in improving your search engine ranking by optimizing your website for search engines. With a tailored strategy, I can help you reach your target audience and increase your online visibility effectively.</p>
            </div>
        </section>
      </section>
  );
}

export default About;