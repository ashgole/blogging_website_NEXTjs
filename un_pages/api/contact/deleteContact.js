import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query; // Get the contact ID from the query params
    if (!id) {
      return res.status(400).json({ message: 'Contact ID is required' });
    }

    try {
      const filePath = path.join(process.cwd(), `static/contacts/${id}.json`);

      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'Contact not found' });
      }

      // Delete the file
      await fs.promises.unlink(filePath);

      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting contact', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
