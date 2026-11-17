import { Link } from 'react-router-dom';
import './Privacy.css';

function NotFound() {
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
