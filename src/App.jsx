import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductPrivacy from './pages/ProductPrivacy';

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/privacy/:id" element={<ProductPrivacy />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
