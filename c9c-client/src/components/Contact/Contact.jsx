import './Contact.scss';
import erinCronie from '../../assets/images/erin-cronie-developer-3.jpeg';

const Contact = () => { 
    const handleEmailClick = () => {
        window.location.href = "mailto:erin@cloud9calm.com?subject=Booking%20inquiry%20from%20cloud9calm.com%20to%20Erin%20Cronie";
      };

    return (
        <section className='contact' id='contact'>
            <h2 className='contact__title'>Book A Free Consultation</h2>
            <h3 className='contact__sub-title'>Let's Chat About Your <i>Goals</i> ✨</h3>
            <h3 className='contact__sub-title-2'>Discover <i>Cloud9 Calm Co.</i></h3>
            
            <img 
                className='contact__profile' 
                src={erinCronie} 
                alt="Cloud9 Calm Co.'s Erin Cronie" 
            />

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
                <a
                    href="https://dashboard.cloud9calm.com/public/66feead6372371001f841019"
                    target="_blank"
                    rel="noopener noreferrer"  
                    className="contact__meet"
                >
                    Book a free meeting!
                </a>
            </div>
       </section>
    );
}

export default Contact;