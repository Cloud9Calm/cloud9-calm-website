import { Helmet } from 'react-helmet';
import '../WebsiteDevelopment/WebsiteDevelopment.scss';
import seoGraphic from '../../assets/images/c9c-seo-support.png';
import services from '../../data/seo-services.json';
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import { Link } from 'react-router-dom';


const SEO = () => {
	return (
		<>
			<Helmet>
				<title>SEO Support Services | Cloud9 Calm Co.</title>
				<meta
					name='description'
					content="Boost your online visibility with Cloud9 Calm Co.'s dedicated SEO support services. I specialize in optimizing your website for search engines, improving rankings, and driving organic traffic to help your business succeed online."
				/>
				<meta
					name='keywords'
					content='Penticton SEO services, SEO support, Okanagan SEO, SEO optimization, website SEO, search engine optimization, SEO services Penticton, Cloud9 Calm Co.'
				/>
				<link rel='canonical' href='https://www.cloud9calm.com/seo-support' />
			</Helmet>
			<main className='seo'>
				<header className='seo__header'>
					<h2 className='seo__header-title'>Cloud9 Calm Co.</h2>
					<Link to='/' className='seo__header-menu-item'>
						Home
					</Link>
				</header>
				<h2 className='seo__title'>More Information on SEO Support</h2>
				<div className='seo__top-section'>
					<img
						className='seo__logo'
						src={c9cLogoWhite}
						alt='Cloud9 Calm Logo in white'
					/>
					<h3 className='seo__sub-title'>
						Boost your online presence with my dedicated SEO support services. I
						specialize in improving your website's visibility, tackling
						technical SEO challenges, optimizing keywords, and driving organic
						traffic to your site.
					</h3>
				</div>
				<img
					className='seo__graphic'
					src={seoGraphic}
					alt='Graphic of SEO strategy and analytics'
				/>
				<div className='seo__info'>
					{services.map((service, index) => (
						<div key={index} className='seo__info-section'>
							<h4 className='seo__info-title'>{service.title}</h4>
							<p className='seo__info-desc'>{service.description}</p>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default SEO;
