import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCwS7oYXkfp61OVay_SevCffCqFGnv2bqQ',
  authDomain: 'mangaqv1.firebaseapp.com',
  databaseURL: 'https://mangaqv1.firebaseio.com',
  projectId: 'mangaqv1',
  storageBucket: 'mangaqv1.appspot.com',
  messagingSenderId: '1040988418561',
  appId: '1:1040988418561:web:c95a6b3aa6c4b08dbac600',
  measurementId: 'G-P12N96EKVN',
};

export default firebase.initializeApp(firebaseConfig);
