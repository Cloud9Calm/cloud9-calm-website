import '../Services/Services.scss';
import website from '../../assets/images/website-design-graphic.png';
import ecommerce from '../../assets/images/ecommerce-support-graphic.png';

const Services = () => {
    return (
    <section className='services'>
        <h2 className='services__title'>More information on my services</h2>
            <h3 className='services__sub-title'>I provide expert web development services to create custom, user-friendly websites tailored to your business needs. Additionally, I offer comprehensive e-commerce support, helping you build and maintain secure, optimized online stores to enhance your sales and customer experience.</h3>

            <div className='services__cards-container'>
                <div className='services__card-1 s-cards'>
                    <img className='services__graphics' src={website} alt="Graphic of a laptop with notebook and pen" />
                    <h3 className='services__cards-title'>Web Development</h3>
                        <p className='services__cards-description'>My web development service transforms your vision into a dynamic online presence, leveraging cutting-edge technology to create responsive, visually appealing websites that deliver exceptional user experiences and support your business objectives.</p>
                            <button className='services__learn-more'>Learn more</button>
                </div>
                <div className='services__card-2 s-cards'>
                    <img className='services__graphics' src={ecommerce} alt="Graphic of a cell phone and shopping cart" />
                    <h3 className='services__cards-title'>eCommerce Support</h3>
                        <p className='services__cards-description'>eCommerce support service is all about bringing your online store vision to life. With a focus on delivering exceptional user experiences and supporting your business objectives, I leverage cutting-edge technology to craft responsive and visually appealing websites.</p>
                            <button className='services__learn-more'>Learn more</button>

                </div>
            </div>
    </section>
    );
}


export default Services;

//TODO:
//update buttons to links when services are ready