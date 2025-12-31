import './Contact.scss';
import ContactForm from '../../components/ContactForm/ContactForm'; 
import FAQ from '../../components/FAQ/FAQ'; 
import { motion } from 'framer-motion';
import HeroImage from '../../assets/images/5aa876f2-605e-4ee0-8407-e174194c0f72.jpeg';

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
      
   <section className="contact-page__hero">
  <img
    src={HeroImage}
    alt="Calm workspace representing Cloud9 Calm Co. contact page"
    className="contact-page__hero-image"
  />
  <div className="contact-page__hero-overlay">
    <h1 className="contact-page__hero-title">Let's Bring Your Vision to Life</h1>
    <p className="contact-page__hero-subtitle">
      Whether you’re ready to launch or just exploring ideas, I’d love to chat about your project.
    </p>
  </div>
</section>

      <motion.h2 
        className="contact-page__title"
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