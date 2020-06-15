import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";
import Hero from "../components/hero";

export default function Careers() {
  return (
    <>
      <Head>
        <title>workpath.co | Careers</title>
      </Head>

      <Hero
        section="Careers"
        headline="Join us as we change healthcare for the better."
      />

      <div className="columns margin-bottom-xxlarge">
        <div className="column column--66">
          <h5>Javascript Developer</h5>

          <p>
            We're looking for a developer (or two), to join our insanely talented team. We're a startup looking to solve some real problems in healthcare. At Workpath, you'll not only contribute to building a great product, your code will have a direct impact on making people's lives better. Read here how we've helped make the lives of cancer patients better.
          </p>

          <p>Here's what we are looking for, if this is you, we want to talk with you:</p>
          <ul className="generic">
            <li>Experience with JS and JS frameworks.</li>
            <li>A desire to learn on the fly and try new things.</li>
            <li>A proven ability to stay on top of the ever-changing Javascript landscape.</li>
            <li>Enjoy working in a cool warehouse space sandwiched between a coffee shop and brewery.</li>
          </ul>

          <p>Is this you? Email jobs@workpath.co.</p>
        </div>
      </div>

    </>
  );
}
