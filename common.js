let rootPath = '';
if (process.env.NODE_ENV === 'development') {
  rootPath = 'http://localhost:3000/'
} else {
  rootPath = 'https://ashabb-myblog-nextjs.vercel.app/'
}
export { rootPath };
