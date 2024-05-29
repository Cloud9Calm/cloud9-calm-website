import '../Hero/Hero.scss';
import Logo from '../../assets/images/c9c-logo-white.png';

const Hero = () => {
    return (
        <section className='hero'>
            <img className='hero__logo' src={Logo} alt="Cloud9 Calm Co. logo in white" />
            <h1 className='hero__title'>Erin Cronie, Okanagan's Website Developer and eCommerce Specialist.</h1>
        </section>
    );
    }   

export default Hero;