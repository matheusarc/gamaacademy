const CACHE_NAME = 'gama-academy-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/cursos.html',
  '/contato.html',
  '/validar.html',
  '/style.css',
  '/manifest.json',
  '/assets/nr10.png',
  '/assets/work1.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
