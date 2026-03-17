import { Link, useLocation } from 'react-router-dom';
import oltakenIcon from '../assets/branding/oltaken-icon.webp';
import './Header.css';

function Header() {
  const { hash } = useLocation();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-brand">
          <img src={oltakenIcon} alt="Oltaken" className="header-icon" />
          <span className="header-title">Oltaken</span>
        </Link>
        <nav className="header-nav">
          <Link to="/" className={hash === '#/' || hash === '' ? 'active' : ''}>
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
