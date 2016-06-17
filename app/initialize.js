import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});

// register service worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
