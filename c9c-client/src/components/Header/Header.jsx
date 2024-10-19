import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import LightModeIcon from '../../assets/icons/lightmode.svg';
import DarkModeIcon from '../../assets/icons/darkmode.svg';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
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

          <li className="header__menu-item">
            <Link to="/services">Services</Link>
            <ul className="header__dropdown">
              <li className="header__dropdown-item">
                <Link to="/website-development">Website Development</Link>
              </li>
              <li className="header__dropdown-item">
                <Link to="/ecommerce-support">eCommerce Support</Link>
              </li>
              <li className="header__dropdown-item">
                <Link to="/seo-services">SEO</Link>
              </li>
            </ul>
          </li>

          <li className="header__menu-item">
            <Link to="/contact">Contact</Link>
          </li>
          
          {/* Theme toggle button */}
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