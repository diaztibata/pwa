

self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : '¡Tienes una nueva notificación!',
    icon: 'icons/icon-192x192.png',
    badge: 'icons/icon-192x192.png',
  };

  event.waitUntil(
    self.registration.showNotification('Notificación Push', options)
  );
});

// Activa el Service Worker y actualiza la caché si es necesario
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

// Cuando el Service Worker se activa, elimina los antiguos cache si existen
self.addEventListener('activate', (event) => {
  console.log('Service Worker activado');
});
