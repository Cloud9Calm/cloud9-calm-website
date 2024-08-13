import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import '../src/styles/partials/_global.scss';
import Home from './pages/Home/Home';
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceSupport from './pages/EcommerceSupport/EcommerceSupport';
import Footer from './components/Footer/Footer';

// Ensure the measurement ID is defined
const measurementId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
if (!measurementId) {
  throw new Error('REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID environment variable is required');
}

// Initialize Google Analytics only if consent is given
useEffect(() => {
  if (getCookieConsentValue() === "true") {
    ReactGA.initialize(measurementId);
  }
}, []);

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

function App() {
  usePageViews();

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
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="cloud9CalmCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => {
          ReactGA.initialize(measurementId);
        }}
      >
        This website uses cookies to ensure you get the best experience on our website. By continuing to use our site, you accept our use of cookies.{" "}
        <span style={{ fontSize: "10px" }}>Learn more in our <a href="/privacy-policy" style={{ color: "#fff" }}>Privacy Policy</a>.</span>
      </CookieConsent>
    </div>
  );
}

export default App;