import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Container } from '@mui/system';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <ThemeProvider theme={theme}>
      <HashRouter>
        <Container sx={{minHeight : '100dvh'}} maxWidth="xl">

        <App />
        </Container>
      </HashRouter>
      <Footer />
    </ThemeProvider>

  </React.StrictMode>
);