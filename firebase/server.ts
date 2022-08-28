import { cert, initializeApp, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps()?.length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.NEXT_PUBLIC_APP_FIREBASE_ADMIN_KEY as string)),
  })
}

const adminDB = getFirestore()
