// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const dirPath = path.join(process.cwd(), 'static/json/');
      const data = await fs.promises.readdir(dirPath);
      console.log('ok -----------------', )
      let allBlogs = [];

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const filePath = path.join(dirPath, item);
        const myFile = await fs.promises.readFile(filePath, 'utf-8');
        allBlogs.push(JSON.parse(myFile));
      }

      res.status(200).json(allBlogs);
    } catch (error) {
      res.status(500).json({ message: 'Error reading files', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
