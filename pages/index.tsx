import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: '/[username]',
          query: { username: 'Peter' },
        }}
      >
        <a>Peter&apos;s Profile</a>
      </Link>
    </div>
  )
}

export default Home
