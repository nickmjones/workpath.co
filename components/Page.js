import Head from "next/head";
import Navigation from "./Navigation";
import styles from "../styles/modules/layout.module.scss";
import Footer from "./Footer"

export default function Homepage({ children }) {
  return (
    <div>
      <Head>
      </Head>
      <div className={styles.wrapper}>
        <Navigation />
        <main className={styles.core}>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
}
