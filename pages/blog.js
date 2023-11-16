import Link from "next/link";
import Head from "next/head";
import Hero from "../components/hero";
import { postsAll } from "../api";
import { linkResolver } from "../helpers";
import moment from "moment";
import styles from "../styles/modules/blog.module.scss";

const truncate = (str) => {
  return str.length > 140 ? str.substring(0, 140) + "..." : str;
}

const Blog = ({ posts = [] }) => (
  <>
    <Head>
      <title>workpath.co | blog</title>
      <meta name="description" content="Workpath helps manage your mobile healthcare team, win more work, and dramatically improve patient experience." />
      <meta property="og:title" content="workpath.co" />
      <meta property="og:image" content="../public/linkedin_og.png" />
    </Head>
    <Hero
      section="Workpath Blog"
      headline="From the Trail"
      image="hero_cases@2x.png"
    />
    <div className="columns">
      <div className="column column--66 no-pad">
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <li key={index}>
              <p className="small">
                {(moment(post.data.publish_date).format('MMMM Do, YYYY'))}
              </p>
              <Link legacyBehavior as={linkResolver(post)} href={`/blogPost?slug=${post.uid}`}>
                <h5>
                  <a>{post.data.title[0].text}</a>
                </h5>
              </Link>
              <p>{truncate(post.data.short_description[0].text)} - 
              <Link legacyBehavior as={linkResolver(post)} href={`/blogPost?slug=${post.uid}`}>
                <a> Keep Reading</a>
              </Link>
              </p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  </>
);

Blog.getInitialProps = async () => {
  const response = await postsAll({ pageSize: 10 });
  return {
    posts: response.results,
  };
};

export default Blog;
