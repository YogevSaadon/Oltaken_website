import { Link } from 'react-router-dom';
import { getStoreUrl, preloadProductImages } from '../utils/products';
import './ProductCard.css';

function ProductCard({ product }) {
  const storeUrl = getStoreUrl(product);
  const preload = () => preloadProductImages(product);

  return (
    <div className="product-card">
      <img src={product.icon} alt="" className="product-card-icon" width="72" height="72" />
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
          <Link
            to={`/product/${product.id}`}
            className="btn btn-secondary"
            aria-label={`About ${product.name}`}
            onPointerEnter={preload}
            onFocus={preload}
            onTouchStart={preload}
          >
            About
          </Link>
          {storeUrl && (
            <a
              href={storeUrl}
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
