import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const page = req.query.page ? parseInt(req.query.page) : 1; // Get page number
      const limit = 4; // Number of blogs per page

      const dirPath = path.join(process.cwd(), 'static/blogs/');
      const data = await fs.promises.readdir(dirPath);

      let allBlogs = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const filePath = path.join(dirPath, item);
        const myFile = await fs.promises.readFile(filePath, 'utf-8');
        allBlogs.push(JSON.parse(myFile));
      }

      // Paginate the blogs
      const startIndex = (page - 1) * limit;
      const paginatedBlogs = allBlogs.slice(startIndex, startIndex + limit);

      res.status(200).json(paginatedBlogs);
    } catch (error) {
      res.status(500).json({ message: 'Error reading files', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
