import '../src/styles/partials/_global.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 
import CookieConsent from 'react-cookie-consent';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceSupport from './pages/EcommerceSupport/EcommerceSupport';
import SEO from './pages/SEO/SEO';
import ContactPage from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; 
import NotFound from './pages/404/404';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Uses class-based theme switching
  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    return () => {
      document.body.classList.remove(`${theme}-theme`);
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  return (
    <div className="App">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5E1CQJN8ZH"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E1CQJN8ZH');
          `}
        </script>
      </Helmet>

      <ScrollToTop />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/ecommerce-support" element={<EcommerceSupport />} />
        <Route path="/seo-services" element={<SEO />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;