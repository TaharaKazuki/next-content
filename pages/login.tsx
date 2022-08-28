import { Button } from '@/components/button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/client'

const LoginPage = () => {
  const login = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then((result) => {
      alert(`こんにちは${result.user.displayName}`)
    })
  }

  return (
    <div>
      <h1>ログイン</h1>
      <Button onClick={login}>ログインする</Button>
    </div>
  )
}

export default LoginPage
