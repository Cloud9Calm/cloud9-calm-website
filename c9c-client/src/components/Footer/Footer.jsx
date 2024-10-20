import './Footer.scss';
import { Link } from 'react-router-dom';

import Linkedin from '../../assets/images/social-icons/linkedin.svg';   
import Instagram from '../../assets/images/social-icons/instagram.svg';    
import Facebook from '../../assets/images/social-icons/facebook.svg';
import GitHub from '../../assets/images/social-icons/github.svg';   
import Shopify from '../../assets/images/social-icons/shopify.svg';

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className='footer__info'>
                <h2 className='footer__title'>C9C SOCIAL MEDIA ☁️💻</h2>
                <h3 className='footer__sub-title'>
                    Your partner for standout web solutions. Elevating online presence, one click at a time.
                </h3>
            </div>

            <div className='footer__socials'>

                <div className='footer__Linkedin'>
                    <a href="https://www.linkedin.com/in/erin-cronie" target="_blank" rel="noopener noreferrer">
                        <img className='footer__social-icons' src={Linkedin} alt="LinkedIn Icon" />
                    </a>
                </div>

                <div className='footer__Instagram'>
                    <a href="https://www.instagram.com/cloud9calmco" target="_blank" rel="noopener noreferrer">
                        <img className='footer__social-icons' src={Instagram} alt="Instagram Icon" />
                    </a>
                </div>

                <div className='footer__Facebook'>
                    <a href="https://www.facebook.com/profile.php?id=61559123841203" target="_blank" rel="noopener noreferrer">
                        <img className='footer__social-icons' src={Facebook} alt="Facebook Icon" />
                    </a>
                </div>
         
                <div className='footer__GitHub'>
                    <a href="https://github.com/Cloud9Calm" target="_blank" rel="noopener noreferrer">
                        <img className='footer__social-icons' src={GitHub} alt="GitHub Icon" />
                    </a>
                </div>

       
                <div className='footer__Shopify'>
                    <a href="https://cloudnine-calm.myshopify.com" target="_blank" rel="noopener noreferrer">
                        <img className='footer__social-icons' src={Shopify} alt="Shopify Icon" />
                    </a>
                </div>
            </div>

          <div className='footer__policies'>
            <p className='footer__copyright'>Copyright Cloud9 Calm Co. 2024</p>
         
            <Link to="/privacy-policy" className='footer__policy'>Privacy Policies</Link>
          </div>
       </footer>
    );
};

export default Footer;