import React, { useEffect, useState } from 'react'
import styles from './BlogList.module.css'
import Link from 'next/link'
import axios from 'axios';
import { rootPath } from '@/common';

const Home = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs);

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

export async function getServerSideProps(context) {
    const response = await fetch(`${rootPath}api/getallblogs`);
    let allBlogs = await response.json()

    return {
        props: { allBlogs }
    }
}


export default Home