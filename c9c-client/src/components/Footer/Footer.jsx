import './Footer.scss';
import Linkedin from '../../assets/images/social-icons/linkedin.svg';   
import Instagram from '../../assets/images/social-icons/instagram.svg';    
import Facebook from '../../assets/images/social-icons/facebook.svg';
import GitHub from '../../assets/images/social-icons/github.svg';   
import Shopify from '../../assets/images/social-icons/shopify.svg';

const Footer = () => {
    return(
        <footer className='footer' id='footer'>
            <div className='footer__info'>
                <h2 className='footer__title'>C9C SOCIAL MEDIA ☁️💻</h2>
                    <h3 className='footer__sub-title'>Your partner for standout web solutions. Elevating online presence, one click at a time.</h3>
                    <p className='footer__copywrite'> Copyright Cloud9 Calm Co. 2024</p>
            </div>

            <div className='footer__socials'>
  <div className='footer__Linkedin'>
    <img 
      className='footer__social-icons'
      src={Linkedin} 
      alt="Linkedin Icon" />
    <h3 className='footer__social-titles'>
      <a 
        href="https://www.linkedin.com/in/erin-cronie" 
        target="_blank" 
        rel="noopener noreferrer">
        Linkedin
      </a>
    </h3>
  </div>

  <div className='footer__Instagram'>
    <img 
      className='footer__social-icons'
      src={Instagram} 
      alt="Instagram Icon" />
    <h3 className='footer__social-titles'>
      <a href="https://www.instagram.com/cloud9calmco" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </h3>
  </div>

  <div className='footer__Facebook'>
    <img 
      className='footer__social-icons'
      src={Facebook} 
      alt="Facebook Icon" />
    <h3 className='footer__social-titles'>
      <a 
        href="https://www.facebook.com/profile.php?id=61559123841203" 
        target="_blank" 
        rel="noopener noreferrer">
        Facebook
      </a>
    </h3>
  </div>

  <div className='footer__GitHub'>
    <img 
      className='footer__social-icons'
      src={GitHub}
      alt="GitHub Icon" />
    <h3 className='footer__social-titles'>
      <a 
        href="https://github.com/Cloud9Calm" 
        target="_blank" 
        rel="noopener noreferrer">
        GitHub
      </a>
    </h3>
  </div>

  <div className='footer__Shopify'>
    <img 
      className='footer__social-icons'
      src={Shopify}
      alt="Shopify Icon" />
    <h3 className='footer__social-titles'>
      <a 
        href="https://cloudnine-calm.myshopify.com" 
        target="_blank" 
        rel="noopener noreferrer">
        Shopify Store
      </a>
    </h3>
  </div>
</div>
       </footer>
    );
}
    export default Footer;