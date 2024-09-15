// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/hello?slug=first-slug

import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`static/json/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No  such blog found..." })
    }
    console.log('ok ', req.query)
    res.status(200).json(JSON.parse(data))
  })

}
