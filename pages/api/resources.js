import axios from 'axios'

const resources = async (req, res) => {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources')
    const data = await dataRes.json()
    return res.send(data)
  }

  if (req.method === 'POST') {
    const { title, description, link, timeToFinish } = req.body
    if (!title || !description || !link || !timeToFinish) {
      return res.status(422).send('Data missing')
    }

    axios.post('http://localhost:3001/api/resources', req.body)
  }
}

export default resources
