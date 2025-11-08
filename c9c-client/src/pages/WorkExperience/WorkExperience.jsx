import { Helmet } from 'react-helmet';
import './WorkExperience.scss';
import Clients from '../../components/Clients/Clients';
import HeroImage from '../../assets/images/image-39c6ee89-4d57-4771-bc39-5330e240279f.png';

const WorkExperience = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Work Experience | Cloud9 Calm Co.",
    "description": "A curated portfolio of custom websites, technical retainers, and SEO-focused projects delivered by Cloud9 Calm Co. for clients across the Okanagan and beyond.",
    "url": "https://www.cloud9calm.com/work-experience",
    "mainEntity": {
      "@type": "Organization",
      "name": "Cloud9 Calm Co.",
      "url": "https://www.cloud9calm.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Work Experience | Cloud9 Calm Co. | Web Development Portfolio</title>

        <meta
          name="description"
          content="Browse recent work from Cloud9 Calm Co., including custom WordPress builds, technical retainers, SEO optimization, and ongoing support for modern, high-performing websites."
        />

        {/* canonical */}
        <link
          rel="canonical"
          href="https://www.cloud9calm.com/work-experience"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Work Experience | Cloud9 Calm Co. | Web Development Portfolio"
        />
        <meta
          property="og:description"
          content="See how Cloud9 Calm Co. helps brands launch, refine, and scale their websites with clean design, smart SEO, and ongoing technical support."
        />
        <meta
          property="og:image"
          content="https://www.cloud9calm.com/static/media/portfolio-image.jpeg"
        />
        <meta
          property="og:url"
          content="https://www.cloud9calm.com/work-experience"
        />
        <meta property="og:type" content="website" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Work Experience | Cloud9 Calm Co. | Web Development Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore a selection of Cloud9 Calm Co. client projects, from local businesses to established brands, built with performance, UX, and SEO in mind."
        />
        <meta
          name="twitter:image"
          content="https://www.cloud9calm.com/static/media/portfolio-image.jpeg"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

  <main className="work" aria-labelledby="work-title">
  <section className="work__hero" aria-label="Cloud9 Calm Co. portfolio hero">
    <img
      src={HeroImage}
      alt="Cloud9 Calm Co. web design and development portfolio"
      className="work__hero-image"
    />
    <div className="work__hero-overlay">
      <h1 className="work__hero-title">Web Development Portfolio</h1>
      <p className="work__hero-subtitle">
        Custom websites, technical retainers, and SEO-focused builds for brands across the Okanagan and beyond.
      </p>
    </div>
  </section>

  <section className="work__intro">
    <h2 id="work-title" className="work__title">
      Work Experience & Recent Projects
    </h2>
    <p className="work__desc">
      I partner with service-based businesses, creatives, and local brands
      to design, refine, and maintain websites that actually work. From custom
      WordPress builds and Next.js projects to performance tuning and ongoing
      support, each collaboration is built to be fast, clean, and easy for real
      humans to use.
    </p>
  </section>

  <section
    className="work__clients"
    aria-label="Client projects and portfolio"
  >
    <Clients />
  </section>
</main>
    </>
  );
};

export default WorkExperience;