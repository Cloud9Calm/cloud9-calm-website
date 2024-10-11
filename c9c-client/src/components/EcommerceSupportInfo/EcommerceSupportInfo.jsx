import './EcommerceSupportInfo.scss';

import services from '../../data/ecommerce-service-info.json';

import erinCronie from '../../assets/images/erin-cronie-back.jpg';
import c9cLogo from '../../assets/images/cloud9-calm-logo.png';

import Contact from '../Contact/Contact';

const EcommerceSupportInfo = () => {
return (
        <section className='ecommerce'>
            <div className='ecommerce__section'>
            <h3 className='ecommerce__description'>
                Your online store deserves more than just a launch—it needs constant care and optimization to thrive. With my expert eCommerce services, I’ll support you in creating a seamless, efficient, and customer-focused experience that drives growth. Let’s turn your eCommerce vision into a long-term success story, every step of the way.
            </h3>

                <img
                    src={erinCronie}
                    alt="Developer Erin Cronie looking at her computer"
                    className='ecommerce__img'
                />
            </div>
            <div className='ecommerce__services'>
                <h3 className='ecommerce__services-title'>☁️ Discover My Comprehensive eCommerce Services! ☁️</h3>
                <ul className='ecommerce__services-list'>
                    {services.services.map((service, index) => (
                        <li key={index} className='ecommerce__services-item'>
                            <img 
                                src={c9cLogo} 
                                alt="Cloud9 Calm Co logo in blue"
                                className='ecommerce__services-logo' />
                            <h4 className='ecommerce__services-item-title'>{service.title}</h4>
                            <p className='ecommerce__services-item-desc'>{service.description}</p>
                            <p className='ecommerce__services-item-price'>{service.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
           
            <Contact />
        </section>
    );
}

export default EcommerceSupportInfo;