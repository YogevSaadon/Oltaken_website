import { Link } from 'react-router-dom';
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
        {/* No nav while Home would be its only link: the logo already goes home.
            Add <nav className="header-nav"> with NavLinks here when there are more pages;
            its styles are still in Header.css. */}
      </div>
    </header>
  );
}

export default Header;
