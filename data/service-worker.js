const CACHE_NAME = "caodai-tudien-v1";

const FILES = [

"./",
"./tudien.html",
"./noidung.html",
"./style.css",
"./manifest.json"

];

// Cài đặt
self.addEventListener("install", function(event){

event.waitUntil(

caches.open(CACHE_NAME).then(function(cache){

return cache.addAll(FILES);

})

);

self.skipWaiting();

});

// Kích hoạt
self.addEventListener("activate", function(event){

event.waitUntil(

caches.keys().then(function(keys){

return Promise.all(

keys.map(function(key){

if(key!==CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

self.clients.claim();

});

// Đọc dữ liệu
self.addEventListener("fetch", function(event){

event.respondWith(

caches.match(event.request).then(function(response){

if(response){

return response;

}

return fetch(event.request).then(function(networkResponse){

let copy=networkResponse.clone();

caches.open(CACHE_NAME).then(function(cache){

cache.put(event.request,copy);

});

return networkResponse;

}).catch(function(){

return caches.match("./tudien.html");

});

})

);

});

