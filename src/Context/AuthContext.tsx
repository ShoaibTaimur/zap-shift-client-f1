import { createContext } from 'react'

export const AuthContext = createContext<Record<string, never> | null>(null)
