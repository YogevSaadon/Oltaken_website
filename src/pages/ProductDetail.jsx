import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { getStoreUrl } from '../utils/products';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const storeUrl = product ? getStoreUrl(product) : null;

  if (!product) {
    return (
      <div className="product-detail">
        <div className="product-detail-inner">
          <h1>Product not found</h1>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-inner">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>

        <div className="product-detail-header">
          <img
            src={product.icon}
            alt={product.name}
            className="product-detail-icon"
          />
          <div>
            <h1 className="product-detail-name">{product.name}</h1>
            <div className="product-detail-tags">
              {product.tags.map((tag) => (
                <span key={tag} className="product-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="product-detail-desc">{product.fullDescription}</p>

        {product.previews && product.previews.length > 0 ? (
          <div className="product-previews">
            <h2 className="product-previews-title">Preview</h2>
            <div className="product-previews-grid">
              {product.previews.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${product.name} preview ${i + 1}`}
                  className="product-preview"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="product-previews">
            <h2 className="product-previews-title">Preview</h2>
            <div className="product-previews-placeholder">
              <div className="preview-placeholder" />
              <div className="preview-placeholder" />
              <div className="preview-placeholder" />
            </div>
          </div>
        )}

        <div className="product-detail-actions">
          {storeUrl ? (
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get on Google Play
            </a>
          ) : (
            <p className="product-store-status">Coming soon to Google Play</p>
          )}
        </div>

        <div className="product-detail-actions product-detail-actions-last">
          <Link to={`/privacy/${product.id}`} className="btn btn-secondary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
