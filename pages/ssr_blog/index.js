import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './index.module.css'; // Assuming you have some CSS for blog styling

const Home = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs); // Initial blogs
  const [hasMore, setHasMore] = useState(true); // To control if more blogs exist
  const [page, setPage] = useState(2); // To keep track of current page

  const fetchData = async () => {
    // Fetch the next page of blogs
    const response = await fetch(`/api/getallblogs?page=${page}`);
    if (response.ok) {
      const newBlogs = await response.json();

      // If no new blogs, set hasMore to false
      if (newBlogs.length === 0) {
        setHasMore(false);
        return;
      }

      setBlogs([...blogs, ...newBlogs]); // Append new blogs to the current list
      setPage(page + 1); // Increment the page
    }
  };

  return (
    <InfiniteScroll
      dataLength={blogs.length} // Length of current blogs
      next={fetchData} // Function to fetch more data
      hasMore={hasMore} // Boolean to control whether more data can be fetched
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      }
    >
      <div className={styles.blogContainer}>
        {blogs.map((post,index) => (
          <div key={index} className={styles.blogCard}>
            <Link href={`/blogpost/${post.slug}`}>
              <h2 className={styles.blogTitle}>{index} : {post.title}</h2>
            </Link>
            <p className={styles.blogDescription}>
              {post.description.substr(0, 120)}...
            </p>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

// SSR fetching for initial blogs
export  async function getServerSideProps() {
  const response = await fetch(`${rootPath}/api/getallblogs?page=1`);
  const allBlogs = await response.ok ? await response.json() : "error";

  return {
    props: { allBlogs }
  };
}

export default Home;
