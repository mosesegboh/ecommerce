import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcPNVKYlvFQcn8gChQsy9Ga6BbibT18TU",
    authDomain: "crwn-db-b0ec7.firebaseapp.com",
    databaseURL: "https://crwn-db-b0ec7.firebaseio.com",
    projectId: "crwn-db-b0ec7",
    storageBucket: "crwn-db-b0ec7.appspot.com",
    messagingSenderId: "57072013626",
    appId: "1:57072013626:web:3572f2e863c789ade94003",
    measurementId: "G-MY4QMTGLQ3"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log ('error creating user', error.message )
      }

    }
    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;