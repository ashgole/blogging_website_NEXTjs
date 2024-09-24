import { readBlogs } from "@/app/utils/api";

const Blogpost = async ({ params }) => {
  const { blogs: blog, status } = await readBlogs(params.slug);

  if (status !== 200) {
    return <div className="text-red-500">Error while fetching the blog post.</div>;
  }
  return (
    <div className="container mx-auto p-6">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 break-words ">{blog[0].title}</h1>
        <p className="text-gray-600 leading-relaxed break-words ">{blog[0].description}</p>
      </div>
    </div>
  );
}

export default Blogpost;
