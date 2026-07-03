const CACHE_NAME = 'sitd-portal-cache-v1';
const urlsToCache = [
  '/UCPortalWaliMurid/Index.html',
  '/UCPortalWaliMurid/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
