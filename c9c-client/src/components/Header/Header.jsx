import React, { useEffect, useState } from 'react';
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
          <li className="header__menu-item">Home</li>
          <li className="header__menu-item">About</li>
          <li className="header__menu-item">Services</li>
          <li className="header__menu-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;