import Link from "next/link";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href={"/"}>AminFood</Link>
        </div>
        <div className={styles.right}>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/categories"}>Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="/" > AMIN </a>
        Next.js course | AminFood Project &copy;
      </footer>
    </>
  );
}

export default Layout;
