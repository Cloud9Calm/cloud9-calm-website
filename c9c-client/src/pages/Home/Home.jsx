import '../Home/Home.scss';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

import erinCronieProfile from '../../assets/images/erin-cronie-website-profile.png';
import c9cProject from '../../assets/images/c9c-project-nvvr.png';
import erinCronieComp from '../../assets/images/erin-cronie-developer-2.jpg'

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cloud9 Calm Co. | Penticton and Okanagan's Web Development and eCommerce Support",
  "description": "Welcome to Cloud9 Calm Co. I offer premier web development and eCommerce support services. My goal is to empower your online presence with seamless, user-friendly websites and optimized online stores.",
  "url": "https://www.cloud9calm.com/",
  "mainEntity": {
    "@type": "Organization",
    "name": "Cloud9 Calm Co.",
    "logo": "https://www.cloud9calm.com/path/to/c9c-logo-white.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61559123841203",
      "https://x.com/cloud9calmco",
      "https://www.linkedin.com/company/102845546"
    ]
  }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cloud9 Calm Co. | Penticton and Okanagan's Web Development and eCommerce Support</title>
        <meta
          name="description"
          content="Welcome to Cloud9 Calm Co. I offer premier web development and eCommerce support services. My goal is to empower your online presence with seamless, user-friendly websites and optimized online stores."
        />
        <meta
          name="keywords"
          content="Penticton website developer, website Penticton, Okanagan website developer, Cloud9 Calm Co., web development, eCommerce support, website optimization, online store support"
        />
        <link rel="canonical" href="https://www.cloud9calm.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="home">
        
        <Hero />
        
        <motion.section
          className="home__about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h2 className="home__about-title">About Cloud9 Calm Co.</h2>
          <img 
              src={erinCronieProfile} 
              alt="Erin Cronie" 
              className='home__about-profile'
            />
          <p className="home__about-description">
            My name is <strong>Erin</strong> from the beautiful Okanagan. As a one-person team, I bring a personal touch to every project. With years of experience in eCommerce 
            and web development, my goal is to help small businesses like yours succeed online. I’m dedicated to 
            crafting custom websites that not only look great but are optimized to perform.
          </p>
          <a href="/about" className="home__cta-link-1">Learn More About Me →</a>
        </motion.section>

         <motion.section
          className="home__services-overview"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
            <div className="home__services-list">
              <Services />
            </div>
        </motion.section>

        <motion.section
          className="home__portfolio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h2 className="home__portfolio-title">See My Work</h2>
          <div className="home__portfolio-item">
            <img 
                src={c9cProject} alt="Screenshot of naramatavineyardbnb.ca homepage" 
                className="home__portfolio-image" 
              />
            <p className="home__portfolio-description">Naramata Vineyard Vacation Rental - Escape to a peaceful retreat in the heart of Naramata wine country, where vineyard views and serene landscapes surround you in comfort and relaxation. ☁️🍇</p>
          </div>
          <a href="/portfolio" className="home__cta-link-2">See my experience showcase →</a>
        </motion.section>


        <motion.section
          className="home__cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h2 className="home__cta-title">Let’s Build Something Amazing Together</h2>
          <p className="home__cta-description">
            Whether you're looking for a new website, need help with your eCommerce store, or want to improve your site's SEO, I’m here to help. 
            Let’s take your business to the next level!
          </p>
            <img 
                src={erinCronieComp} 
                alt="Erin Cronie Penticton's website developer" 
                className='home__cta-img'
              />
          
              <Link
              to='/contact'
              className='home__cta-link-1'>
              Get in Touch
              </Link>
        </motion.section>
      </div>
    </>
  );
};

export default Home;