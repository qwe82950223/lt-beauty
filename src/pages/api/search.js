

export default async function handler(req, res) {
    const results = await fetch('https://252793659525377:xySFKsD1JbyXUKV8AoPKXBk3yw8@api.cloudinary.com/v1_1/xiaocloud/resources/image')
    .then(r => r);
    console.log("1")
    console.log(result)

  res.status(200).json({ ...results });
}