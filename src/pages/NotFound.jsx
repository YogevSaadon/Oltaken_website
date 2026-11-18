import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../utils/useDocumentTitle';
import './Privacy.css';

function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <div className="privacy">
      <div className="privacy-inner">
        <h1>Page not found</h1>
        <p>This page doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
