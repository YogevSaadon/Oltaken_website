import { useEffect } from 'react';
import oltakenLogo from '../assets/branding/oltaken-software-logo.svg';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { preloadProductImages } from '../utils/products';
import './Home.css';

function Home() {
  const apps = products.filter((p) => p.category === 'app');
  const games = products.filter((p) => p.category === 'game');

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
            alt="OLTAKEN software"
            className="hero-logo"
            width="900"
            height="300"
            fetchPriority="high"
          />
        </h1>
        <p className="hero-sub">Apps and games built with a clean, practical mindset.</p>
      </section>

      <div className="products-columns">
        <section className="products-section" id="apps">
          <h2 className="section-title">Apps</h2>
          {apps.length > 0 ? (
            <div className="products-list">
              {apps.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="section-empty">Coming soon.</p>
          )}
        </section>

        <section className="products-section" id="games">
          <h2 className="section-title">Games</h2>
          {games.length > 0 ? (
            <div className="products-list">
              {games.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="section-empty">Coming soon.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
