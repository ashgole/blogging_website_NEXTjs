import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const contactsDir = path.join(process.cwd(), 'static/contacts/');
      const files = await fs.promises.readdir(contactsDir); // Read all file names in the directory
      let allContacts = [];

      // Loop through each file and read its content
      for (let i = 0; i < files.length; i++) {
        const filePath = path.join(contactsDir, files[i]);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const id = files[i].split('.json')[0];

        let contact = JSON.parse(fileContent)
        contact.id = id
        allContacts.push(contact); // Parse and add each contact to the array
      }
      res.status(200).json(allContacts); // Send the array of contacts as JSON
    } catch (error) {
      res.status(500).json({ message: 'Error reading contacts', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
