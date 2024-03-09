import React from 'react'
import Reels from '../components/Reels'
import Feeds from '../components/Feeds'
import Result from '../components/Result'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <Result />
        <Reels />
        <Feeds />
      </div>
      <div className='bg-gray-50'>
        <Footer />
      </div>
    </>
  )
}

export default Home