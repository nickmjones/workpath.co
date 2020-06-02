import React, { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Button from "../components/button";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/modules/index.module.scss";

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

        <Hero />

        <ul className="columns">
          <li className="column column--center-children margin-y-medium">
            <img src="./images/superhuman.svg" alt="Superhuman" />
          </li>
          <li className="column column--center-children margin-y-medium">
            <img src="./images/eyeem.svg" alt="Superhuman" />
          </li>
          <li className="column column--center-children margin-y-medium">
            <img src="./images/chartmogul.svg" alt="Superhuman" />
          </li>
          <li className="column column--center-children margin-y-medium">
            <img src="./images/notion.svg" alt="Superhuman" />
          </li>
          <li className="column column--center-children margin-y-medium">
            <img src="./images/dashdash.svg" alt="Superhuman" />
          </li>
        </ul>

        <div className="columns align-center margin-y-medium">
          <h4>
            Replace spreadsheets, 'where are you' texts, and piles of email with
            Workpath.
          </h4>
        </div>

        <section className="columns columns--pull-left">
          <div className="column column--66 no-pad center-children">
            <img
              className="cover"
              src="./images/routing.png"
              alt="Right job, meet right team member"
            />
          </div>
          <div className="column column--center-children">
            <div class={styles.talker}>
              <h5 className="text-admiral">
                Right job, meet right team member.
              </h5>
              <p>
                Stop playing matchmaker between jobs and team members. Workpath
                automatically routes jobs to the person with the right skills.
                No more texting “is this something you can do?”
              </p>
              <Button type="default" text="See all features" />
            </div>
          </div>
        </section>

        <section className="columns columns--pull-right columns--reverse">
          <div className="column column--center-children">
            <div class={styles.talker}>
              <h5 className="text-admiral">
                Real mobile health team management.
              </h5>
              <p>
                Workpath is made for mobile—so you can dispatch, track, and
                communicate with your team from anywhere. No more texting or
                email threads.
              </p>
              <Button type="default" text="Get a Demo" />
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

        <div className="columns margin-y-large">
          <div className="column">
            <p className="xlarge color-coral align-center">
              Want to know how Workpath can help with your specific business?
            </p>
            <p className="large color-hull align-center">
              See case studies on some successful partnerships. &rarr;
            </p>
          </div>
        </div>

        <div className="breakout fog padding-y-xlarge">
          <div className="columns">
            <div className="column align-center">
              <h4>
                Just like your patients, we know you want results.
              </h4>
              <p className="large">
                Businesses that move to Workpath grow the good numbers and shrink
                the not so good. You also gain a partner in streamlining your
                workflow and winning more work.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column column--spaced align-center">
              <h3 className="color-scrub">
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
              </h3>
              <p className="small">Decrease in phone calls &#9660;</p>
            </div>

            <div className="column column--spaced align-center">
              <h3 className="color-scrub">
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
              </h3>
              <p className="small">Reduction in email volume &#9660;</p>
            </div>

            <div className="column column--spaced align-center">
              <h3 className="color-scrub">
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
              </h3>
              <p className="small">Appointment compliance &#9650;</p>
            </div>
          </div>
        </div>


        <div className="breakout white padding-y-xlarge">
          <div className="columns">
            <div className="column align-center">
              <h5 className="padding-y-medium">
                Whoever said, "I love using our team dashboard?" <br />
                Workpath users, that’s who.
              </h5>
            </div>
          </div>

          <div className="columns">
            <div className={styles.bordered}>
              <div className={styles.quote}>
                <p>
                  “My quote is a little shorter. Sorry. I was literally saving
                  people's lives.”
                </p>
              </div>
              
              <div className={styles.citation}>
                <img src="./images/avatar_001.png" alt="Joe Bob" />
                <p className="large color-hull">Wendy Watson</p>
                <p className="small color-coral">CEO, Helios Health</p>
              </div>
            </div>

            <div className={styles.bordered}>
              <div className={styles.quote}>
                <p>
                  “If you asked me to design something to manage my mobile
                  phlebotomy team, it would be Workpath. They got it so right, it’s
                  almost uncanny.”
                </p>
              </div>

              <div className={styles.citation}>
                <img src="./images/avatar_002.png" alt="Joe Bob" />
                <p className="large color-hull">Wade Richards</p>
                <p className="small color-coral">Founder of HealthMo</p>
              </div>
            </div>

            <div className={styles.bordered}>
              <div className={styles.quote}>
                <p>
                  “Before Workpath I was afraid of computers. But I like computers
                  and Workpath now. What was the question?”
                </p>
              </div>

              <div className={styles.citation}>
                <img src="./images/avatar_003.png" alt="Joe Bob" />
                <p className="large color-hull">Annette Murphy</p>
                <p className="small color-coral">Founder of CrewCorps</p>
              </div>
            </div>
          </div>
          
        </div>
      </Fragment>
    );
  }
}
