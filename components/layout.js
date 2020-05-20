import Head from "next/head";
import Navigation from "../components/navigation"
import styles from '../styles/modules/layout.module.scss';
import Hero from "../components/hero";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <div className={styles.wrapper}>
        <Navigation />
        <Hero />
        <main className={styles.core}>
          {children}
        </main>
      </div>
    </div>
  );
}
