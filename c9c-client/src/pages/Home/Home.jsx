import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Clients from '../../components/Clients/Clients';
import Contact from '../../components/Contact/Contact'; 

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cloud9 Calm Co. | Premier Web Development and eCommerce Support</title>
        <meta name="description" content="Welcome to Cloud9 Calm Co. We offer premier web development and eCommerce support services. Our goal is to empower your online presence with seamless, user-friendly websites and optimized online stores." />
        <meta name="keywords" content="Cloud9 Calm Co., web development, eCommerce support, website optimization, online store support, Penticton website developer, Okanagan website developer, Summerland website developer, Naramata website developer, Penticton web design, Okanagan web design, Summerland web design, Naramata web design, Penticton SEO services, Okanagan SEO services, Summerland SEO services, Naramata SEO services, Penticton Shopify support, Okanagan Shopify support, Summerland Shopify support, Naramata Shopify support, Penticton eCommerce solutions, Okanagan eCommerce solutions, Summerland eCommerce solutions, Naramata eCommerce solutions, Penticton online store creation, Okanagan online store creation, Summerland online store creation, Naramata online store creation" />        <link rel="canonical" href="https://www.cloud9calm.com/" />
      </Helmet>
      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
    </>
  );
};  

export default Home;