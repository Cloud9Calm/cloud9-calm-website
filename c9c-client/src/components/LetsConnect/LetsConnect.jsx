import './LetsConnect.scss';
import email from '../../assets/icons/email.svg';

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
            <a 
                href='https://dashboard.cloud9calm.com/public/66feeb5f372371001f841096' 
                className='connect__cta-link'
                target='_blank'
                rel='noopener noreferrer'
            >
                Get in touch
            </a>
        </section>
    );
}

export default LetsConnect;