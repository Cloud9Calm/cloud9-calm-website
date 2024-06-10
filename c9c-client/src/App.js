// import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/partials/_global.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'; 
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
//import EcommerceSupport from '../../pages/EcommerceSupport/EcommerceSupport';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter> 
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="WebsiteDevelopment" element={<WebsiteDevelopment/>} />
          {/* <Route path="eCommerceSupport" element={<EcommerceSupport />} /> */}
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
