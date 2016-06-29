// ?v=2

// install
// create cache and store all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('speedometer')
      .then((cache) => {
        return cache.addAll([
          './',
          'index.html',
          'app.css',
          'app.js',
          'vendor.js',
          'manifest.json'
       ]);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// fetch
// cache first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});