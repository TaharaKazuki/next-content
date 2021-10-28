import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import moment from 'moment'

const ActiveResource = () => {
  const [resource, setResource] = useState({})

  useEffect(() => {
    const fetchResouce = async () => {
      const axiosRes = await axios.get('/api/activeResource')
      const resource = axiosRes.data
      const timeToFinish = parseInt(resource.timeToFinish, 10)
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        'seconds'
      )
      const updateTimeToFinish = timeToFinish * 60 - elapsedTime

      if (updateTimeToFinish >= 0) {
        resource.timeToFinish = updateTimeToFinish
      }
      setResource(resource)
    }

    fetchResouce()
  }, [])

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">{resource.timeToFinish}</h2>
      </div>
      <Link href="/">
        <a className="button">Go to resource</a>
      </Link>
    </div>
  )
}

export default ActiveResource
