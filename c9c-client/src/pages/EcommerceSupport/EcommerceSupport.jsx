import React from 'react';
import { Helmet } from 'react-helmet';
import '../EcommerceSupport/EcommerceSupport.scss';
import ecommerceGraphic from '../../assets/images/c9c-ecommerce-support-img.png';
import services from '../../data/ecommerce-support-services.json'; 
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import { Link } from 'react-router-dom';

const EcommerceSupport = () => {
  return (
    <>
      <Helmet>
        <title>Ecommerce Support Services | Cloud9 Calm Co.</title>
        <meta name="description" content="Enhance your online store with Cloud9 Calm Co.'s comprehensive eCommerce support services. I focus on optimizing your eCommerce platform, managing technical issues, implementing updates, and improving functionality to drive sales and enhance the customer experience." />
        <meta name="keywords" content="Penticton website developer, website Penticton, Okangan website developer,, eCommerce support, online store optimization, technical support, website updates, Cloud9 Calm Co." />
        <link rel="canonical" href="https://www.cloud9calm.com/ecommerce-support" />
      </Helmet>
      <main className='webdev'>
        <header className='webdev__header'>
          <h2 className='webdev__header-title'>
            Cloud9 Calm Co.
          </h2>
          <Link to='/' className='webdev__header-menu-item'>Home</Link>
        </header>
        <h2 className='webdev__title'>More information on Ecommerce Support</h2>
        <div className='webdev__top-section'>
          <img 
            className='webdev__logo'
            src={c9cLogoWhite}
            alt="Cloud9 Calm Logo in white" />
          <h3 className='webdev__sub-title'>
            Enhance your online store with my comprehensive eCommerce support services. I focus on optimizing your eCommerce platform, managing technical issues, implementing updates, and improving functionality to drive sales and enhance the customer experience.
          </h3>
        </div>
        <img
          className='webdev__graphic'
          src={ecommerceGraphic}
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
      </main>
    </>
  );
}

export default EcommerceSupport;