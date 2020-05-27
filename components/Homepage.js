import Head from "next/head";
import Navigation from "./Navigation";
import styles from "../styles/modules/layout.module.scss";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Homepage({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <div className={styles.wrapper}>
        <Navigation />
        <Hero />
        <main className={styles.core}>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
}
