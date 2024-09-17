import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const myFile = await fs.promises.readFile(`static/json/${req.query.slug}.json`, 'utf-8');
      res.status(200).json(JSON.parse(myFile))
    } catch (error) {
      res.status(500).json({ message: "Error reading file", error })
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
