import { Helmet } from 'react-helmet';
import '../Hero/Hero.scss';
import Logo from '../../assets/images/c9c-logo-white.png';

const Hero = () => {
    return (
        <>
        <Helmet>
            <title>Cloud9 Calm Co | Penticton and Okangans website solutions</title>
            <meta name="description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
            <meta name="keywords" content="Penticton Website Design, Website Maintenance Penticton, E-commerce Support Penticton, Penticton Web Developer, Web Design Services Penticton, Local Web Designer Penticton, Custom Web Design Services, Responsive Web Design, Website Optimization Services, SEO Services for E-commerce, E-commerce Site Management, Cloud9 Calm Co." />        
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Cloud9 Calm Co." />
            <meta property="og:description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.cloud9calm.com/about" />
        </Helmet>
        <section className='hero' id='home'>
            <img className='hero__logo' src={Logo} alt="Cloud9 Calm Co. logo in white" />
            <h1 className='hero__title'>Custom Web Solutions for Growing Businesses</h1>
            <p className='hero__info'>Helping you connect, grow, and thrive online with tailored web development, eCommerce, and SEO services. ☁️</p>
            <a 
              href='https://dashboard.cloud9calm.com/schedule/66fe1dc5e028ba001f5ee478' 
              className="hero__cta-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Your Project
            </a>
        </section>
        </>
    );
}   

export default Hero;