import Head from "next/head";
import Navigation from "./navigation";
import Hero from "./hero";
import Footer from "./footer";

export default function Homepage({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <div className="wrapper">
        <Navigation />
        <Hero />
        { children }
        <Footer/>
      </div>
    </div>
  );
}
