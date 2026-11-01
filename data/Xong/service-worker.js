const CACHE_NAME = "kinh-phap-cu-v1";
const ASSETS_TO_CACHE = [
  "./index.html",
  "./manifest.json"
];

// Cài đặt: lưu các file vào bộ nhớ đệm
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Kích hoạt: xóa bộ nhớ đệm cũ nếu có
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME)
                  .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Lấy dữ liệu: trả về từ cache nếu có, ngược lại tải mới
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
