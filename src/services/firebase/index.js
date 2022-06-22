/******************************************
 *  Author : Suraj Sharma
 *  Created On : Wed Apr 20 2022
 *  File : index.js
 *******************************************/
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  fetchSignInMethodsForEmail
} from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnMO3w4AHERAb1mV4KrH5cU9qBgOfoJWI",
  authDomain: "regenesys-dr.firebaseapp.com",
  projectId: "regenesys-dr",
  storageBucket: "regenesys-dr.appspot.com",
  messagingSenderId: "568534677693",
  appId: "1:568534677693:web:f689e63e83457c9e601fd4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const auth = getAuth();

export const GOOGLE_PROVIDER = new GoogleAuthProvider();
GOOGLE_PROVIDER.setCustomParameters({ prompt: "select_account" });

export const FACEBOOK_PROVIDER = new FacebookAuthProvider();
FACEBOOK_PROVIDER.addScope("user_birthday");
FACEBOOK_PROVIDER.setCustomParameters({
  display: "popup",
});

function getProvider(providerId) {
  switch (providerId) {
    case GoogleAuthProvider.PROVIDER_ID:
      return GoogleAuthProvider;
    case FacebookAuthProvider.PROVIDER_ID:
      return FacebookAuthProvider;
    default:
      throw new Error(`No provider implemented for ${providerId}`);
  }
}

const supportedPopupSignInMethods = [
  GoogleAuthProvider.PROVIDER_ID,
  FacebookAuthProvider.PROVIDER_ID,
];

export const oauthLogin = (provider) =>
  new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const linkedProvider = getProvider(provider.providerId);
        const credential = linkedProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = result.user;
        resolve({
          accessToken,
          user,
        });
      })
      .catch(async(err) => {
        if (
          err.customData.email &&
          err.credential &&
          err.code === "auth/account-exists-with-different-credential"
        ) {
          const providers = await fetchSignInMethodsForEmail(err.email)
          const firstPopupProviderMethod = providers.find(p => supportedPopupSignInMethods.includes(p));
          if (!firstPopupProviderMethod) {
            throw new Error(`Your account is linked to a provider that isn't supported.`);
          }
          const linkedProvider = getProvider(firstPopupProviderMethod);
          const linkedProviderInstance = new linkedProvider();

          linkedProviderInstance.setCustomParameters({ login_hint: err.email });

          signInWithPopup(linkedProviderInstance)
          .then((result) => {
            result.user.linkWithCredential(err.credential);
            const credential = linkedProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const user = result.user;
            resolve({
              accessToken,
              user,
            });
          })
          .catch((err)=> {
            reject(err);
          })
        }
        reject(err);
      });
  });


export const getFirebaseStorageUrl = (fileName) =>
  new Promise((resolve, reject) => {
    // Create a reference under which you want to list
    const fileRef = ref(storage, `brochures/${fileName}`);

    getDownloadURL(fileRef)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const downloadStorageFile = async(fileName) => new Promise((resolve, reject) => {
  try {
    getFirebaseStorageUrl(fileName)
    .then((url)=>{
      fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        resolve(blob);
      })
      .catch((err) => {
        reject(err);
      })
    })
    .catch((err)=>{
      reject(error);
    });
  } catch (error) {
    reject(error);
  }
})