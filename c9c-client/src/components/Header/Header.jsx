import '../Header/Header.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility

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

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__logo">
        <h2 className="header__title">Cloud9 Calm Co.</h2>
      </div>

      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <Link to="/">Home</Link>
          </li>

          <li className="header__menu-item">
            <Link to="/about">About</Link>
          </li>

          {/* Services with dropdown */}
          <li className="header__menu-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to="/services">Services</Link>
            <ul className={`header__dropdown ${dropdownVisible ? 'visible' : ''}`}>
              <li className="header__dropdown-item">
                <Link to="/website-development">Website Development</Link>
              </li>
              <li className="header__dropdown-item">
                <Link to="/ecommerce-support">eCommerce Support</Link>
              </li>
              <li className="header__dropdown-item">
                <Link to="seo-services">SEO</Link>
              </li>
            </ul>
          </li>

          <li className="header__menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;