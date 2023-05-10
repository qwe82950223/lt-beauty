

export default async function handler(req, res) {
  const response = await fetch(`https://api.cloudinary.com/v1_1/xiaocloud/resources/image`, {
    headers: {
      Authorization: `Basic ${Buffer.from('252793659525377:xySFKsD1JbyXUKV8AoPKXBk3yw8').toString('base64')}`
    }
  })
  const images = await response.json()

  res.status(200).json(images)
}