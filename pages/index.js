import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout";
import styles from '../styles/modules/index.module.scss';
import Button from '../components/button'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>workpath.co</title>
      </Head>

      <ul className={styles.logowall}>
        <li>
          <img src="./images/superhuman.svg" alt="Superhuman" />
        </li>
        <li>
          <img src="./images/eyeem.svg" alt="Superhuman" />
        </li>
        <li>
          <img src="./images/chartmogul.svg" alt="Superhuman" />
        </li>
        <li>
          <img src="./images/notion.svg" alt="Superhuman" />
        </li>
        <li>
          <img src="./images/dashdash.svg" alt="Superhuman" />
        </li>
      </ul>

      <div className={`${styles.deck} align-center`}>
        <div className={styles.deckContent}>
          <h4 className="text-coral">
            Replace spreadsheets, ‘where are you’ texts, and piles of email with
            Workpath.
          </h4>
        </div>
      </div>

      <section className={styles.container}>
        <div className={styles.image}>
          <img
            src="./images/routing.png"
            alt="Right job, meet right team member"
          />
        </div>
        <div className={styles.copy}>
          <h4 className="text-admiral">Right job, meet right team member.</h4>
          <p className="fs-20 lh-s pad-bottom">
            Stop playing matchmaker between jobs and team members. Workpath
            automatically routes jobs to the person with the right skills. No
            more texting “is this something you can do?”
          </p>
          <Button 
            type="default" 
            text="See all features" 
          />
        </div>
      </section>

      <section className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.copy}>
          <h4>Real mobile health team management.</h4>
          <p className="fs-20 lh-s pad-bottom">
            Workpath is made for mobile—so you can dispatch, track, and
            communicate with your team from anywhere. No more texting or email
            threads. Workpath also delivers status updates proactively and
            automatically. Bottom line? No more puzzled patients.
          </p>
          <Button type="default" text="Get a Demo" />
        </div>
        <div className={styles.image}>
          <img
            src="./images/mobile.png"
            alt="Real mobile health team management"
          />
        </div>
      </section>

      <div className={styles.roadblock}>
        <div className={styles.lColumn}>
          <p className="fs-24">
            Want to know how Workpath can help with your specific business?
          </p>
          <p className="f-23 text-hull lh-xl">
            See case studies on some successful partnerships.
          </p>
        </div>
        <div className={styles.rColumn}>
          <Button type="ghost" text="Case studies" />
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statsContent}>
          <h4 className="text-coral align-center">Just like your patients, we know you want results.</h4>
          <p className="fs-20 text-hull lh-s align-center">
            Businesses that move to Workpath grow the good numbers and shrink the not so good. You also gain a partner in streamlining your workflow and winning more work.
          </p>

          <div className="columns">
            <div className="column align-center">
              <h3 className="text-scrub strip-margin lh-s">40%</h3>
              <p className="f-14 text-hull lh-s">Decrease in phone calls</p>
            </div>
            <div className="column align-center">
              <h3 className="text-scrub strip-margin lh-s">65%</h3>
              <p className="f-14 text-hull lh-s">Reduction in email volume</p>
            </div>
            <div className="column align-center">
              <h3 className="text-scrub strip-margin lh-s">98%</h3>
              <p className="f-14 text-hull lh-s">Appointment compliance</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.deck} align-center`}>
        <h5 className="text-coral lh-s">
          Whoever said, “I love using our team dashboard”? <br/>Workpath users, that’s who.
        </h5>
      </div>

      <div className={styles.quotes}>

        <div className={styles.quote}>
          <p>“My quote is a little shorter. Sorry. I was literally saving people's lives.”</p>
          <div className={styles.attr}>
            <img src="./images/avatar_001.png" alt="Joe Bob" />
            <h5>Wendy Watson</h5>
            <cite>CEO, Helios Health</cite>
          </div>
        </div>

        <div className={styles.quote}>
          <p>“If you asked me to design something to manage my mobile phlebotomy team, it would be Workpath. They got it so right, it’s almost uncanny.”</p>
          <div className={styles.attr}>
            <img src="./images/avatar_002.png" alt="Joe Bob" />
            <h5>Wade Richards</h5>
            <cite>Founder of HealthMo</cite>
          </div>
        </div>

        <div className={styles.quote}>
          <p>“Before Workpath I was afraid of computers. It's not that I'm dumb.A computer killed my dog. But I like computers and Workpath now. What was the question?”</p>
          <div className={styles.attr}>
            <img src="./images/avatar_003.png" alt="Joe Bob" />
            <h5>Annette Murphy</h5>
            <cite>Founder of CrewCorps</cite>
          </div>
        </div>

      </div>

    </Layout>
  );
}
