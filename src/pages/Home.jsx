import oltakenLogo from '../assets/branding/oltaken-logo.webp';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  const apps = products.filter((p) => p.category === 'app');
  const games = products.filter((p) => p.category === 'game');

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-logo-container">
          <img src={oltakenLogo} alt="Oltaken Studio" className="hero-logo" />
        </div>
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
