import React from 'react'

import Layout from 'components/Layout'

import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResorceList from 'components/ResourceList'
import Footer from 'components/Footer'

const Home = () => {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResorceList />
      <Footer />
    </Layout>
  )
}

export default Home
