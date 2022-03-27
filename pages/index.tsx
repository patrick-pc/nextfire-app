import type { NextPage } from 'next'
import Link from 'next/link'

import Loader from '../components/Loader'

const Home: NextPage = () => {
  return (
    <div>
      <Loader show />
    </div>
  )
}

export default Home
