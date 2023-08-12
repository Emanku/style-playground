import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAsCzlwbBGDK5_9fP0NLKsyKMQt-QahBtw',
  authDomain: 'sam-fraser.firebaseapp.com',
  projectId: 'sam-fraser',
  storageBucket: 'sam-fraser.appspot.com',
  messagingSenderId: '500798079592',
  appId: '1:500798079592:web:c8b8387e8831c655e831dd'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
