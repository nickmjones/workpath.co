import React, { Component } from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { postSingle } from "../api";
import linkResolver from "../helpers";
import htmlSerializer from "../helpers/serializer";
import moment from "moment";
import styles from "../styles/modules/blog.module.scss";

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const response = await postSingle(slug);
    return {
      post: response,
    };
  }

  render() {
    const post = this.props.post.data;
    if (post != null) {
      return (
        <>
          <Head>
            <title>workpath.co | blog | {RichText.asText(this.props.post.data.title)}</title>
            <meta name="description" content="Workpath helps manage your mobile healthcare team, win more work, and dramatically improve patient experience." />
            <meta property="og:title" content="workpath.co" />
            <meta property="og:image" content="../public/linkedin_og.png" />
          </Head>
          <section className="breakout margin-bottom-large">
            <div className="columns margin-y-xlarge">
              <div className="column column--medium">
                <h4 className="color-admiral">
                  {RichText.asText(this.props.post.data.title)}
                </h4>
                <p className="small">Published {(moment(this.props.post.data.publish_date).format('MMMM Do, YYYY'))}</p>
              </div>
            </div>
          </section>
          <div className="columns margin-bottom-xxlarge">
            <article className="column column--medium blogpost">
              {RichText.render(this.props.post.data.body, linkResolver, htmlSerializer)}
            </article>
          </div>
        </>
      );
    } else {
      return <>Oops</>;
    }
  }
}
