const CACHE_NAME = "kpc-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./data/style.css",
  "./data/script.js",
  "./data/clock.js",
  "./data/kinhphapcu.js",
  "./data/doc.html",
  "./data/HoaHieu.png",
  "./data/HH192.png",
  "./data/HH512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

