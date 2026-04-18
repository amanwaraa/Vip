const CACHE_NAME = "payed-app-v1.0.0";
const APP_SHELL = [
  "./",
  "./payed.html",
  "./manifest-payed.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // صفحات التنقل
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(async () => {
          return (await caches.match(req)) || (await caches.match("./payed.html"));
        })
    );
    return;
  }

  // موارد Firebase / Fonts / Tailwind / gstatic / googleapis
  const shouldCacheThirdParty =
    url.origin.includes("gstatic.com") ||
    url.origin.includes("googleapis.com") ||
    url.origin.includes("cdn.tailwindcss.com");

  if (shouldCacheThirdParty) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req)
          .then(res => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
            return res;
          });
      })
    );
    return;
  }

  // باقي الموارد: cache first ثم network
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(async () => {
          return (await caches.match("./payed.html"));
        });
    })
  );
});