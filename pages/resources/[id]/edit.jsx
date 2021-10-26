import React from 'react'
import Layout from 'components/Layout'
import ResourceForm from 'components/ResourceForm'

const ResourceEdit = ({ resource }) => {
  const updateResorce = (formData) => {
    alert(JSON.stringify(formData))
  }

  return (
    <Layout>
      <div className="container">
        <div className="colums">
          <div className="colum is-8 is-offset-2">
            <ResourceForm initialData={resource} onFormSubmit={updateResorce} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  )
  const data = await dataRes.json()

  return {
    props: {
      resource: data
    }
  }
}

export default ResourceEdit
