import { useParams, Link } from 'react-router-dom';
import privacyPolicies from '../data/privacy';
import './Privacy.css';

function ProductPrivacy() {
  const { id } = useParams();
  const policy = privacyPolicies[id];

  if (!policy) {
    return (
      <div className="privacy">
        <div className="privacy-inner">
          <h1>Policy not found</h1>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="privacy">
      <div className="privacy-inner">
        <Link to={`/product/${id}`} className="back-link">
          &larr; Back to {policy.appName}
        </Link>

        <h1>{policy.appName} Privacy Policy</h1>
        <p className="privacy-updated">Last Updated: {policy.lastUpdated}</p>

        {policy.sections.map((section, i) => (
          <div key={i}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}

        <h2>Contact</h2>
        <p>
          Questions? Reach out at{' '}
          <a href="mailto:yogev1234@gmail.com">yogev1234@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default ProductPrivacy;
