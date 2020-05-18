import Head from "next/head";
import Navigation from "../components/navigation"
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Navigation />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </div>
  );
}
