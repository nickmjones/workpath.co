import * as React from "react";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Button from "../../components/button";
import styles from "../../styles/modules/slug.module.scss";
const glob = require("glob");

export default function BlogTemplate({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  function ShowStats() {
    const statsItems = frontmatter.stats;
    if (statsItems) {
      return (
        <div>
          <p className="large">Outcomes</p>
          <p className="margin-bottom-small">{frontmatter.stats_intro}</p>
          <ul className={styles.stats}>
            {statsItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  }
  function GetHeroImage() {
    var image = frontmatter.image;
    if (image !=null) {
      return(
        <section
          className="breakout bgcolor-scrub padding-y-xxlarge margin-bottom-large"
          style={{
            backgroundImage: "url(" + "/" + image + ")",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="columns margin-y-xlarge fade-in">
            <div className="column column--66 column--center-children">
              <p className="large color-quartz">Case Studies</p>
              <h4 className="color-fog shadow display">{frontmatter.title}</h4>
            </div>
          </div>
        </section>
      )
    } else {
      return(
        <section
          className="breakout bgcolor-scrub margin-bottom-large"
          style={{
            backgroundImage: "url(" + "/usecase_placeholder.jpg" + ")",
            backgroundPosition: "0 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="columns margin-y-xlarge fade-in">
            <div className="column column--66 column--center-children">
              <p className="large color-quartz">Case Studies</p>
              <h4 className="color-fog shadow display">{frontmatter.title}</h4>
            </div>
          </div>
        </section>
      )
    }
  }

  return (
    <>
      <Head>
        <title>workpath.co | {frontmatter.title}</title>
      </Head>

      <GetHeroImage />

      <div className="columns">
        <div className="column">
          <ShowStats />
          <p className="large margin-top-medium">Start today</p>
          <p>Book a demo to learn more about how Workpath can improve your work.</p>
          <Button type="default" text="Book a demo" />
        </div>
        <div className="column column--66 margin-bottom-medium">
          <h5 className="margin-bottom-medium">{frontmatter.intro}</h5>
          <ReactMarkdown source={markdownBody} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../casefiles/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const cases = glob.sync("casefiles/**/*.md");

  //remove path and extension to leave filename only
  const caseSlugs = cases.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = caseSlugs.map((slug) => `/casestudies/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
