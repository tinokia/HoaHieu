const CACHE_NAME = "kpc-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "data/doc.html",
  "data/style.css",
  "data/script.js",
  "data/kinhphapcu.js",
  "data/clock.js",
  "data/HH192.png",
  "data/HH512.png"
];

// Cài đặt
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

// Lấy dữ liệu offline
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
