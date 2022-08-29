import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/client'
import { createContext, ReactNode, FC, useEffect, useState, useContext } from 'react'

type ContextType = {
  isLoggedIn: boolean
  isLoading: boolean
}

type ProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  isLoading: true,
})

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
      setIsLoading(false)
    })
  }, [])

  return <AuthContext.Provider value={{ isLoading, isLoggedIn }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
