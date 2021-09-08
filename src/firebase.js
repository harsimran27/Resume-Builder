import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAu7mQeYCq_7TKUkhtcMbkY2o-WKjnxp7o",
    authDomain: "resume-builder-d87d7.firebaseapp.com",
    projectId: "resume-builder-d87d7",
    storageBucket: "resume-builder-d87d7.appspot.com",
    messagingSenderId: "498919405979",
    appId: "1:498919405979:web:4ede3b61386013c758c93e"

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();