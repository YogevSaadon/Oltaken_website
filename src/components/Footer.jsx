import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">&copy; {year} Oltaken. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:yogev1234@gmail.com">yogev1234@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
