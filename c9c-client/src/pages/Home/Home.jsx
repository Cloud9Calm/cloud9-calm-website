import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact'; 

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
};  

export default Home;