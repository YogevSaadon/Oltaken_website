import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.icon} alt={product.name} className="product-card-icon" />
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{product.shortDescription}</p>
        <div className="product-card-tags">
          {product.tags.map((tag) => (
            <span key={tag} className="product-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="product-card-actions">
          <Link to={`/product/${product.id}`} className="btn btn-secondary">
            About
          </Link>
          {product.storeUrl && product.storeUrl !== '#' && (
            <a
              href={product.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get on Google Play
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
