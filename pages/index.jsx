import React from 'react'

import Layout from 'components/Layout'

import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResorceList from 'components/ResourceList'
import Footer from 'components/Footer'

import { resources } from 'api/data'

const Home = () => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResorceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

export default Home
