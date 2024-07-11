import Navbar from "../pages/Navbar";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.description}>
        Welcome to my blog! Here, I share thoughts on various topics related to
        technology, development, and personal growth. Stay tuned for updates!
      </p>
      <ul className={styles.postsList}>
        <li className={styles.postItem}>
          <h2 className={styles.postTitle}>Blog Post Title One</h2>
          <p className={styles.postExcerpt}>
            A brief excerpt from the first blog post. This post covers...
          </p>
          <p className={styles.postDate}>January 1, 2024</p>
        </li>
        <li className={styles.postItem}>
          <h2 className={styles.postTitle}>Blog Post Title Two</h2>
          <p className={styles.postExcerpt}>
            A brief excerpt from the second blog post. This post explores...
          </p>
          <p className={styles.postDate}>February 15, 2024</p>
        </li>
        <li className={styles.postItem}>
          <h2 className={styles.postTitle}>Blog Post Title Three</h2>
          <p className={styles.postExcerpt}>
            A brief excerpt from the third blog post. This post discusses...
          </p>
          <p className={styles.postDate}>March 10, 2024</p>
        </li>
        <li className={styles.postItem}>
          <h2 className={styles.postTitle}>Blog Post Title Four</h2>
          <p className={styles.postExcerpt}>
            A brief excerpt from the fourth blog post. This post highlights...
          </p>
          <p className={styles.postDate}>April 22, 2024</p>
        </li>
        {/* <li className={styles.postItem}>
          <h2 className={styles.postTitle}>Blog Post Title Five</h2>
          <p className={styles.postExcerpt}>
            A brief excerpt from the fifth blog post. This post covers...
          </p>
          <p className={styles.postDate}>May 30, 2024</p>
        </li> */}
        {/* Add more blog posts as needed */}
      </ul>
    </div>
  );
}
