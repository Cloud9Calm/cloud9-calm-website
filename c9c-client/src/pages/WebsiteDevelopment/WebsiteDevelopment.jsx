import React from 'react';
import '../WebsiteDevelopment/WebsiteDevelopment.scss';
import websiteGraphic from '../../assets/images/c9c-website-development.png';
import services from '../../data/website-development-services.json'; 
import c9cLogoWhite from '../../assets/images/c9c-logo-white.png';
import { Link } from 'react-router-dom';

const WebsiteDev = () => {
  return (
    <main className='webdev'>
    <header className='webdev__header'>
        <h2 className='webdev__header-title'>
            Cloud9 Calm Co.
        </h2>
        <Link to='/' className='webdev__header-menu-item'>Home</Link>
    </header>
      <h2 className='webdev__title'>More information on Website Development</h2>
      <div className='webdev__top-section'>
        <img 
        className='webdev__logo'
        src={c9cLogoWhite}
         alt="Cloud9 Calm Logo in white" />
      <h3 className='webdev__sub-title'>
        Empower your online presence with my dedicated web development support services. I specialize in ensuring the seamless operation of your website, tackling technical challenges, implementing updates, and enhancing functionality.
      </h3>
      </div>
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