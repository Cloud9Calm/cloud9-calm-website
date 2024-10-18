import './EcommerceSupport.scss'; 

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ecommerceGraphic from '../../assets/images/c9c-3d-ecommerce.webp';
import services from '../../data/ecommerce-support-services.json'; 
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import EcommerceInfo from '../../components/EcommerceSupportInfo/EcommerceSupportInfo'; 

const EcommerceSupport = () => {
  return (
    <>
      <Helmet>
        <title>eCommerce Support Services | Cloud9 Calm Co.</title>
        <meta name="description" content="Maximize your eCommerce potential with Cloud9 Calm Co.'s dedicated support services. We specialize in managing your eCommerce platform, optimizing sales funnels, and ensuring smooth operations for your online store." />
        <meta name="keywords" content="Penticton eCommerce support, eCommerce Penticton, Okanagan eCommerce developer, Shopify support, eCommerce solutions, website support, technical support, online store updates, Cloud9 Calm Co." />
        <link rel="canonical" href="https://www.cloud9calm.com/ecommerce-support" />
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
      </main>
    </>
  );
}

export default EcommerceSupport;