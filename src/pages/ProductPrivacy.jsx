import { useParams, Link } from 'react-router-dom';
import privacyPolicies from '../data/privacy';
import { CONTACT_EMAIL } from '../data/site';
import { useDocumentTitle } from '../utils/useDocumentTitle';
import './Privacy.css';

// The plain HTML copy (plugins/static-privacy-pages.js) renders the same policy data.
// If you change the wording on this page, change it there too.
function ProductPrivacy() {
  const { id } = useParams();
  const policy = privacyPolicies[id];
  useDocumentTitle(policy ? `${policy.appName} Privacy Policy` : 'Policy not found');

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
        <p className="privacy-updated">
          Last Updated: {policy.lastUpdated}
          <span aria-hidden="true"> · </span>
          <a href={`privacy-${id}.html`} className="privacy-plain-link">
            Plain version
          </a>
        </p>

        {policy.sections.map((section, i) => (
          <div key={i}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}

        <h2>Contact</h2>
        <p>
          Questions? Reach out at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </div>
  );
}

export default ProductPrivacy;
