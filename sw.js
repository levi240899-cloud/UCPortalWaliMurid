const CACHE_NAME = 'sitd-portal-cache-v1';
const urlsToCache = [
  '/UCPortalWaliMurid/index.html',
  '/UCPortalWaliMurid/manifest.json'
];

// Tahap Install: Menyimpan halaman ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Tahap Ambil Data (Fetch)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
