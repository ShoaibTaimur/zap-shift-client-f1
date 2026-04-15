import type { ReactNode } from 'react'
import { AuthContext } from './AuthContext'

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const userInfo = {}

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider
