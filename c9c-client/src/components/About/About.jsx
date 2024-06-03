import '../About/About.scss';
import Logo from '../../assets/images/cloud9-calm-logo.png';

const About = () => {
  return (
      <section className='about'>
        <h2 className='about__title'>What I Can Offer, Plus More!</h2>
            <h3 className='about__description'>Crafting web solutions, enhancing eCommerce success</h3>
        
        <section className='about__cards-container'>
            <div className='about__card-1'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>Web Development</h4>
                <p className='about__cards-description'>Web development involves the building and maintenance of websites and web applications that run online on a browser. It encompasses everything from creating simple static web pages to complex web-based applications, electronic businesses, and social network service</p>
            </div>
            
            <div className='about__card-2'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>eCommerce Solutions</h4>
                <p className='about__cards-description'>E-commerce solutions streamline online sales through user-friendly websites, ensuring secure transactions and a smooth customer journey from browsing to checkout.</p>
            </div>
            
            <div className='about__card-3'>
                <img className='about__c9c-logo' src={Logo} alt="Cloud9 Calm Co Logo in blue" />
                <h4 className='about__cards-title'>SEO</h4>
                <p className='about__cards-description'>I specialize in improving your search engine ranking by optimizing your website for search engines. With a tailored strategy, I can help you reach your target audience and increase your online visibility effectively.</p>
            </div>
        </section>
      </section>
  );
}

export default About;