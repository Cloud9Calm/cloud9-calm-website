import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import LightModeIcon from '../../assets/icons/lightmode.svg';
import DarkModeIcon from '../../assets/icons/darkmode.svg';

const Header = ({ toggleTheme, theme }) => {
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
      <Link className="header__title" to="/">Cloud9 Calm Co.</Link>
      </div>

      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <Link to="/">Home</Link>
          </li>

          <li className="header__menu-item">
            <Link to="/about">About</Link>
          </li>

          <li className="header__menu-item header__menu-item--dropdown">
            <span className="header__dropdown-label">Services <span className="header__arrow"></span></span>
            <ul className="header__dropdown">
              <li className="header__dropdown-item">
              <li className="header__dropdown-item">
                <Link to="https://cloud9calmhosting.com/" target="_blank">Hosting</Link>
              </li>
                <Link to="/website-development">Development</Link>
              </li>
              <li className="header__dropdown-item">
                <Link to="/ecommerce-support">eCommerce</Link>
              </li>
              <li className="header__dropdown-item">
                <Link to="/seo-services">SEO</Link>
              </li>
            </ul>
          </li>

          <li className="header__menu-item">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="header__menu-item">
            <button onClick={toggleTheme} className="header__button">
              {theme === 'light' ? (
                <img src={DarkModeIcon} className="header__theme-icon" alt="Switch to Dark Mode" />
              ) : (
                <img src={LightModeIcon} className="header__theme-icon" alt="Switch to Light Mode" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;