import { Helmet } from 'react-helmet';
import './About.scss';
import LetsConnect from '../../components/LetsConnect/LetsConnect';

import erinCronieProfile from '../../assets/images/erin-cronie-website-profile.png';
import computerCloud from '../../assets/images/c9c-cloud-computer.webp';
import bundle from '../../assets/images/bundles.webp';

import quote from '../../assets/icons/quote.svg';
import person from '../../assets/icons/personSearch.svg';
import target from '../../assets/icons/target.svg';
import engineering from '../../assets/icons/engineering.svg';

const About = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Cloud9 Calm Co.",
        "description": "Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses.",
        "url": "https://www.cloud9calm.com/about",
        "mainEntity": {
            "@type": "Person",
            "name": "Erin Cronie",
            "image": "https://www.cloud9calm.com/static/media/erin-cronie-developer-3.4b0d1fb98035f42df36b.jpeg",
            "jobTitle": "Founder",
            "worksFor": {
                "@type": "Organization",
                "name": "Cloud9 Calm Co."
            }
        }
    };

    return (
        <section className='about'>
            <Helmet>
                <title>About Cloud9 Calm Co. | Erin Cronie</title>
                <meta name="description" content="Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses." />
                <meta name="keywords" content="Erin Cronie, Cloud9 Calm Co., web development, small business, custom web solutions" />
                
                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="About Cloud9 Calm Co. | Erin Cronie" />
                <meta property="og:description" content="Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses." />
                <meta property="og:image" content="https://www.cloud9calm.com/static/media/erin-cronie-developer-3.4b0d1fb98035f42df36b.jpeg" />
                <meta property="og:url" content="https://www.cloud9calm.com/about" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Cloud9 Calm Co. | Erin Cronie" />
                <meta name="twitter:description" content="Learn more about Erin Cronie and Cloud9 Calm Co., where web development is made stress-free for small businesses." />
                <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/erin-cronie-developer-3.4b0d1fb98035f42df36b.jpeg" />
                
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            {/* Intro Section */}
            <div className='about__intro'>
                <h1 className='about__intro-title'>Hi, I'm <u><i>Erin</i></u></h1>
                <img 
                    src={erinCronieProfile} 
                    alt="Erin Cronie"
                    className='about__prof-img' 
                />
                <p className='about__intro-mission'>
                    Welcome to <b>Cloud9 Calm Co.</b>, where I make web development stress-free
                    for small businesses. I’m <i>passionate</i> about helping businesses grow by
                    creating custom web solutions that are both beautiful and functional.
                </p>
            </div>

            {/* Journey Section */}
            <div className='about__journey'>
                <h2 className='about__journey-title'>My Journey</h2>
                <p className='about__journey-text'>
                    Before launching <b>Cloud9 Calm Co.</b>, I spent several <i>transformative</i> years managing <u>Mile Zero Wine Bar</u> in Penticton, where I honed my <b>leadership</b> and <b>operational skills</b>. During my time there, I not only managed the <u>day-to-day operations</u> but also built <i>strong relationships</i> with local vendors and customers. This experience taught me the value of <u>community</u> and the importance of <b>supporting local businesses</b>, which remains a core philosophy at Cloud9 Calm Co.
                </p>
                <p className='about__journey-text'>
                    It was also during my time at <u>Mile Zero Wine Bar</u> that I was awarded two <b>scholarships</b> to complete my <i>Level Two</i> and <i>Level Three WSET</i> (<u>Wine & Spirit Education Trust</u>), an achievement that highlights my <b>dedication to continuous learning</b> and <i>professional development</i>.
                </p>
                <p className='about__journey-text'>
                    In <b>2020</b>, I made a <i>significant career change</i> into tech by working at <u>Shopify Plus</u>, where I had the opportunity to assist <b>multimillion-dollar businesses</b>. This role allowed me to further develop my <b>expertise in web development</b>, <i>UX/UI design</i>, and <u>eCommerce solutions</u>, equipping me with the skills needed to build <i>dynamic</i>, <b>user-friendly websites</b> and optimize businesses' <i>online presence</i>.
                </p>
                <p className='about__journey-text'>
                    With a deep understanding of both the <b>wine industry</b> and <i>tech</i>, I knew I was ready to launch <u>Cloud9 Calm Co.</u>—a business dedicated to creating <i>affordable</i>, <b>custom web solutions</b> for <u>small businesses</u> that need a <b>strong online presence</b>.
                </p>
            </div>

            {/* Why I Started Section */}
            <div className='about__why'>
                <h2 className='about__why-title'>Why I Started Cloud9 Calm Co.</h2>
                    <div className='about__container container-1'>
                    <p className='about__why-text'>
                        I founded Cloud9 Calm Co. because I saw a gap in affordable,
                        high-quality web development for small businesses. As a one-person
                        team, I understand the challenges small businesses face, and my goal
                        is to provide custom, stress-free web solutions to help you grow.
                    </p>
                    <img 
                        src={computerCloud} 
                        alt="3D computer and cloud" 
                        className='about__graphic'    
                    />
                </div>
            </div>

            {/* Core Values Section */}
            <div className='about__values'>
                <h2 className='about__values-title'>What I Offer</h2>
                <ul className='about__values-list'>
                    <li className='about__values-item'>
                        <img 
                            src={person}
                            alt="Gear icon"
                            className="about__values-icons"
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
                <div className='about__container container-2'>
                <p className='about__services-text'>
                    Whether you need a custom website, SEO optimization, or eCommerce
                    support, I provide tailored solutions to meet your business needs.
                    Let’s take your brand to the next level together.
                </p>
                <img 
                    src={bundle} 
                    alt="3D shopping cart and computer" 
                    className="about__graphic"    
                />
                </div>
            </div>

            {/* Fun Facts Section */}
            <div className='about__fun-facts'>
                <h2 className='about__fun-facts-title'>Fun Facts</h2>
                <p className='about__fun-facts-text'>
                    When I’m not busy building websites, I <i>love getting creative</i> in the kitchen, trying out <u>new recipes</u>, and sharing <i>delicious meals</i> with friends. You might also find me tending to my <u>garden</u>, sipping on a glass of <i>wine</i>, or unwinding with a <u>good game</u>. I’m all about <i>cozy moments</i>, whether it’s a <u>quiet night in</u> with my pets or hosting a <i>laid-back gathering</i> with the people I care about. Life’s all about <i>balance</i>—good food, good company, and a <u>little bit of fun</u>!
                </p>
            </div>
            <LetsConnect />
        </section>
    );
};

export default About;
