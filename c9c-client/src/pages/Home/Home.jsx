import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact'; 

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cloud9 Calm Co. | Premier Web Development and eCommerce Support</title>
        <meta name="description" content="Welcome to Cloud9 Calm Co. We offer premier web development and eCommerce support services. Our goal is to empower your online presence with seamless, user-friendly websites and optimized online stores." />
        <meta name="keywords" content="Penticton website developer, website Penticton, Okangan website developer, Cloud9 Calm Co., web development, eCommerce support, website optimization, online store support" />
        <link rel="canonical" href="https://www.cloud9calm.com/" />
      </Helmet>
      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
};  

export default Home;