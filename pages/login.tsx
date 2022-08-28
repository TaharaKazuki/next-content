import { Button } from '@/components/button'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/client'

const LoginPage = () => {
  const login = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then((result) => {
      alert(`こんにちは${result.user.displayName}`)
    })
  }

  const logout = () => {
    signOut(auth).then(() => {
      alert('サインアウト完了')
    })
  }

  return (
    <div>
      <h1>ログイン</h1>
      <Button onClick={login}>ログインする</Button>

      <Button onClick={logout}>ログアウトする</Button>
    </div>
  )
}

export default LoginPage
