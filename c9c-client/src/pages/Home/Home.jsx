import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'; // Import Framer Motion
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Clients from '../../components/Clients/Clients';
import Contact from '../../components/Contact/Contact';

// Define scroll animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cloud9 Calm Co. | Premier Web Development and eCommerce Support</title>
        <meta
          name="description"
          content="Welcome to Cloud9 Calm Co. We offer premier web development and eCommerce support services. Our goal is to empower your online presence with seamless, user-friendly websites and optimized online stores."
        />
        <meta
          name="keywords"
          content="Penticton website developer, website Penticton, Okanagan website developer, Cloud9 Calm Co., web development, eCommerce support, website optimization, online store support"
        />
        <link rel="canonical" href="https://www.cloud9calm.com/" />
      </Helmet>
      <main>
        {/* Wrap each section with motion.div and apply animation */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
          <Header />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
          <Hero />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
          <About />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
          <Services />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
          <Clients />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariant}>
          <Contact />
        </motion.div>
      </main>
    </>
  );
};

export default Home;