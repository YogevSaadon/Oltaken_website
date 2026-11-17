import { COMPANY_NAME, CONTACT_EMAIL } from '../data/site';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">&copy; {year} {COMPANY_NAME}. All rights reserved.</p>
        <div className="footer-links">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
