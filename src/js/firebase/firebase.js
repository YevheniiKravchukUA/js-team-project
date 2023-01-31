// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu_G85M-wYSiuscXdqJuMLEmp82iljbIc',
  authDomain: 'js-team-project-6ffd7.firebaseapp.com',
  projectId: 'js-team-project-6ffd7',
  storageBucket: 'js-team-project-6ffd7.appspot.com',
  messagingSenderId: '837102169225',
  appId: '1:837102169225:web:58e700b1d2ad7abe772a58',
  measurementId: 'G-5H70WPMMFC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore;
const auth = getAuth(app);

console.log(auth);
