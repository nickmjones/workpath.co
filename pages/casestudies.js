import Head from "next/head";

export default function Casestudies() {
  return (
    <>
      <Head>
        <title>workpath.co | Case studies</title>
      </Head>
      <section
        className="breakout margin-bottom-large"
        style={{
          backgroundImage: "url(" + "./images/usecase_hero.png" + ")",
          backgroundPosition: "0 -1rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="columns columns--pull-right margin-y-xlarge">
          <div className="column column--66 column--center-children">
            <p className="large color-scrub">Case Studies</p>
            <h4 className="color-fog shadow">
              Let's blaze a trail together. Companies that use Workpath are at the forefront of on-demand, all-mobile healthcare.
            </h4>
          </div>
        </div>
      </section>

    </>
  );
}
