import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase/client'
import { createContext, ReactNode, FC, useEffect, useState, useContext } from 'react'

type ContextType = {
  fbUser: User | null | undefined
  isLoading: boolean
}

type ProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<ContextType>({
  fbUser: undefined,
  isLoading: true,
})

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [fbUser, setFbUser] = useState<User | null>()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setFbUser(user)
      setIsLoading(false)
    })
  }, [])

  return <AuthContext.Provider value={{ isLoading, fbUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
