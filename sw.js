const CACHE_NAME = 'pricecalc-pro-v1';
const urlsToCache = [
  './',
  './pricecalc.html',
  './manifest.json',
  './licenses.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
