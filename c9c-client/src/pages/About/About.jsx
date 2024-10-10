import './About.scss';

import erinCronieProfile from '../../assets/images/erin-cronie-website-profile.png';
import quote from '../../assets/icons/quote.svg';
import person from '../../assets/icons/personSearch.svg';
import target from '../../assets/icons/target.svg';
import engineering from '../../assets/icons/engineering.svg';
const About = () => {
	return (
		<section className='about'>
			{/* Intro Section */}
			<div className='about__intro'>
				<h1 className='about__title'>Hi, I'm <italic>Erin</italic></h1>
				<img 	
					src={erinCronieProfile} 
					alt="Erin Cronie"
					className='about__prof-img' 
				/>
				<p className='about__mission'>
					Welcome to Cloud9 Calm Co., where I make web development stress-free
					for small businesses. I’m passionate about helping businesses grow by
					creating custom web solutions that are both beautiful and functional.
				</p>
			</div>

			{/* Journey Section */}
			<div className='about__journey'>
				<h2 className='about__heading'>My Journey</h2>
					<p className='about__text'>
						Before launching Cloud9 Calm Co., I spent several transformative years managing Mile Zero Wine Bar in Penticton, where I honed my leadership and operational skills. During my time there, I not only managed the day-to-day operations but also built strong relationships with local vendors and customers. This experience taught me the value of community and the importance of supporting local businesses, which remains a core philosophy at Cloud9 Calm Co.
					</p>
					<p className='about__text'>
						It was also during my time at Mile Zero Wine Bar that I was awarded two scholarships to complete my Level Two and Level Three WSET (Wine & Spirit Education Trust), an achievement that highlights my dedication to continuous learning and professional development.
					</p>
					<p className='about__text'>
						In 2020, I made a significant career change into tech by working at Shopify Plus, where I had the opportunity to assist multimillion-dollar businesses. This role allowed me to further develop my expertise in web development, UX/UI design, and eCommerce solutions, equipping me with the skills needed to build dynamic, user-friendly websites and optimize businesses' online presence.
					</p>
					<p className='about__text'>
						With a deep understanding of both the wine industry and tech, I knew I was ready to launch Cloud9 Calm Co.—a business dedicated to creating affordable, custom web solutions for small businesses that need a strong online presence.
					</p>
			</div>

			{/* Why I Started Section */}
			<div className='about__why'>
				<h2 className='about__heading'>Why I Started Cloud9 Calm Co.</h2>
				<p className='about__text'>
					I founded Cloud9 Calm Co. because I saw a gap in affordable,
					high-quality web development for small businesses. As a one-person
					team, I understand the challenges small businesses face, and my goal
					is to provide custom, stress-free web solutions to help you grow.
				</p>
			</div>

			{/* Core Values Section */}
			<div className='about__values'>
				<h2 className='about__heading'>My Values</h2>
				<ul className='about__values-list'>
					<li className='about__values-item'>
						<img 
							src={person}
							alt="Gear icon"
							className="about__values-icon"
						/>
						Transparency
					</li>
					<li className='about__values-item'>
						<img 
							src={target} 
							alt="Target icon"
							className="about__values-icons"
						/>
						Simplicity
					</li>
					<li className='about__values-item'>
					<img 
							src={quote} 
							alt="Money icon"
							className="about__values-icons"
						/>
						Affordable
					</li>
					<li className='about__values-item'>
					<img 
							src={engineering} 
							alt="Engineering icon"
							className="about__values-icons"
						/>
						Custom Solutions
					</li>
				</ul>
			</div>

			{/* Services Section */}
			<div className='about__services'>
				<h2 className='about__heading'>What I Offer</h2>
				<p className='about__text'>
					Whether you need a custom website, SEO optimization, or eCommerce
					support, I provide tailored solutions to meet your business needs.
					Let’s take your brand to the next level together.
				</p>
			</div>

			{/* Fun Facts Section */}
			<div className='about__fun-facts'>
				<h2 className='about__heading'>Fun Facts</h2>
				<p className='about__text'>
				When I’m not busy building websites, I love getting creative in the kitchen, trying out new recipes, and sharing delicious meals with friends. You might also find me tending to my garden, sipping on a glass of wine, or unwinding with a good game. I’m all about cozy moments, whether it’s a quiet night in with my pets or hosting a laid-back gathering with the people I care about. Life’s all about balance—good food, good company, and a little bit of fun!
				</p>
			</div>

			{/* Call to Action Section */}
			<div className='about__cta'>
				<h2 className='about__heading'>Let's Connect</h2>
				<p className='about__text'>
					Ready to bring your vision to life? Reach out to me today, and let’s
					chat about how I can help your business grow!
				</p>
				<a 
					href='https://dashboard.cloud9calm.com/public/66feeb5f372371001f841096' 
					className='about__cta-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					Get in touch
				</a>
			</div>
		</section>
	);
};

export default About;
