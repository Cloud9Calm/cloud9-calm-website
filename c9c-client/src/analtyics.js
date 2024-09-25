import ReactGA from 'react-ga4';


export const initializeAnalytics = () => {
  const trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID; // Access the variable
  if (trackingId) {
    ReactGA.initialize(trackingId); 
    ReactGA.send('pageview'); // Send the initial pageview
  } else {
    console.error('Google Analytics Tracking ID is missing.');
  }
};