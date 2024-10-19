import './WebDevelopmentInfo.scss';

import services from '../../data/website-development-services.json';

import erinCronie from '../../assets/images/erin-cronie-back-2.jpg';
import c9cLogo from '../../assets/images/cloud9-calm-logo.png';


const WebDevelopmentInfo = () => {
    return (
        <section className='dev-services'>
            <div className='dev-services__section'>
                <h3 className='dev-services__description'>
                    From seamless setup to continuous enhancement, I ensure your online presence not only meets but exceeds your business goals. Let’s make your web development journey smooth and successful, every step of the way.
                </h3>
            <img
                src={erinCronie}
                alt="Developer Erin Cronie looking at her computer"
                className='dev-services__img'
            />
            </div>
                <div className='dev-services__services'>
                    <h3 className='dev-services__services-title'>☁️ Discover My Comprehensive Web Development Services! ☁️</h3>
                    <div className='dev-services__services-container'>
                        <ul className='dev-services__services-list'>
                            {services.services.map((service, index) => (
                                <li key={index} className='dev-services__services-item'>
                                    <img 
                                        src={c9cLogo} 
                                        alt="Cloud9 Calm Co logo in blue"
                                        className='dev-services__services-logo' />
                                    <h4 className='dev-services__services-item-title'>{service.title}</h4>
                                    <p className='dev-services__services-item-desc'>{service.description}</p>
                                    <p className='dev-services__services-item-price'>{service.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </section>
    );
}

export default WebDevelopmentInfo;