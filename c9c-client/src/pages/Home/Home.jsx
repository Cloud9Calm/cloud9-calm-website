import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact'; 

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
};  

export default Home;