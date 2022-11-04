import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// import {AppProvider} from ''
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Auth0Provider
    domain="dev-kicvnhgp4dadazoi.us.auth0.com"
    clientId="bUPlA7nQa6oq3hNuzEM0EUxOs9ckiECg"
    redirectUri={window.location.origin}
  >
  {/* <AppProvider> */}
  <App />
  {/* </AppProvider> */}
  </Auth0Provider>
    <App />
  </BrowserRouter>
  </>
  
);

