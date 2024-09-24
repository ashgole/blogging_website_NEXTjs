let rootPath = '';
if (process.env.NODE_ENV === 'development') {
  rootPath = process.env.NEXT_PUBLIC_LOCAL_URL
} else {
  rootPath = process.env.NEXT_PUBLIC_GLOBAL_URL
}
export { rootPath };