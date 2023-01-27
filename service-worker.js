self.addEventListener('install', () => {
  // console.log('[Service Worker] installed');
});

self.addEventListener('activate', () => {
  // console.log('[Service Worker] actived', event);
});

self.addEventListener('fetch', () => {
  // console.log('[Service Worker] fetched resource ' + event.request.url);
});
