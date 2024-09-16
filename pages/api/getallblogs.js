// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import * as fs from 'fs';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');  // Adjust for your security needs
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  console.log('ok -------------', )
  console.log('ok method',req.method )
  let data = await fs.promises.readdir("static/json/");
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    myFile = await fs.promises.readFile(('static/json/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs)

}
