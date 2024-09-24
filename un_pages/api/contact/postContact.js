import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    try {
      // Define the directory and file path
      const contactDir = path.join(process.cwd(), 'static', 'contacts');

      // Ensure the directory exists
      if (!fs.existsSync(contactDir)) {
        fs.mkdirSync(contactDir, { recursive: true });
      }

      // Create a unique file name based on timestamp
      const timestamp = Date.now();
      const filePath = path.join(contactDir, `${timestamp}.json`);

      // Create the contact object
      const contactData = {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      };

      // Write the contact data to a new file
      //TODO : fix error here
      fs.writeFileSync(filePath, JSON.stringify(contactData, null, 2), 'utf-8');

      // Respond with success
      res.status(200).json({ message: 'Contact submission successful' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
