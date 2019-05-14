Notification.requestPermission(status => {
  console.log('Notification permission status: ', status)
});

navigator.serviceWorker.register('sw.js').then(f => {
  console.log('Registered service worker', f);
});

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

navigator.serviceWorker.getRegistration().then(async reg => {
  if (reg) {
    const pm = reg.pushManager;
    pm.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('**Replace with key pair from firebase console -> settings -> cloud messaging -> web configuration **'),
    }).then(s => console.log('Subscription: ', s.toJSON()));
  }
});

function displayNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      let options = {
        body: 'Here is a notification body!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {primaryKey: 1}
      };
      reg.showNotification('Testing Notification!', options);
    })
  }
}

document.querySelector('#b').addEventListener('click', displayNotification);
