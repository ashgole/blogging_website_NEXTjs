import React from "react";
import styles from '../../styles/index.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://ashabb-myblog-nextjs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          live link - https://ashabb-myblog-nextjs.vercel.app/
        </a>
      </footer>
    </>
  );
};

export default Footer;
