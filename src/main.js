import { init } from './router.js';

window.addEventListener('load', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD_4qkcPeyCWg6-OKGvx7uoY9fmEbJ0gQE",
    authDomain: "konecta-528d7.firebaseapp.com",
    databaseURL: "https://konecta-528d7.firebaseio.com",
    projectId: "konecta-528d7",
    storageBucket: "konecta-528d7.appspot.com",
    messagingSenderId: "272536283517",
    appId: "1:272536283517:web:64bbf1edf973011ab0c414"
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  init();
});
