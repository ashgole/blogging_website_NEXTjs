import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import DangerouslySetInnerHTML from '@/components/dangerouslySetInnerHTML/DangerouslySetInnerHTML';
import { rootPath } from '@/utils/constants';

const Blog = (props) => {
  const [blog, setBlog] = useState(props.blog);
  return (
    <>
      <div className={styles.postContainer}>
        <div className={styles.postTitle}>{blog.title}</div>
        <div className={styles.postDescription}>{blog.description}</div>
        <DangerouslySetInnerHTML content={blog.content}/>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let { slug } = context.query;
  const response = await fetch(`${rootPath}api/blog/getblog/?slug=${slug}`);
  let blog = await response.json()
  return {

    props: { blog }
  }
}

export default Blog;
