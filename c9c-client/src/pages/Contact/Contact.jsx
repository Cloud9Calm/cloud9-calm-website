import './Contact.scss';
import ContactForm from '../../components/ContactForm/ContactForm'; 
import FAQ from '../../components/FAQ/FAQ'; 
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => { 
    return (
        <motion.section 
            className="contact-page"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
        >
            <motion.h2 
                className='contact-page__title'
                variants={fadeInVariant}
            >
                Your next steps start here ☁️
            </motion.h2>
            <motion.div 
                className="contact-page__faq"
                variants={fadeInVariant}
            >
                <FAQ />
            </motion.div>
            <motion.div 
                className="contact-page__form"
                variants={fadeInVariant}
            >
                <ContactForm />
            </motion.div>
        </motion.section>
    );
}

export default ContactPage;