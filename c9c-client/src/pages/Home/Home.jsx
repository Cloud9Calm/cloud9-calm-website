import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'; // Import Framer Motion
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

// Define scroll animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cloud9 Calm Co. | Penticton and Okanagan Web Development and eCommerce Support</title>
        <meta
          name="description"
          content="Welcome to Cloud9 Calm Co. I offer premier web development and eCommerce support services. My goal is to empower your online presence with seamless, user-friendly websites and optimized online stores."
        />
        <meta
          name="keywords"
          content="Penticton website developer, website Penticton, Okanagan website developer, Cloud9 Calm Co., web development, eCommerce support, website optimization, online store support"
        />
        <link rel="canonical" href="https://www.cloud9calm.com/" />
      </Helmet>

      <Header />

      <div className="home">
    <Hero />

        {/* Services Overview */}
        <motion.section
          className="home__services-overview"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h2 className="home__services-title">What I Do</h2>
          <div className="home__services-list">
            <div className="home__service-item">
              <h3 className="home__service-title">Website Development</h3>
              <p className="home__service-description">
                Custom websites designed to reflect your brand’s identity and engage your audience.
              </p>
            </div>
            <div className="home__service-item">
              <h3 className="home__service-title">eCommerce Solutions</h3>
              <p className="home__service-description">
                Seamless, user-friendly online stores built to help you grow and manage your business with ease.
              </p>
            </div>
            <div className="home__service-item">
              <h3 className="home__service-title">SEO Support</h3>
              <p className="home__service-description">
                Optimizing your site to increase visibility and drive organic traffic.
              </p>
            </div>
          </div>
          <a href="/services" className="home__cta-link">Explore Services</a>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="home__about"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h2 className="home__about-title">About Cloud9 Calm Co.</h2>
          <p className="home__about-description">
            As a one-person team, I bring a personal touch to every project. With years of experience in eCommerce 
            and web development, my goal is to help small businesses like yours succeed online. I’m dedicated to 
            crafting custom websites that not only look great but are optimized to perform.
          </p>
          <a href="/about" className="home__cta-link">Learn More About Me →</a>
        </motion.section>

        {/* Portfolio/Testimonials Section (Optional) */}
        <motion.section
          className="home__portfolio"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h2 className="home__portfolio-title">See My Work</h2>
          <div className="home__portfolio-item">
            <img src="path-to-image" alt="Project Screenshot" className="home__portfolio-image" />
            <p className="home__portfolio-description">Project Name – Brief description of the work.</p>
          </div>
          <a href="/portfolio" className="home__cta-link">View Portfolio →</a>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="home__call-to-action"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h2 className="home__cta-title">Let’s Build Something Amazing Together</h2>
          <p className="home__cta-description">
            Whether you're looking for a new website, need help with your eCommerce store, or want to improve your site's SEO, I’m here to help. 
            Let’s take your business to the next level!
          </p>
          <button className="home__cta-button">Get in Touch</button>
        </motion.section>
      </div>
    </>
  );
};

export default Home;