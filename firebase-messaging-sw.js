importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Inisialisasi Firebase di dalam Service Worker (gunakan config yang sama)
firebase.initializeApp({
  apiKey: "AIzaSyAmLDdjabshS3TDnpqpo8s3EcIHzU7cUFY",
  authDomain: "portal-wali-murid-sitd.firebaseapp.com",
  projectId: "portal-wali-murid-sitd",
  storageBucket: "portal-wali-murid-sitd.firebasestorage.app",
  messagingSenderId: "1064221825802",
  appId: "1:1064221825802:web:5e55cf811ff03b145878f3",
  measurementId: "G-P0M532JNQL"
});

const messaging = firebase.messaging();

// Menangani notifikasi saat aplikasi berada di latar belakang (background)
messaging.onBackgroundMessage((payload) => {
  console.log('Menerima pesan di latar belakang: ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://levi240899-cloud.github.io/UCPortalWaliMurid/Portalwalimuridicon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
