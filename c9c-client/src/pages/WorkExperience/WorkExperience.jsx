import { Helmet } from 'react-helmet';
import './WorkExperience.scss';
import Clients from '../../components/Clients/Clients';

const WorkExperience = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Work Experience | Cloud9 Calm Co.",
    "description": "Explore the diverse range of innovative clients and projects that Cloud9 Calm Co. has partnered with. From local startups to established brands, see how we bring visions to life through custom web solutions.",
    "url": "https://www.cloud9calm.com/work-experience",
    "mainEntity": {
      "@type": "Organization",
      "name": "Cloud9 Calm Co.",
      "logo": "https://www.cloud9calm.com/static/media/logo.4b0d1fb98035f42df36b.jpeg",
      "sameAs": [
        "https://www.facebook.com/cloud9calm",
        "https://www.twitter.com/cloud9calm",
        "https://www.instagram.com/cloud9calm"
      ]
    }
  };

  return (
    <>
        <Helmet>
          <title>Work Experience | Cloud9 Calm Co. | Web Development Portfolio</title>
          <meta
            name="description"
            content="Explore my work experience and portfolio at Cloud9 Calm Co. showcasing a range of custom web solutions for innovative clients, from startups to established brands."
          />
          <meta
            name="keywords"
            content="work experience, Cloud9 Calm Co., web development portfolio, custom web solutions, client projects, innovative clients, startups, established brands, Naramata web developer, Penticton web development, Okanagan portfolio, small business websites, eCommerce projects"
          />
          <link rel="canonical" href="https://www.cloud9calm.com/work-experience" />

          <meta property="og:title" content="Work Experience | Cloud9 Calm Co. | Web Development Portfolio" />
          <meta property="og:description" content="Explore my web development portfolio at Cloud9 Calm Co., showcasing custom websites and eCommerce solutions for a diverse range of clients." />
          <meta property="og:image" content="https://www.cloud9calm.com/static/media/portfolio-image.jpeg" />
          <meta property="og:url" content="https://www.cloud9calm.com/work-experience" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Work Experience | Cloud9 Calm Co. | Web Development Portfolio" />
          <meta name="twitter:description" content="Explore my web development portfolio at Cloud9 Calm Co., showcasing custom websites and eCommerce solutions for a diverse range of clients." />
          <meta name="twitter:image" content="https://www.cloud9calm.com/static/media/portfolio-image.jpeg" />

          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
    </Helmet>
    
    <section className='work'>
      <h1 className='work__title'>Work Experience</h1>
      <p className='work__desc'>
        I’m proud to partner with a range of innovative clients who trust me to bring their vision to life through custom web solutions. Each project is a reflection of my commitment to delivering personalized, impactful results that help businesses grow and thrive online. From local startups to established brands, these collaborations showcase the diversity of industries I work with and the tailored solutions I provide. Take a look at some of the exciting projects I’ve had the pleasure of working on!
      </p>
      <Clients />
    </section>
    </>
  );
}

export default WorkExperience;