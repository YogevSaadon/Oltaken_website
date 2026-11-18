import { Link } from 'react-router-dom';
import { getStoreUrl, preloadProductImages } from '../utils/products';
import PrimaryAction from './PrimaryAction';
import './ProductCard.css';
import './FeaturedProduct.css';

// One wide block for a product: used on the home page while there is a single product.
function FeaturedProduct({ product }) {
  const preload = () => preloadProductImages(product);
  const firstPreview = product.previews?.[0];
  const headingId = `featured-${product.id}`;

  return (
    <section className="featured" aria-labelledby={headingId}>
      <div className="featured-info">
        <div className="featured-head">
          <img src={product.icon} alt="" className="featured-icon" width="80" height="80" />
          <div>
            <h2 id={headingId} className="featured-name">
              {product.name}
            </h2>
            <div className="product-card-tags">
              {product.tags.map((tag) => (
                <span key={tag} className="product-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="featured-desc">{product.shortDescription}</p>

        <div className="product-card-actions">
          <PrimaryAction product={product} />
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
        </div>

        {!getStoreUrl(product) && (
          <p className="product-store-status featured-status">Coming soon to Google Play</p>
        )}
      </div>

      {firstPreview && (
        <img
          src={firstPreview.src}
          alt={firstPreview.alt}
          className="featured-shot"
          width="720"
          height="1280"
        />
      )}
    </section>
  );
}

export default FeaturedProduct;
