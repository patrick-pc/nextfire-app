import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

// Top navbar
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // toggle responsible for changing the theme
  const renderThemeToggle = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  const { user, username } = useContext(UserContext)

  const router = useRouter()

  const signOut = () => {
    auth.signOut()
    router.reload()
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button className="btn-logo">dev3</button>
          </Link>
        </li>

        {/* <li>{renderThemeToggle()}</li> */}

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sign Out</button>
            </li>
            <li>
              <Link href="/admin" passHref>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <img
                  src={user?.photoURL || '/hacker.png'}
                  alt="Profile Picture"
                />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter" passHref>
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
