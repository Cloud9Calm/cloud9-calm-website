import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../src/styles/partials/_global.scss';
import Home from './pages/Home/Home'; 
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceSupport from './pages/EcommerceSupport/EcommerceSupport';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="website-development" element={<WebsiteDevelopment />} />
          <Route path="ecommerce-support" element={<EcommerceSupport />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;