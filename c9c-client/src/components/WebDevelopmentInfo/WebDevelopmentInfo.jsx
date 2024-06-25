import './WebDevelopmentInfo.scss';
import erinCronie from '../../assets/images/erin-cronie-back-2.jpg';
import services from '../../data/website-development-info.json';
import c9cLogo from '../../assets/images/cloud9-calm-logo.png';
import c9cPricing from '../../assets/images/cloud9calm-2024-prices.pdf';

const WebDevelopmentInfo = () => {
    console.log('WebDevelopmentInfo rendered');
    return (
        <section className='webdevinfo'>
            <h3 className='webdevinfo__description'>
                From seamless setup to continuous enhancement, I ensure your online presence not only meets but exceeds your business goals. Let’s make your web development journey smooth and successful, every step of the way.
            </h3>

            <img
                src={erinCronie}
                alt="Developer Erin Cronie looking at her computer"
                className='webdevinfo__img'
            />
            <div className='webdevinfo__services'>
                <h3 className='webdevinfo__services-title'>☁️ Discover My Comprehensive Web Development Services! ☁️</h3>
                <ul className='webdevinfo__services-list'>
                    {services.services.map((service, index) => (
                        <li key={index} className='webdevinfo__services-item'>
                            <img 
                                src={c9cLogo} 
                                alt="Cloud9 Calm Co logo in blue"
                                className='webdevinfo__services-logo' />
                            <h4 className='webdevinfo__services-item-title'>{service.title}</h4>
                            <p className='webdevinfo__services-item-description'>{service.description}</p>
                            <p className='webdevinfo__services-item-price'>{service.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='webdevinfo__pricing'>
                <p className='webdevinfo__pricing-note'>Prices can be negotiated to support affordable web services. Let's work together to find a solution that fits your budget.</p>
                <a 
                    href={c9cPricing} 
                    className='webdevinfo__pricing-button' 
                    download="Cloud9CalmCo_Pricing.pdf">Download Pricing PDF</a>
            </div>
        </section>
    );
}

export default WebDevelopmentInfo;