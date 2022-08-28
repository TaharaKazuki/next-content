import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

/* NOTE: Exposing Environment Variables to the Browser
 * https://nextjs.org/docs/basic-features/environment-variables
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_APP_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_APP_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_APP_FIREBASE_MEASUREMENT_ID,
}

if (!getApps().length) {
  const app = initializeApp(firebaseConfig)
}

export const storage = getStorage()
export const auth = getAuth()
export const functions = getFunctions()
export const db = getFirestore()
