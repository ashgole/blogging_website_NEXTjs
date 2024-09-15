import React, { useEffect, useState } from 'react'
import styles from './BlogList.module.css'
import Link from 'next/link'
import axios from 'axios';
import { rootPath } from '@/common';

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${rootPath}api/getblogdir`);
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
    return (
        <>

            <div className={styles.blogContainer}>
                {blogs.map((post) => (
                    <div key={post.slug} className={styles.blogCard}>
                        <Link href={`/blogpost/${post.slug}`}>
                            <h2 className={styles.blogTitle}>{post.title}</h2>
                        </Link>
                        <p className={styles.blogDescription}>{post.description.substr(0, 120)}...</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home