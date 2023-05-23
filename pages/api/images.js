

export default async function handler(req, res) {
    const response = await fetch(`https://api.cloudinary.com/v1_1/dyjp4vl0i/resources/image`, {
      headers: {
        Authorization: `Basic ${Buffer.from('153425317718324:6hWsQ2q-loH0_j9a1KAJDxcUA2M').toString('base64')}`
      }
    })
    const images = await response.json()
  
    res.status(200).json(images)
  }