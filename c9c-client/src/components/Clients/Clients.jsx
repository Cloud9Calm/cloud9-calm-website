import clientsData from '../../data/clients.json';
import './Clients.scss';

const Clients = () => {
    return (
        <section className="clients">
              <h2 className="clients__title">☁️ Recent Clients ☁️</h2>
            <div className="clients__list">
                {clientsData.clients.map((client, index) => (
                    <div key={index} className="clients__client-info">
                        <h3 className="clients__name">{client.companyName}</h3>
                        <p className="clients__website">
                            <a href={client.website} target="_blank" rel="noopener noreferrer">
                                {client.website}
                            </a>
                        </p>
                        <p className="clients__job-task">{client.jobTask}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Clients;