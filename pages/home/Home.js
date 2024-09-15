import React from 'react'
import styles from './BlogList.module.css'
import blogs from '../../static/json/Blogs.json'
import Link from 'next/link'

const Home = () => {
    return (
        <>

                <div className={styles.blogContainer}>
                    {blogs.map((post) => (
                        <div key={post.slug} className={styles.blogCard}>
                            <Link href={`/blogpost/${post.slug}`}>
                                <h2 className={styles.blogTitle}>{post.title}</h2>
                            </Link>
                            <p className={styles.blogDescription}>{post.description}</p>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Home