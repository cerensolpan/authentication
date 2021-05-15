import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRPJL15PsLGWpGbm_WELQSb-JLjoICMoM",
    authDomain: "authentication-e6d06.firebaseapp.com",
    projectId: "authentication-e6d06",
    storageBucket: "authentication-e6d06.appspot.com",
    messagingSenderId: "362233894756",
    appId: "1:362233894756:web:361c62196d7dcc730b8c71"
};

firebase.initializeApp(firebaseConfig);

export default firebase;