import './LetsConnect.scss';
import email from '../../assets/icons/email.svg';
import { Link } from 'react-router-dom';

const LetsConnect = () => { 
    return (
        <section className='connect__cta'>
            <h2 className='connect__cta-title'>Let's Connect👋</h2>
            <p className='connect__cta-text'>
                Ready to bring your vision to life? Reach out to me today, and let’s
                chat about how I can help your business grow!
            </p>
            <img 
                src={email}
                alt="Email icon" 
                className="connect__cta-icon"
            />
            <Link 
                to='/contact' 
                className='connect__cta-link'
            >
                Get in touch
            </Link>
        </section>
    );
}

export default LetsConnect;