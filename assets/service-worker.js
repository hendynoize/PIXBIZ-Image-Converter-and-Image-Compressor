const CACHE_NAME = 'notable-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/style.css',
  '/assets/app.js',
  '/assets/manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
