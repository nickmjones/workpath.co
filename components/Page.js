import Head from "next/head";
import Navigation from "./Navigation";
import styles from "../styles/modules/layout.module.scss";
import Footer from "./Footer"

export default function Page({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
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
