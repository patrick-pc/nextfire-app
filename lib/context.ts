import { createContext } from 'react'

export interface IUser {
  user: null
  username: null
}

export const UserContext = createContext<IUser>({ user: null, username: null })
