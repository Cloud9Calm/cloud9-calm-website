import { Helmet } from 'react-helmet';
import '../Hero/Hero.scss';
import Logo from '../../assets/images/c9c-logo-white.png';

const Hero = () => {
    return (
        <>
        <Helmet>
            <title>Erin Cronie, owner ofCloud9 Calm Co.</title>
                <meta name="description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
                <meta name="keywords" content="Penticton Website Design, Website Maintenance Penticton, E-commerce Support Penticton, Penticton Web Developer, Web Design Services Penticton, Local Web Designer Penticton, Custom Web Design Services, Responsive Web Design, Website Optimization Services, SEO Services for E-commerce, E-commerce Site Management, Cloud9 Calm Co." />        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Cloud9 Calm Co." />
                <meta property="og:description" content="Learn about Cloud9 Calm Co. Crafting web solutions, enhancing eCommerce success." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.cloud9calm.com/about" />
        </Helmet>
        <section className='hero'>
            <img className='hero__logo' src={Logo} alt="Cloud9 Calm Co. logo in white" />
            <h1 className='hero__title'>Erin Cronie, Okanagan's Website Developer and eCommerce Specialist.</h1>
        </section>
        </>
    );
}   

export default Hero;