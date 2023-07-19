import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './client/styles/styles.scss';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_sl4BwXkJk7rJUvg3qnPoc1m5ZvQOyQM',
  authDomain: 'pulsarportrait.firebaseapp.com',
  projectId: 'pulsarportrait',
  storageBucket: 'pulsarportrait.appspot.com',
  messagingSenderId: '279941415075',
  appId: '1:279941415075:web:53b3509316252563f6bf16',
  measurementId: 'G-JZ9YH8PVQ9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_sl4BwXkJk7rJUvg3qnPoc1m5ZvQOyQM',
  authDomain: 'pulsarportrait.firebaseapp.com',
  projectId: 'pulsarportrait',
  storageBucket: 'pulsarportrait.appspot.com',
  messagingSenderId: '279941415075',
  appId: '1:279941415075:web:53b3509316252563f6bf16',
  measurementId: 'G-JZ9YH8PVQ9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
