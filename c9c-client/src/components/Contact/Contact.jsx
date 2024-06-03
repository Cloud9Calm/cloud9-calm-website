import './Contact.scss';
import erinCronie from '../../assets/images/erin-cronie-developer.jpg';

const Contact = () => { 
    const handleEmailClick = () => {
        window.location.href = "mailto:erin@cloud9calm.com?subject=Booking%20inquiry%20from%20cloud9calm.com%20to%20Erin%20Cronie";
      };


    return (
        <section className='contact'>
            <h2 className='contact__title'>Book A Free Consultation</h2>
                <h3 className='contact__sub-title'>Let's Chat About Your Goals ✨</h3>
                <h3 className='contact__sub-title-2'>Discover Cloud9 Calm Co.</h3>
            
                <img 
                className='contact__profile' 
                src={erinCronie} 
                alt="Cloud9 Calm Co.'s Erin Cronie" 
            />
                <p className='contact__description'>Led by Erin, a software developer, former teaching assistant at BrainStation, and Shopify Plus support specialist, I am committed to delivering top-notch web solutions and eCommerce support. With a passion for crafting seamless user experiences and a dedication to continuous learning, I will bring a unique blend of technical prowess and industry insight to every project. Join me on a journey towards digital excellence with Cloud9 Calm Co.</p>
                <button
                        className='contact__booking'
                        onClick={handleEmailClick}
                        aria-label="Click to email Erin Cronie with a booking inquiry from cloud9calm.com"
                >
                        Click Here To Email Erin
                </button>
       </section>
    );
}

export default Contact;