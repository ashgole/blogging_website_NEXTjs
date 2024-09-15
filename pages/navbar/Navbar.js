import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>ASHABB MyBlog NEXTjs</div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={isOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
                <Link href='/'> <li className={styles.navItem}>Home</li></Link>
                <Link href='/blogpost/first-blog'> <li className={styles.navItem}>Blog</li></Link>
                <Link href='/about'> <li className={styles.navItem}>About</li></Link>
                <Link href='/contact'> <li className={styles.navItem}>Contact</li></Link>
            </ul>
        </nav>
    );
}
