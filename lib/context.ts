import { createContext } from 'react'
import { User } from 'firebase/auth'

export interface IUser {
  user?: User | null
  username: null
}

export const UserContext = createContext<IUser>({ user: null, username: null })
