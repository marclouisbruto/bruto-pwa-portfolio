var cacheName = 'itst-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/contact-us.html',
  '/movies-music.html',
  '/skills.html',
  '/sports-hobbies.html',
  '/contact-us.html',
  '/style_home.css',
  '/css.svg',
  '/display-pic.jpg',
  '/displayy.png',
  '/html.png',
  '/javascript.png',
  '/logo.png',
  '/manifest.json',
  '/mb.ico',
  '/self.jpg',
  '/service-worker.js',
  '/Untitled.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
