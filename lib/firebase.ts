import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD14dYvAr6Mm16CKjPkvoQm9VxhJNYtUU4',
  authDomain: 'nxt-medium.firebaseapp.com',
  projectId: 'nxt-medium',
  storageBucket: 'nxt-medium.appspot.com',
  messagingSenderId: '830520734424',
  appId: '1:830520734424:web:02cc7b82887bf4578d1dad',
  measurementId: 'G-0LMLC8ZTJE',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
