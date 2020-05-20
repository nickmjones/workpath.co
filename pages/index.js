import Head from 'next/head'
import Layout from "../components/layout";
import styles from '../styles/modules/index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>workpath.co</title>
      </Head>

      <div className={styles.deck}>
        <h4 className="text-coral">
          Replace spreadsheets, ‘where are you’ texts, and piles of email with
          Workpath.
        </h4>
      </div>

      <div className={styles.start}>
        <div className={styles.image}></div>
        <div className={styles.copy}>
          <h5 className="text-admiral">Right job, meet right team member.</h5>
          <p>
            Stop playing matchmaker between jobs and team members. Workpath
            automatically routes jobs to the person with the right skills. No
            more texting “is this something you can do?”
          </p>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.copy}>
          <h5>Real mobile health team management.</h5>
          <p>
            Workpath is made for mobile—so you can dispatch, track, and
            communicate with your team from anywhere. No more texting or email
            threads. Workpath also delivers status updates proactively and
            automatically. No more puzzled patients.👍
          </p>
        </div>
        <div className={styles.image}></div>
      </div>
    </Layout>
  );
}
