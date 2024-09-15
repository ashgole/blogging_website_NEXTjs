import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { rootPath } from '@/common';

const Blog = (props) => {
  const [blog, setBlog] = useState(props.blog);

  return (
    <>
        <div className={styles.postContainer}>
        <div className={styles.postTitle}>{blog.title}</div>
        <div className={styles.postDescription}>{blog.description}</div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let {slug} = context.query;
  const response = await fetch(`${rootPath}api/getblog/?slug=${slug}`);
  let blog = await response.json()
  console.log('ok blog', blog)
  return {

    props: { blog}
  }
}

export default Blog;
