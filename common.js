let rootPath = '';
if (process.env.NODE_ENV === 'development') {
  rootPath = 'http://localhost:3000/'
} else {
  rootPath = 'https://ashabb-myblog-nextjs.vercel.app/'
}
export { rootPath };

//  http://localhost:3000/api/getallblogs
//  http://localhost:3000/api/getblog?slug=first-blog

// https://ashabb-myblog-nextjs.vercel.app/api/getallblogs