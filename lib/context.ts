import { createContext } from 'react'
import { User } from 'firebase/auth'

export interface IUser {
  user: User | null | undefined
  username: null
}

export const UserContext = createContext<IUser>({ user: null, username: null })

export type PostProps = {
  post: {
    slug: string
    username: string
    title: string
    content: string
    published: boolean
    heartCount: number
    createdAt: any
    updatedAt: any
  }
  admin: boolean
}
