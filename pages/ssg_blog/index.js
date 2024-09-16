import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css'

// Fetch blogs at build time
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/getallblogs');
    const allBlogs = await res.json();

    return {
        props: {
            allBlogs
        },
    };
}



export default function Home(props) {
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
