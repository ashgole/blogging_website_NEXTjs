let rootPath = '';
if (process.env.NODE_ENV === 'development') {
  rootPath = process.env.NEXT_PUBLIC_LOCAL_ROOTPATH
} else {
  rootPath = process.env.NEXT_PUBLIC_GLOBAL_ROOTPATH
}
export { rootPath };