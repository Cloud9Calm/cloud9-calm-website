import React, { useEffect } from 'react';
import '../src/styles/partials/_global.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 
import CookieConsent from 'react-cookie-consent';
import Home from './pages/Home/Home';
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceSupport from './pages/EcommerceSupport/EcommerceSupport';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; 
import Footer from './components/Footer/Footer';

// Function to scroll to the top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="App">
      {/* Google Analytics Scripts using Helmet */}
      <Helmet>
        {/* Load Google Analytics script */}
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="website-development" element={<WebsiteDevelopment />} />
        <Route path="ecommerce-support" element={<EcommerceSupport />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy route */}
      </Routes>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Got it ☁️"
        cookieName="cloud9CalmCookieConsent"
        style={{
          background: '#C6D7EB',
          color: '#4A4A4A',
          fontFamily: 'Comfortaa, sans-serif',
          fontSize: '14px',
        }}
        buttonStyle={{
          background: '#4A90E2',
          color: '#FFFFFF',
          fontSize: '14px',
          borderRadius: '20px',
          padding: '10px 20px',
        }}
        expires={150}
        onAccept={() => {
          console.log('Cookies accepted'); // Optional: Add any actions needed after consent
        }}
      >
        This website uses cookies to ensure you get the best experience. By continuing to use our site, you accept our use of cookies.{' '}
        <span style={{ fontSize: '12px' }}>
          Learn more in our{' '}
          <a
            href="/privacy-policy"
            target='_blank'
            style={{ color: '#4A90E2', textDecoration: 'underline' }}
          >
            Privacy Policy
          </a>
          .
        </span>
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