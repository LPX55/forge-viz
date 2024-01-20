import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import './index';

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <ApolloProvider client={client}>
      <GeistProvider>
        <CssBaseline />
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </GeistProvider>
    </ApolloProvider>
  </React.StrictMode>
);
