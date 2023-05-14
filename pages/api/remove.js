

export default async function handler(req, res) {
    const response = await fetch(`https://api.cloudinary.com/v1_1/xiaocloud/resources/related_assets/image/uploadbf419455c7a01be5d87689734f729218?assets_to_unrelate='9b30ff40d2572f88ab680307b7282506'`, {    
    headers: {
            Authorization: `Basic ${Buffer.from('252793659525377:xySFKsD1JbyXUKV8AoPKXBk3yw8').toString('base64')}`
        }
    })
    console.log(response)
    
    res.status(200).json({message: "image deleted"})
  }