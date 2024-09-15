// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/hello?slug=first-slug

import * as fs from 'fs';

export default function handler(req, res) {
  fs.readdir(`static/json/`, (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such blog found..." })
    }
    console.log('ok ', data)
    res.status(200).json(data)
  })

}
