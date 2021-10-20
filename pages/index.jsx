import React from 'react'
import Navbar from 'components/Navbar'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResorceList from 'components/ResourceList'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResorceList />
      <Footer />
    </>
  )
}

export default Home
