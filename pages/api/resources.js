import axios from 'axios'

const resources = async (req, res) => {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources')
    const data = await dataRes.json()
    return res.send(data)
  }

  if (req.method === 'POST' || req.method === 'PATCH') {
    const { id, title, description, link, timeToFinish } = req.body
    if (!title || !description || !link || !timeToFinish) {
      return res.status(422).send('Data missing')
    }

    const url =
      req.method === 'POST'
        ? 'http://localhost:3001/api/resources'
        : `http://localhost:3001/api/resources/${id}`

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body)
      return res.send(axiosRes.data)
    } catch (e) {
      return res.status(422).send(`Data cannot be stored:${e}`)
    }
  }
}

export default resources
