const CACHE = "alex-tz-v1";
const PRECACHE_URLS = ["/", "/blog/", "/about/"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE).then((c) =>
      fetch(e.request)
        .then((r) => { c.put(e.request, r.clone()); return r; })
        .catch(() => c.match(e.request))
    )
  );
});
