import './Contact.scss';
import Email from '../../assets/icons/email.svg';
import { Link } from 'react-router-dom';

const Contact = () => { 
    return (
        <section className='contact' id='contact'>
            <h2 className='contact__title'>Book A Free Consultation</h2>
            <h3 className='contact__sub-title'>Let's Chat About Your <i>Goals</i> ✨</h3>
            <h3 className='contact__sub-title-2'>Discover <i>Cloud9 Calm Co.</i></h3>
            <p className='contact__description'>
                I am a <i>software developer</i>, former <i>software engineering teaching assistant</i> at <u>BrainStation</u>, and <i>Shopify Plus support specialist</i>. 
                With experience supporting <u>million-dollar Shopify Plus stores</u>, I am committed to delivering <i>top-notch web solutions</i> and <i>eCommerce support</i>. 
                My passion for crafting <i>seamless user experiences</i>, combined with a dedication to <i>continuous learning</i>, ensures I bring a unique blend of 
                <i>technical prowess</i> and <i>industry insight</i> to every project. Join me on a journey towards <i>digital excellence</i>.
            </p>
            <div className='contact__pricing'>
                <p className='contact__pricing-note'>
                    Prices can be <i>negotiated</i> to support <u>affordable web services</u>. Let's work together to find a solution that fits your <i>budget</i>.
                </p>
                <img 
                    className='contact__icon' 
                    src={Email} 
                    alt="Email icon" 
                />
                <Link to="/contact" className="contact__meet">
                    Book a free meeting!
                </Link>
            </div>
       </section>
    );
}

export default Contact;