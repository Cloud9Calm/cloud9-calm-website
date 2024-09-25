import React, { useEffect } from 'react';
import '../src/styles/partials/_global.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import Home from './pages/Home/Home';
import WebsiteDevelopment from './pages/WebsiteDevelopment/WebsiteDevelopment';
import EcommerceSupport from './pages/EcommerceSupport/EcommerceSupport';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'; // Import the Privacy Policy component
import Footer from './components/Footer/Footer';

// Function to scroll to the top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Custom hook to track page views based on location changes
function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    // Check if cookie consent has been given
    if (getCookieConsentValue() === 'true') {
      console.log('Sending pageview to Google Analytics:', location.pathname + location.search); // Debug log to check page views
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    } else {
      console.log('Pageview not sent - cookie consent not given.'); // Debug log if cookies not accepted
    }
  }, [location]);
}

// Function to initialize Google Analytics after cookie consent is accepted
function initializeAnalytics() {
  const measurementId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
  if (measurementId) {
    console.log('Initializing Google Analytics with Tracking ID:', measurementId); 
    ReactGA.initialize(measurementId);
  } else {
    console.error('Google Analytics Tracking ID is missing.'); 
  }
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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add the Privacy Policy route */}
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
          initializeAnalytics(); // Initialize GA when the user accepts cookies
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