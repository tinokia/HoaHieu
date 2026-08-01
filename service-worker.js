const CACHE_NAME = "kpc-full-v1";

const FILES = [
  "/",
  "/index.html",
  "/data/doc.html",

  "/data/style.css",
  "/data/script.js",
  "/data/clock.js",

  "/data/kinhphapcu.js",
  "/data/tho.js",
  "/data/danhngon.js",
  "/data/lien.js",

  "/data/icon-192.png",
  "/data/icon-512.png"
];

// install
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
  );
});

// fetch
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});