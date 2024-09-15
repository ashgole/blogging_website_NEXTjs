import React from 'react';
import { useRouter } from 'next/router';
import styles from './Blog.module.css';

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.postContainer}>
      <div className={styles.postTitle}>{slug} This is Title</div>
      <div className={styles.postDescription}>This is description</div>
    </div>
  );
};

export default Blog;
