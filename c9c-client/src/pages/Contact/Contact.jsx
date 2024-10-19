import './Contact.scss';

import Contact from '../../components/Contact/Contact'; 
import ContactForm from '../../components/ContactForm/ContactForm'; 

const ContactPage = () => { 
    return (
        <section>
            <Contact />
            <ContactForm />
        </section>
    );
}

export default ContactPage;