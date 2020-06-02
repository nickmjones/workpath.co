import Head from "next/head"
import styles from "../styles/modules/platform.module.scss"

export default function Platform() {
  return (
    <>
      <Head>
        <title>workpath.co | How it works</title>
      </Head>

      <div className="breakout">
        <div className="columns">
          <div className="column column--spaced">
            <p className="small">6:19am - Before the first appointment</p>
            <p className="large">
              Workpath’s simple ordering portal makes it easy for your customers
              to fill your queue. Need to plan appointments with multiple stops?
              We've got you covered with easy multi-step job support.
            </p>
            <p className="large">
              And intelligent lead assignment gives your techs a heads up on the
              jobs that are best for them. Using customizable rules, Workpath
              puts the right opportunities in front of the right techs—without
              emailing, texting, and shoulder tapping.
            </p>
            <p>
              Features like smart route mapping and automatic and proactive
              status notifications eliminate guesswork (for you and your
              patients), while secure prep lists put supplies and important
              notes easily at hand alongside appointment details.
            </p>
          </div>
          <div className="column column--spaced">
            <p className="small">6:19am - Before the first appointment</p>
            <p className="large">
              Workpath’s simple ordering portal makes it easy for your customers
              to fill your queue. Need to plan appointments with multiple stops?
              We've got you covered with easy multi-step job support.
            </p>
            <p className="large">
              And intelligent lead assignment gives your techs a heads up on the
              jobs that are best for them. Using customizable rules, Workpath
              puts the right opportunities in front of the right techs—without
              emailing, texting, and shoulder tapping.
            </p>
            <p>
              Features like smart route mapping and automatic and proactive
              status notifications eliminate guesswork (for you and your
              patients), while secure prep lists put supplies and important
              notes easily at hand alongside appointment details.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.billboard}>
        <div className={styles.billboardCopy}>
          <h4>
            Workpath routes, communicates, plans, and administrates—so you can provide care.
          </h4>
        </div>
      </div>
    </>
  );
}
