import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { DarkThemeProvider } from './contexts/ThemeContext';
// import { DarkLordProvider } from './contexts/ThemeContext';
// import ThemedBtn from './contexts/ThemeBtn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <React.StrictMode>
      <DarkThemeProvider>
      <Navbar/>
      <App name='Tyo' />
      <Footer name='Tyo'/>
      </DarkThemeProvider>
      </React.StrictMode>

);


