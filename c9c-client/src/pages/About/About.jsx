import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './About.scss';
import LetsConnect from '../../components/LetsConnect/LetsConnect';
import HeroImage from '../../assets/images/41204f67-e0a6-4909-92e1-4eb1da1a46cf.jpeg';

import erinCronieProfile from '../../assets/images/8f557f0e-ef8c-4aa4-9b4c-713aecd57e86.jpeg';

import quote from '../../assets/icons/quote.svg';
import person from '../../assets/icons/personSearch.svg';
import target from '../../assets/icons/target.svg';
import engineering from '../../assets/icons/engineering.svg';
import cloud from '../../assets/icons/cloud.svg';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Cloud9 Calm Co.",
    "description": "Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses.",
    "url": "https://www.cloud9calm.com/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Erin Cronie",
      "image": "https://www.cloud9calm.com/static/media/erin-cronie-developer-3.4b0d1fb98035f42df36b.jpeg",
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Cloud9 Calm Co."
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Cloud9 Calm Co. | Erin Cronie</title>
        <meta
          name="description"
          content="Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses."
        />
        <link rel="canonical" href="https://www.cloud9calm.com/about" />

        <meta property="og:title" content="About Cloud9 Calm Co. | Erin Cronie" />
        <meta property="og:description" content="Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses." />
        <meta property="og:image" content="https://www.cloud9calm.com/static/media/erin-cronie-developer-3.4b0d1fb98035f42df36b.jpeg" />
        <meta property="og:url" content="https://www.cloud9calm.com/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Cloud9 Calm Co. | Erin Cronie" />
        <meta name="twitter:description" content="Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses." />
        <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/erin-cronie-developer-3.4b0d1fb98035f42df36b.jpeg" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <motion.section
        className="about"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        {/* Hero */}
        <section className="about__hero" aria-label="About Cloud9 Calm Co. hero">
          <img
            src={HeroImage}
            alt="Cloud9 Calm Co. — collaborative web design session"
            className="about__hero-image"
          />
          <div className="about__hero-overlay">
            <h1 className="about__hero-title">About Cloud9 Calm Co.</h1>
            <p className="about__hero-subtitle">
              Stress-free, custom web development led by Erin Cronie — blending tech expertise
              with real small business experience.
            </p>
          </div>
        </section>

        {/* Intro */}
        <motion.div className="about__intro" variants={fadeInVariant}>
          <h2 className="about__intro-title">
            Hi, I'm <u><i>Erin</i></u>
          </h2>
          <img
            src={erinCronieProfile}
            alt="Erin Cronie"
            className="about__prof-img"
          />
          <p className="about__intro-mission">
            Welcome to <b>Cloud9 Calm Co.</b>, where I make web development stress-free
            for small businesses. I’m passionate about helping businesses grow by
            creating custom web solutions that are both beautiful and functional.
          </p>
        </motion.div>

            <motion.div className='about__fun-facts' variants={fadeInVariant}>
                <h2 className='about__fun-facts-title'>Fun Facts</h2>
                <p className='about__fun-facts-text'>
                    When I’m not busy building websites, I <i>love getting creative</i> in the kitchen, trying out new recipes, and sharing <i>delicious meals</i> with friends. You might also find me tending to my garden, sipping on a glass of <i>wine</i>, or unwinding with a good game. I also <i>love to travel</i>, exploring new places and experiencing different cultures. I’m all about <i>cozy moments</i>, whether it’s a quiet night in with my pets or hosting a <i>laid-back gathering</i> with the people I care about. Life’s all about <i>balance</i>—good food, good company, and a little bit of fun!
                </p>
            </motion.div>
            <LetsConnect />
        </motion.section>
        </>
    );
};

export default About;