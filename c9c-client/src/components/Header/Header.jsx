import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../Header/Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__logo">
        <h2 className="header__title">Cloud9 Calm Co.</h2>
      </div>

      <nav className="header__menu">
        <ul className="header__menu-list">

          <li className='header__menu-item'>
            <Link to="/">Home</Link>
          </li>

          <li className='header__menu-item'>
            <Link to="/about">About</Link> 
          </li>

          <li className='header__menu-item'>
            <Link to="/services">Services</Link>
          </li>

          <li className='header__menu-item'>
            <Link to="/contact">Contact</Link>
          </li>

          <li className='header__menu-item dashboard-link'>
            <a href="https://dashboard.cloud9calm.com" target="_blank" rel="noopener noreferrer">Client Dashboard</a> {/* External link remains as <a> */}
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;