import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: 'c9de6c96-c643-44b3-aa5e-7becdd15341f' // Din instrumenteringsnyckel direkt i koden
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Skicka prestandamätningar till Application Insights
reportWebVitals((metric) => {
  appInsights.trackMetric({ name: metric.name, average: metric.value });
});

