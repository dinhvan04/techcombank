self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/techcombank/",
        "/techcombank/css/style.css",
        "/techcombank/img/apple-icon-180.png",
        "/techcombank/index.html",
      ]);
    }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});
