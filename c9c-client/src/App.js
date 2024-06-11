// import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/partials/_global.scss';
import Home from './pages/Home/Home'; 
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceSupport from './pages/EcommerceSupport/EcommerceSupport';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="website-development" element={<WebsiteDevelopment/>} />
          <Route path="ecommerce-support" element={<EcommerceSupport />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
