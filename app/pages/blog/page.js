

import { readBlogs } from '@/app/utils/api';
import Link from 'next/link';
import React from 'react'

const Blog = async () => {
  const { blogs, status } = await readBlogs();

  if (status != 200) {
    return <div className="text-center py-8 text-red-500">Something went wrong {blogPost.status}</div>;
  }
  return (
    <>
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs !== 'error' ? blogs.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <Link href={`/pages/blogpost/${post.title}`}>
              <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors break-words ">
                {post.title}
              </h2>
            <p className="break-words text-gray-600 mt-4">
              {post.description.substr(0, 120)}...
            </p>
            </Link>
          </div>
        )) :
          <div className="text-center text-red-500">Error while fetching data...</div>
        }
      </div>
    </>
  )
}


export default Blog