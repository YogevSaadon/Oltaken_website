import { useEffect } from 'react';
import oltakenLogo from '../assets/branding/oltaken-software-logo.svg';
import products from '../data/products';
import { TAGLINE } from '../data/site';
import ProductCard from '../components/ProductCard';
import FeaturedProduct from '../components/FeaturedProduct';
import { preloadProductImages } from '../utils/products';
import { useDocumentTitle } from '../utils/useDocumentTitle';
import './Home.css';

const CATEGORIES = [
  { key: 'app', title: 'Apps' },
  { key: 'game', title: 'Games' },
];

function Home() {
  useDocumentTitle();

  // Only categories that have something in them get a section.
  const sections = CATEGORIES.map((category) => ({
    ...category,
    products: products.filter((p) => p.category === category.key),
  })).filter((section) => section.products.length > 0);

  // Once the home page is idle, fetch product page images in the background
  // so they show up instantly when someone opens a product.
  useEffect(() => {
    const preloadAll = () => products.forEach(preloadProductImages);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preloadAll, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(preloadAll, 500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">
          <img
            src={oltakenLogo}
            alt="Oltaken"
            className="hero-logo"
            width="900"
            height="300"
            fetchPriority="high"
          />
        </h1>
        {TAGLINE && <p className="hero-sub">{TAGLINE}</p>}
      </section>

      {products.length === 1 ? (
        // A single product gets the whole stage.
        <FeaturedProduct product={products[0]} />
      ) : (
        <div className={`products-columns${sections.length === 1 ? ' products-columns-single' : ''}`}>
          {sections.map((section) => (
            <section className="products-section" id={`${section.key}s`} key={section.key}>
              <h2 className="section-title">{section.title}</h2>
              <div className="products-list">
                {section.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
