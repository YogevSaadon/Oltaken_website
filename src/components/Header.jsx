import { Link, NavLink } from 'react-router-dom';
import oltakenIcon from '../assets/branding/oltaken-icon.svg';
import { COMPANY_NAME } from '../data/site';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-brand" aria-label={`${COMPANY_NAME} home`}>
          <img src={oltakenIcon} alt="" className="header-icon" width="36" height="36" />
          <span className="header-title">{COMPANY_NAME}</span>
        </Link>
        <nav className="header-nav" aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
