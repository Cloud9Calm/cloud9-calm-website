import './Contact.scss';
import ContactForm from '../../components/ContactForm/ContactForm'; 
import FAQ from '../../components/FAQ/FAQ'; 

const ContactPage = () => { 
    return (
        <section className="contact-page">
            <h2 className='contact-page__title'>Your next steps start here ☁️</h2>
             <div className="contact-page__faq">
                <FAQ />
            </div>
            <div className="contact-page__form">
                <ContactForm />
            </div>
        </section>
    );
}

export default ContactPage;