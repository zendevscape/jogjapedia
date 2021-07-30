import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime';
import $ from 'jquery';
import App from './views/app';

import '../styles/main.css';
import '../styles/home.css';
import '../styles/explore.css';
import '../styles/category.css';
import '../styles/details.css';
import '../styles/error-404.css';
import '../styles/error-500.css';

const app = new App({
  window: $(window),
  header: $('header'),
  scrollTopMenu: $('.scroll-top-menu'),
  floatMenu: $('.float-menu'),
  drawer: $('nav'),
  content: $('main'),
});

$(window).on('hashchange', () => {
  app.renderPage();
});

$(window).on('load', () => {
  app.renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
    console.log('Service worker registered!');
  } else {
    console.log('Service worker not supported in this browser!');
  }
});
