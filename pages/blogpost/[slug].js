import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Blog.module.css';
import { rootPath } from '@/common';
import axios from 'axios';

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {

      try {
        const response = await axios.get(`${rootPath}api/getblog/?slug=${slug}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.postContainer}>
      <div className={styles.postTitle}>{blog.title}</div>
      <div className={styles.postDescription}>{blog.description}</div>
    </div>
  );
};

export default Blog;
