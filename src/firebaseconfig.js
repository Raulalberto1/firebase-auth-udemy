/*import { initializeApp } from "firebase/app";
import 'firebase/auth'*/
import firebase from 'firebase';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD7sgPTx10yWTtWHjKtNN-1Ga4UK5s67E8",
    authDomain: "curso-react-311023.firebaseapp.com",
    projectId: "curso-react-311023",
    storageBucket: "curso-react-311023.appspot.com",
    messagingSenderId: "797780659357",
    appId: "1:797780659357:web:c6d53c7dff4a3d26395874"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth()

export {auth}
