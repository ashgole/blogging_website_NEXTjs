import { NextResponse } from 'next/server'
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // MongoDB connection string
const client = new MongoClient(uri);


// export async function GET(req) {
//   try {
//     await client.connect();
//     const database = client.db('blog_management');
//     const usersCollection = database.collection('blogs');

//     const blogs = await usersCollection.find({}).toArray();
//     return NextResponse.json(blogs);
//   } catch (error) {
//     return NextResponse.json({ message: 'Internal Server Error', error });
//   } finally {
//     await client.close();
//   }
// }

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await client.connect();
    const database = client.db('blog_management');
    const usersCollection = database.collection('blogs');

    const newBlog = { title, description };
    const result = await usersCollection.insertOne(newBlog);

    return NextResponse.json({ message: 'Blog added', productId: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title'); // Get the title query parameter if it exists

    await client.connect();
    const database = client.db('blog_management');
    const productsCollection = database.collection('blogs');

    // Aggregation pipeline for filtering or fetching all blogs
    const pipeline = [];

    // Add the $match stage only if a 'title' query is provided
    if (title) {
      pipeline.push({
        $match: {
          title: { $regex: title, $options: 'i' }, // Case-insensitive match for title
        },
      });
    }

    // Fetch all blogs if no 'title' is provided
    const blogs = await productsCollection.aggregate(pipeline).toArray();
    blogs.message='status ok'
    return NextResponse.json({status:200,blogs});
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error',status:500, error });
  } finally {
    await client.close();
  }
}

// export async function DELETE(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const productId = searchParams.get('id'); // Get product ID from query parameter

//     if (!productId) {
//       return NextResponse.json({ message: 'Blog ID is required' }, { status: 400 });
//     }

//     await client.connect();
//     const database = client.db('stock_management');
//     const productsCollection = database.collection('blogs');
//     const result = await productsCollection.deleteOne({ _id: new ObjectId(productId) });

//     if (result.deletedCount === 1) {
//       return NextResponse.json({ message: 'Blog deleted successfully' });
//     } else {
//       return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
//     }
//   } catch (error) {
//     return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
//   } finally {
//     await client.close();
//   }
// }


// export async function GET(request) {
//   return NextResponse.json({ title: 'ash gole' }, { status: 500 })
// }
