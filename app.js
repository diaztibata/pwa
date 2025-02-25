// Verifica si el navegador soporta la API de notificaciones
if ('Notification' in window) {
  // Solicitar permiso para mostrar notificaciones
  document.getElementById('enableNotificationsBtn').addEventListener('click', () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Permiso para notificaciones concedido');
      } else {
        console.log('Permiso para notificaciones denegado');
      }
    });
  });

  // Mostrar una notificación local cuando el usuario haga clic en el botón
  document.getElementById('showNotificationBtn').addEventListener('click', () => {
    showNotification();
  });

  // Función para mostrar una notificación
  function showNotification() {
    if (Notification.permission === 'granted') {
      new Notification('¡Hola!', {
        body: 'Esta es una notificación local.',
        icon: 'icons/icon-192x192.png' // Asegúrate de tener este icono en la carpeta 'icons'
      });
    } else {
      console.log('Permiso para notificaciones no concedido');
    }
  }
} else {
  console.log('Este navegador no soporta notificaciones');
}

// Registrar el Service Worker para manejar notificaciones en segundo plano
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
      });
  });
}
