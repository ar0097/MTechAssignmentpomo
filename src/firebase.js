import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaErD5o3ytI4T4lu7v85qngzQqSC2imnk",
    authDomain: "pomodro-app-47794.firebaseapp.com",
    projectId: "pomodro-app-47794",
    storageBucket: "pomodro-app-47794.appspot.com",
    messagingSenderId: "73169576322",
    appId: "1:73169576322:web:5849d299edfa8345dfaf9b",
    measurementId: "G-8BHGNN763K"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
