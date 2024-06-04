import React, { useEffect, useState } from 'react';
import '../Header/Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__logo">
        <h2 className="header__title">Cloud9 Calm Co.</h2>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className={`header__menu-item ${activeSection === 'home' ? 'active' : ''}`}>
            <a href="#home">Home</a>
          </li>
          <li className={`header__menu-item ${activeSection === 'about' ? 'active' : ''}`}>
            <a href="#about">About</a>
          </li>
          <li className={`header__menu-item ${activeSection === 'services' ? 'active' : ''}`}>
            <a href="#services">Services</a>
          </li>
          <li className={`header__menu-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;