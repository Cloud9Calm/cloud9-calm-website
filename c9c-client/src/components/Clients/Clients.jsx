import clientsData from '../../data/clients.json';
import './Clients.scss';

const Clients = () => {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <h2 id="clients-title" className="clients__title">
        ☁️ Recent Work ☁️
      </h2>

      <div className="clients__list">
        {clientsData.clients.map((client, index) => {
          const hasLink = !!client.website;

          return (
            <article
              key={index}
              className="clients__client-info"
            >
              <h3 className="clients__name">{client.companyName}</h3>

              {/* keep your portfolio blurb */}
              <p className="clients__job-task">{client.jobTask}</p>

              {/* swap URL text for a CTA */}
              {hasLink && (
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clients__cta"
                  aria-label={`View ${client.companyName} project`}
                >
                  View Live Site →
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;