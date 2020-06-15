import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero";
import Button from "../components/button";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/modules/index.module.scss";
import Fade from "react-reveal";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didViewCountUp: false,
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <Fragment>
        <Head>
          <title>workpath.co | Home</title>
        </Head>

        <Hero
          headline="The only dispatch platform for mobile healthcare services."
          subhed="Manage your mobile team, win more work, and dramatically improve patient experience."
          image="hero_index@2x.png"
        />

        <ul className="columns margin-y-small">
          <li className="column column--center-children"></li>
          <li className="column column--center-children">
            <img
              src="./images/healthineers.png"
              className="responsive"
              alt="Siemens Healthineers"
            />
          </li>
          <li className="column column--center-children margin-y-medium">
            <img
              src="./images/vault.png"
              className="responsive"
              alt="Vault Health"
            />
          </li>
          <li className="column column--center-children margin-y-medium">
            <img
              src="./images/phlebotek.png"
              className="responsive"
              alt="Phlebotek"
            />
          </li>
          <li className="column column--center-children"></li>
        </ul>

        <div className="columns margin-y-xlarge">
          <div className="column">
            <h4>
              Replace spreadsheets, 'where are you' texts, and piles of email
              with Workpath.
            </h4>
          </div>
        </div>

        <Fade>
          <section className="columns columns--pull-left">
            <div className="column column--66 no-pad center-children">
              <img
                className="cover"
                src="./images/routing.png"
                alt="Right job, meet right team member"
              />
            </div>
            <div className="column column--center-children">
              <div className={styles.talker}>
                <h5 className="text-admiral">
                  Right job, meet right team member.
                </h5>
                <p className="large">
                  Stop playing matchmaker between jobs and team members.
                  Workpath automatically routes jobs to the person with the
                  right skills. No more texting “is this something you can do?”
                </p>
                <Link href="/platform">
                  <a>
                    <Button type="default" text="See all features" />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="columns columns--pull-right columns--reverse">
            <div className="column column--center-children">
              <div className={styles.talker}>
                <h5 className="text-admiral">
                  Real mobile health team management.
                </h5>
                <p className="large">
                  Workpath is made for mobile—so you can dispatch, track, and
                  communicate with your team from anywhere. No more texting or
                  email threads.
                </p>
                <Link href="/demo">
                  <a>
                    <Button type="default" text="Get a demo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="column column--66 no-pad">
              <img
                className="cover"
                src="./images/mobile.png"
                alt="Real mobile health team management"
              />
            </div>
          </section>
        </Fade>

        <div className="columns margin-y-large">
          <div className="column align-right">
            <p className="xlarge color-quartz">
              Want to know how Workpath can help with your specific business?
            </p>
            <p className="large color-hull">
              <Link href="/casestudies"><a>See case studies on some successful partnerships. &rarr;</a></Link>
            </p>
          </div>
        </div>

        <div className="breakout bgcolor-fog padding-y-xlarge">
          <div className="columns">
            <div className="column column--75 column--spaced margin-top-medium margin-bottom-medium">
              <h4>Just like your patients, we know you want results.</h4>
              <p className="large">
                Businesses that move to Workpath grow the good numbers and
                shrink the not so good. You also gain a partner in streamlining
                your workflow and winning more work.
              </p>
            </div>
          </div>
          <div className="columns columns--wrap">
            <div className="column column--75 margin-top-medium">
              <h4>
                <span className="number-holder color-midcentury">
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    delayedCall
                  >
                    <CountUp
                      start={0}
                      end={this.state.didViewCountUp ? 40 : 0}
                      suffix="%"
                      duration={3}
                    />
                  </VisibilitySensor>
                </span>{" "}
                Decrease in phone calls
              </h4>
            </div>

            <div className="column column--75">
              <h4>
                <span className="number-holder color-scrub">
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    delayedCall
                  >
                    <CountUp
                      start={0}
                      end={this.state.didViewCountUp ? 65 : 0}
                      suffix="%"
                      duration={3}
                    />
                  </VisibilitySensor>
                </span>{" "}
                Reduction in email volume
              </h4>
            </div>

            <div className="column column--75">
              <h4>
                <span className="number-holder color-quartz">
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    delayedCall
                  >
                    <CountUp
                      start={0}
                      end={this.state.didViewCountUp ? 98 : 0}
                      suffix="%"
                      duration={3}
                    />
                  </VisibilitySensor>
                </span>{" "}
                Appointment compliance
              </h4>
            </div>
          </div>
        </div>

        <div className="breakout white padding-top-medium padding-bottom-large">
          <div className="columns">
            <div className="column align-center">
              <h5 className="padding-y-medium">
                Whoever said, "I love using our team dashboard?" <br />
                Workpath users, that’s who.
              </h5>
            </div>
          </div>

          <div className="columns columns--pack-tight">
            <div className={styles.bordered}>
              <div className={styles.quote}>
                <p>
                  “Workpath enables our customers—from hospitals to outpatient imaging centers to urgent care facilities and beyond—to address the increasing need for imaging studies and the shortage of radiologic technologists.”
                </p>
              </div>

              <div className={styles.citation}>
                <p className="large color-hull">Nanci Wozniak</p>
                <p className="small color-quartz">Vice President of Education &amp; Workforce Solutions at Siemens Healthineers</p>
              </div>
            </div>

            <div className={styles.bordered}>
              <div className={styles.quote}>
                <p>
                  “Workpath has been essential in allowing us to quickly scale our mobile telehealth team. Vault has been able to safely and efficiently supervise the at-home testing process vital to helping people across the United States.”
                </p>
              </div>

              <div className={styles.citation}>
                <p className="large color-hull">Jason Feldman</p>
                <p className="small color-quartz">Founder/CEO, Vault Health</p>
              </div>
            </div>

            <div className={styles.bordered}>
              <div className={styles.quote}>
                <p>
                  “Workpath has helped reduce the manpower needed for each job while growing our volume. If we didn’t have the Workpath system we would still have to focus an additional 5 to 10 people working on all of our accounts just to get everything done.”
                </p>
              </div>

              <div className={styles.citation}>
                <p className="large color-hull">Jacqueline Rivera</p>
                <p className="small color-quartz">COO, Phlebotek</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
