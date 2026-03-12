// js/firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyDEaonm5VeD3X02b_sZx9h0TlN8synAXmA",
    authDomain: "veltrixa-auto.firebaseapp.com",
    projectId: "veltrixa-auto",
    storageBucket: "veltrixa-auto.firebasestorage.app",
    messagingSenderId: "463152592164",
    appId: "1:463152592164:web:6c7e97af372dd541f9efb1",
    measurementId: "G-QMZS7707BS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
