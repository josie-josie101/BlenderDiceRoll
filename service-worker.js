const CACHE_NAME = "dice-pwa-cache-v1";

const urlsToCache = [
  "./",
  "./pwa.html",
  "./manifest.json",

  "./js/three.min.js",
  "./js/GLTFLoader.js",

  "./images/bg.jpg",
  "./images/plus.png",
  "./images/minus.png",
  "./images/play.png",
  "./images/stop.png",
  "./images/spin.png",

  "./images/blenderDiceRoll-192.png",
  "./images/blenderDiceRoll-512.png",

  "./blender/metallicCube_pwa.glb"
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