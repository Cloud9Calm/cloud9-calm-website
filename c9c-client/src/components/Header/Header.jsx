import '../Header/Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <div className="header__logo">
        <h2 className="header__title">Cloud9 Calm Co.</h2>
      </div>
      <div className="header__menu">
        <ul className="header__menu-list">
            <li className="header__menu-item">Home</li>
            <li className="header__menu-item">About</li>
            <li className="header__menu-item">Services</li>
            <li className="header__menu-item">Contact</li>
        </ul>
      </div>
    </header>
  );
}   

export default Header;