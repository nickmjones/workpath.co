import Link from "next/link";
import Head from "next/head";
import Hero from "../components/hero";
import { postsAll } from "../api";
import { linkResolver } from "../helpers";
import styles from "../styles/modules/blog.module.scss";

const Blog = ({ posts = [] }) => (
  <>
    <Head>
      <title>workpath.co | blog</title>
    </Head>
    <Hero
        section="Workpath Blog"
        headline="From the Trail"
        image="hero_cases@2x.png"
      />
    <div className="columns">
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <li key={index}>
            <Link
              as={linkResolver(post)}
              href={`/blogPost?slug=${post.uid}`}
            >
              <h5><a>{post.data.title[0].text}</a></h5>
            </Link>
          </li>
        ))}
      </ul>
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
