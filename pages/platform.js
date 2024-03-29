import Head from "next/head";
import Hero from "../components/hero";
import Fade from "react-reveal";

export default function Platform() {
  return (
    <>
      <Head>
        <title>workpath.co | How it works</title>
        <meta name="description" content="Workpath helps manage your mobile healthcare team, win more work, and dramatically improve patient experience." />
        <meta property="og:title" content="workpath.co" />
        <meta property="og:image" content="../public/linkedin_og.png" />
      </Head>

      <Hero
        section="Platform"
        headline="Eliminate distractions, simplify processes, and delight patients with just one app."
        image="hero_platform@2x.png"
      />
    

      <div className="columns margin-top-large margin-bottom-xlarge">
        <div className="column column--66">
          <p className="large">
            If you’re currently managing your mobile team out of a spreadsheet,
            fifteen group chats, and an email chain with a subject line like
            “re: re: re: Where are you???”—Workpath is here for you.
          </p>
          <p className="large">
            <span className="color-quartz">
              No one becomes a healthcare provider to do spreadsheets.
            </span>{" "}
            Our platform was specifically designed to manage mobile healthcare
            teams, because we understand what it’s like. Workpath puts an end to
            missed appointments, to techs desperately texting patients while
            they’re driving, and to puzzled patients calling dispatch.
          </p>
        </div>
      </div>

      {/* First appointment */}
      <Fade>
        <section className="breakout bgcolor-fog padding-y-large">
          <div className="columns">
            <div className="column column--center-children padding-medium">
              <p className="large color-quartz">
                6:19 am - Before the first appointment
              </p>
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
            <div className="column">
              <img className="responsive" src="./images/day_start.png" />
            </div>
          </div>
        </section>
      </Fade>

      {/* Feature image */}

      <section
        className="breakout margin-medium padding-y-xxxlarge"
        style={{
          backgroundImage: "url(" + "./images/nav_photo.png" + ")",
          backgroundPosition: "0 -1rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="columns">
          <div className="column column--50">
            <h5 className="color-fog display">
              Workpath routes, communicates, plans, and administrates—so you can
              provide care.
            </h5>
          </div>
        </div>
      </section>

      {/* Second appointment */}
      
      <Fade>
        <section className="breakout bgcolor-fog padding-y-xlarge">
          <div className="columns">
            <div className="column padding-medium">
              <p className="large color-quartz">
                11:18 am - Three appointments down
              </p>
              <p className="large">
                Workpath is with your team in the field all day. It puts notes and
                material lists at hand, routes to appointments with turn-by-turn
                directions, and even automatically keeps patients updated by SMS
                when they’re en route. Yep, automatically.
              </p>

              <div className="margin-top-small">
                <img
                  src="./images/ui.png"
                  width="100%"
                  alt="User interface showing a nurse on his way."
                />
              </div>
              <p className="large">
                One single app handles everything, including document scanning.
                And Workpath is 100% HIPAA-compliant (unlike spreadsheets and
                group texts.)
              </p>
              <p>
                Back in the office, see your team member's location and
                availability in realtime and full color. It all adds up to mean
                you and your team spend less time texting and chasing missed phone
                calls, and more time providing care.
              </p>
            </div>
            <div className="column">
              <img className="responsive" src="./images/day_middle.png" />
            </div>
          </div>
        </section>
      </Fade>


      <div className="columns margin-top-large">
        <div className="column no-pad">
          <img className="responsive" src="./images/dashboard.png" alt="Platform screenshot" />
        </div>
      </div>
      <div className="columns margin-y-medium">
        <div className="column column--66">
          <p className="large">
            Team status, communication, workflow planning, and more are all available in one tab. And Workpath's mobile app means a desk is totally optional, so you can do all the same tasks from the convenience of a smart phone or tablet.
          </p>
        </div>
      </div>

      {/* Last appointment */}

      <Fade>
        <section className="breakout bgcolor-fog padding-y-xlarge">
          <div className="columns">
            <div className="column column--center-children padding-medium">
              <p className="large color-quartz">
                5:41 pm - Last appointment of the day
              </p>
              <p className="large">
                Even though members of your team might be done for the day, Workpath
                isn't. While you're asleep Workpath is looking for expiring
                certifications and reminding your team to keep them up to date.
              </p>
              <p className="large">
                Workpath is also a great way to compile and act on customer
                feedback. Attach surveys to appointment completion emails, and post
                your feedback for your team and for prospective patients to see.
              </p>
              <p>
                And Workpath happily integrates with Salesforce, AllScripts, and
                dozens of other tools you might already use. Put your data to good
                use, and easily create powerful new workflows right inside Workpath.
              </p>
            </div>
            <div className="column">
              <img className="responsive" src="./images/day_end.png" />
            </div>
          </div>
        </section>
      </Fade>

      <div className="columns margin-y-xlarge">
        <div className="column padding-small">
          <img className="responsive" src="./images/integrate_001.png" />
          <p className="large">Integrate with what you’ve got</p>
          <p className="small">
            With Workpath at the center, you get the best of everything: a
            single place to manage day to day team communication and operations,
            and all the best platforms for payroll and customer management.
          </p>
        </div>
        <div className="column padding-small">
          <img className="responsive" src="./images/integrate_002.png" />
          <p className="large">The best time is real time</p>
          <p className="small">
            Workpath’s dashboard lets you in on everything that’s happening
            without even having to ask. Notifications and updates are automatic
            and timely.
          </p>
        </div>
        <div className="column padding-small">
          <img className="responsive" src="./images/integrate_003.png" />
          <p className="large">Compliance is key</p>
          <p className="small">
            Workpath is 100% HIPAA-compliant, which is more than we can say for
            spreadsheets and group texts. Workpath also keeps an eye on
            certifications and credentials, giving a heads up before they
            expire.
          </p>
        </div>
      </div>

      <div className="columns margin-bottom-large">
        <h5 className="align-center">
          Reclaim your work from texts and emails. Make your team's working hours count. Get back to caring for your
          patients. That’s Workpath.
        </h5>
      </div>
    </>
  );
}
