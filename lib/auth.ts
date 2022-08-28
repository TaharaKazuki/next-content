import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/client'

export const login = async () => {
  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
    .then((result) => {
      alert(`こんにちは${result.user.displayName}`)
    })
    .catch((e) => console.info(e))
}

export const logout = async () => {
  return signOut(auth)
    .then(() => {
      alert('サインアウト完了')
    })
    .catch((e) => console.info(e))
}
