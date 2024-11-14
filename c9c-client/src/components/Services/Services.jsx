import './Services.scss';
import { Link } from 'react-router-dom';
import website from '../../assets/icons/website.svg';
import ecommerce from '../../assets/icons/shopping-cart.svg';
import seo from '../../assets/icons/seo-analytics.svg';
import '../../pages/WebsiteDevelopment/WebsiteDevelopment';

const Services = () => {
    return (
    <section className='services' id='services'>
        <h2 className='services__title'>What I do</h2>

            <h3 className='services__sub-title'>I provide expert web development services to create custom, user-friendly websites tailored to your business needs. Additionally, I offer comprehensive e-commerce support, helping you build and maintain secure, optimized online stores to enhance your sales and customer experience.</h3>
            
            <div className='services__cards-container'>

                <div className='services__card-1 s-cards'>
                    <div className='services__cards-upper-section'>
                        <img className='services__graphics' src={website} alt="Website icon" />
                        <h3 className='services__cards-title'>Web Development</h3>
                    </div>
                    <div className='services__cards-lower-section'>
                        <div>
                            <p className='services__cards-description'>My web development service transforms your vision into a dynamic online presence, leveraging cutting-edge technology to create responsive, visually appealing websites that deliver exceptional user experiences and support your business objectives.</p>
                        </div>
                        <div className='services__button-section'>
                            <Link to='/website-development' className='services__learn-more'>Learn more about Website Development→</Link> 
                        </div>
                    </div>
                </div>

                <div className='services__card-2 s-cards'>
                    <div className='services__cards-upper-section'>
                        <img className='services__graphics' src={ecommerce} alt="Shopping cart icon" />
                        <h3 className='services__cards-title'>eCommerce Support</h3>
                    </div>
                    <div className='services__cards-lower-section'>
                        <div>
                            <p className='services__cards-description'>My eCommerce support service is all about turning your online store vision into reality. I focus on creating responsive, user-friendly websites that provide a seamless shopping experience, helping you meet your business goals and grow your customer base.</p>                       
                        </div>
                     <div className='services__button-section'>
                        <Link to='ecommerce-support' className='services__learn-more'>Learn more about eCommerce Support→</Link> 
                     </div>
                   </div>
                </div>

                <div className='services__card-3 s-cards'>
                    <div className='services__cards-upper-section'>
                        <img className='services__graphics' src={seo} alt="SEO analytics icon" />
                        <h3 className='services__cards-title'>SEO</h3>
                    </div>
                    <div className='services__cards-lower-section'>
                        <div>
                            <p className='services__cards-description'>My SEO support service focuses on enhancing your website's visibility and driving organic traffic. I utilize proven strategies like keyword optimization, content refinement, and technical SEO to ensure your site ranks higher on search engines, helping your business attract more qualified leads and achieve long-term success.</p>                        
                        </div>
                        <div className='services__button-section'>
                            <Link to='seo' className='services__learn-more'>Learn more About SEO →</Link> 
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}


export default Services;

