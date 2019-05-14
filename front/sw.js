self.addEventListener('push', e=>{
  console.log(e, self.registration);
  self.registration.showNotification('title', {
    body: 'bod'
  })
  // self.navigator.serviceWorker.getRegistration().then(reg=>{
  //   reg.showNotification('title')
  // })

});


self.addEventListener('notificationclick', event => {
  let notification = event.notification
  let action = event.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow('https://example.com')
  }
})
