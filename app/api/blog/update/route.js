import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const client = new MongoClient(uri);

// POST request to update the product's quantity
export async function POST(req) {
  try {
    const { productId, newQuantity } = await req.json();

    await client.connect();
    const database = client.db('stock_management');
    const productsCollection = database.collection('products');

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(productId) },
      { $set: { quantity: newQuantity } }
    );

    if (result.modifiedCount === 1) {
      return NextResponse.json({ message: 'Quantity updated successfully' });
    } else {
      return NextResponse.json({ message: 'Product not found or no changes made' });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error });
  } finally {
    await client.close();
  }
}
