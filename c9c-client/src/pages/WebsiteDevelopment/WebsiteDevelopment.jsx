import React from 'react';
import '../WebsiteDevelopment/WebsiteDevelopment.scss';
import websiteGraphic from '../../assets/images/c9c-website-development.png';
import services from '../../data/website-development-services.json'; 

const WebsiteDev = () => {
  return (
    <main className='webdev'>
      <h2 className='webdev__title'>More information on Website Development</h2>
      <h3 className='webdev__sub-title'>
        Empower your online presence with my dedicated web development support services. I specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality.
      </h3>
      <img
        className='webdev__graphic'
        src={websiteGraphic}
        alt="Graphic of two people working on a computer"
      />
      <div className='webdev__info'>
        {services.map((service, index) => (
          <div key={index} className='webdev__info-section'>
            <h4 className='webdev__info-title'>{service.title}</h4>
            <p className='webdev__info-desc'>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default WebsiteDev;