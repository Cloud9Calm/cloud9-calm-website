import './EcommerceSupportInfo.scss';
import erinCronie from '../../assets/images/erin-cronie-back.jpg';
import services from '../../data/ecommerce-service-info.json';
import c9cLogo from '../../assets/images/cloud9-calm-logo.png';
import c9cPricing from '../../assets/images/cloud9calm-2024-prices.pdf';

const EcommerceSupportInfo = () => {
return (
        <section className='ecommerce'>
            <h3 className='ecommerce__description'>
                From seamless setup to continuous enhancement, I ensure your online store not only meets but exceeds your business goals. Let’s make your eCommerce journey smooth and successful, every step of the way.
            </h3>

            <img
                src={erinCronie}
                alt="Developer Erin Cronie looking at her computer"
                className='ecommerce__img'
            />
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
                            <p className='ecommerce__services-item-description'>{service.description}</p>
                            <p className='ecommerce__services-item-price'>{service.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='ecommerce__pricing'>
                <p className='ecommerce__pricing-note'>Prices can be negotiated to support affordable web services. Let's work together to find a solution that fits your budget.</p>
                <a 
                    href={c9cPricing} 
                    className='ecommerce__pricing-button' 
                    download="Cloud9CalmCo_Pricing.pdf">Download Pricing PDF</a>
            </div>
        </section>
    );
}

export default EcommerceSupportInfo;