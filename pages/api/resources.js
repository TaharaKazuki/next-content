const resources = async (req, res) => {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources')
    const data = await dataRes.json()
    return res.send(data)
  }

  if (req.method === 'POST') {
    return res.send('DATA has been received')
  }
}

export default resources
