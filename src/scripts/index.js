
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime';
import 'bootstrap/js/dist/carousel';
import App from './views/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import '../styles/home.css';
import '../styles/explore.css';
import '../styles/category.css';
import '../styles/details.css';
import '../styles/error-404.css';
import '../styles/error-500.css';

const app = new App({
  window: window,
  header: document.querySelector('header'),
  menu: document.querySelector('.floatmenu'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
    console.log('Service worker registered!');
  } else {
    console.log('Service worker not supported in this browser!');
  }
});
