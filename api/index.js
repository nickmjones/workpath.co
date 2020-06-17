import Prismic from 'prismic-javascript';
import { apiEndpoint } from '../prismic-configuration';

// /blog
const postsAll = async params => {
  try {
    const API = await Prismic.api(apiEndpoint);
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'blog_post'),
      {
        orderings: '[my.blog_post.date desc]',
        ...params
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

// /blog/[id]
const postSingle = async slug => {
  try {
    const API = await Prismic.api(apiEndpoint);
    const response = await API.query(
      Prismic.Predicates.at('my.blog_post.uid', slug)
    );
    return response.results[0];
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { postsAll, postSingle };