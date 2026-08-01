const CACHE_NAME = "kpc-cache-v2";

const FILES_TO_CACHE = [
  "/",
  "doc.html",
  "style.css",
  "script.js",
  "kinhphapcu.js",
  "clock.js",
  "HH192.png",
  "HH512.png"
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
