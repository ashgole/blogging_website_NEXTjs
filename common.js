let rootPath = '';
if (process.env.NODE_ENV === 'development') {
  rootPath = REACT_APP_LOCAL_ROOTPATH
} else {
  rootPath = REACT_APP_GLOBAL_ROOTPATH
}
export { rootPath };
