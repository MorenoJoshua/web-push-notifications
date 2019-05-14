const webpush = require('web-push');


const sub = {}; // replace with subscription from front;

const vapidKeys = {
  publicKey: '**Replace with key pair from firebase console -> settings -> cloud messaging -> web configuration **',
  privateKey: '**Replace with key pair from firebase console -> settings -> cloud messaging -> web configuration **'
};

webpush.setGCMAPIKey('**Replace with legacy server key from firebase console -> settings -> cloud messaging -> web configuration **');

webpush.setVapidDetails(
  '** some email? **',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
webpush.sendNotification(sub, 'Your Push Payload Text');
