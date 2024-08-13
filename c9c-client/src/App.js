import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
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

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    if (getCookieConsentValue() === "true") {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);
}

function AppContent() {
  usePageViews();

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="website-development" element={<WebsiteDevelopment />} />
        <Route path="ecommerce-support" element={<EcommerceSupport />} />
      </Routes>
      <Footer />
      <CookieConsent
  location="bottom"
  buttonText="Got it ☁️"
  cookieName="cloud9CalmCookieConsent"
  style={{ 
    background: "#C6D7EB", 
    color: "#4A4A4A", 
    fontFamily: "Comfortaa, sans-serif", 
    fontSize: "14px", 
  }}
  buttonStyle={{ 
    background: "#4A90E2", 
    color: "#FFFFFF", 
    fontSize: "14px",
    borderRadius: "20px", 
    padding: "10px 20px", 
  }}
  expires={150}
  onAccept={() => {
    const measurementId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
    }
  }}
>
  This website uses cookies to ensure you get the best experience. By continuing to use our site, you accept our use of cookies.{" "}
  <span style={{ fontSize: "12px" }}>Learn more in our <a href="/privacy-policy" style={{ color: "#4A90E2", textDecoration: "underline" }}>Privacy Policy</a>.</span>
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