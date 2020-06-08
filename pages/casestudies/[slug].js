import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
const glob = require("glob");

export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <section
        className="breakout bgcolor-scrub margin-bottom-large"
        style={{
          backgroundImage: "url(" + ".././images/hero_cases.jpg" + ")",
          backgroundPosition: "0 0",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="columns margin-y-xlarge fade-in">
          <div className="column column--66 column--center-children">
            <p className="large color-quartz">Case Studies</p>
            <h4 className="color-fog shadow">{frontmatter.title}</h4>
          </div>
        </div>
      </section>

      <div className="columns">
        <div className="column column--66">
          <h5 className="margin-bottom-medium">
            {frontmatter.intro}
          </h5>
        </div>
      </div>

      <div className="columns margin-y-medium">
        <div className="column column--66">
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
