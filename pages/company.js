import Head from "next/head";
import styles from "../styles/modules/company.module.scss";

export default function Company() {
  return (
    <>
      <Head>
        <title>workpath.co | About us</title>
      </Head>

      <section
        className="breakout margin-bottom-large"
        style={{
          backgroundImage: "url(" + "./images/mission_hero.png" + ")",
          backgroundPosition: "0 -1rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="columns columns--pull-right margin-y-xlarge">
          <div className="column column--66 column--center-children">
            <p className="large color-scrub">About Us</p>
            <h4 className="color-fog shadow">
              At Workpath, our whole team is focused on one mission—building the
              technology needed to deliver healthcare to patients when and where
              they need it most.
            </h4>
          </div>
        </div>
      </section>

      <div className="columns">
        <div className="column padding-right-medium">
          <p>
            Our software enables mobile healthcare services to schedule or
            dispatch on-demand the right professional to perform the right care
            at the right time and place.
          </p>

          <p>
            Today, a wide variety of mobile healthcare companies leverage
            Workpath’s HIPAA-compliant platform to cut costs, ensure compliance,
            and improve patient satisfaction. Services as diverse as in-home
            primary care, on-demand diagnostic imaging, and mobile paramedical
            insurance exams, among others, rely on Workpath.
          </p>
        </div>
        <div className="column padding-right-medium">
          <p>
            For tomorrow, as patient demands continue to push the healthcare
            industry to decentralize, Workpath is partnering with innovative
            companies to make a patient-centric future seamless. With Workpath’s
            technology, a day where a patient has blood drawn at their place of
            work, receives a nurse visit at their home, and has their
            prescription delivered to their front door while tracking its
            progress on their smartphone, is within reach.
          </p>
        </div>
      </div>

      <div className="columns margin-y-large">
        <h3>
          We're purpose driven. We come to the table with a set of <span className="color-quartz">core values</span> that drive everything we do.
        </h3>
      </div>

      <div className="columns columns--wrap margin-bottom-large">
        <div className="column column--66 margin-bottom-medium">
          <p className="large">Grit...no ego.</p>
          <p>
            Workpath has grit. We are continuously moving forward, developing
            new solutions, improving the customer’s experience, and making a
            difference in the community. There's no room for ego.
          </p>
        </div>
        <div className="column column--66 margin-bottom-medium">
          <p className="large">No fine print.</p>
          <p>
            We take pride in providing the highest value technology possible
            with no fine print. We're straightforward and stand firmly behind
            our products to ensure absolute customer satisfaction, repeat
            clientele, and a connected community.
          </p>
        </div>
        <div className="column column--66 margin-bottom-medium">
          <p className="large">Create value everywhere.</p>
          <p>
            Workpath believes we’re all creators of value. We don’t wait for
            opportunities, we put ourselves out there and look for ways to
            create massive value in every environment we enter. Workpath
            actively plants seeds, builds relationships, and always looks for
            ways to make an impact everywhere.
          </p>
        </div>
        <div className="column column--66 margin-bottom-medium">
          <p className="large">Effortless experience.</p>
          <p>
            We strive to make our technology effortless. Workpath is committed
            to helping customers simplify complexities to optimize their
            workforce and create better experiences. Our platform, and our
            customer service, is driven by a desire to make it easy for
            customers to get the tools, services, and experiences they want at
            all times.
          </p>
        </div>
        <div className="column column--66 margin-bottom-medium">
          <p className="large">Radical candor.</p>
          <p>
            We care personally and deeply, and because of that – we challenge
            directly. We look for ways to help, provide feedback constructively,
            and interact in a way that is transformative to our team and our
            clients. Because of this, we always look for ways to grow as people
            and as a brand.
          </p>
        </div>
        <div className="column column--66 margin-bottom-medium">
          <p className="large">Sound like you? Join us.</p>
          <p>
            Take a look at our current career listings and join us as we change
            the way healthcare orgs and providers get things done.
          </p>
        </div>
      </div>

      <div className="columns columns--center-items columns--wrap">
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/eddie.png" />
          <p>Eddie Peloke</p>
          <p className="small color-quartz">CEO</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/baylee.png" />
          <p>Baylee Mabe</p>
          <p className="small color-quartz">Head of Product</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/hunter.png" />
          <p>Hunter Bynes</p>
          <p className="small color-quartz">Business Development</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/luke.png" />
          <p>Luke Atwood</p>
          <p className="small color-quartz">Business Development</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/mitchell.png" />
          <p>Mitchell Murray</p>
          <p className="small color-quartz">Business Development</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/ryan.png" />
          <p>Ryan Stimmler</p>
          <p className="small color-quartz">Developer</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/jeremy.png" />
          <p>Jeremy Remington</p>
          <p className="small color-quartz">IT Infrastructure Specialist</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/elliott.png" />
          <p>Elliott Pogue</p>
          <p className="small color-quartz">Developer</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/louie.png" />
          <p>Louie Cheung</p>
          <p className="small color-quartz">Developer</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/justin.png" />
          <p>Justin Rutherford</p>
          <p className="small color-quartz">Developer</p>
        </div>
        <div className="column column--33 align-center padding-bottom-medium">
          <img className={styles.avatar} src="./images/team/emily.png" />
          <p>Emily Murphy</p>
          <p className="small color-quartz">Developer</p>
        </div>
      </div>
    </>
  );
}
