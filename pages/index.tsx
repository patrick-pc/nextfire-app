import type { NextPage } from 'next'
import Loader from '../components/Loader'

import toast from 'react-hot-toast'

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => toast.success('hello toast!')}>Toast Me</button>
    </div>
  )
}

export default Home
