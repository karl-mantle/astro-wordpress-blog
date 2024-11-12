import { wpQuery } from './wpQuery';
import type { NodeByUri } from '../types';

export async function getRecentPosts(amount: number): Promise<NodeByUri["posts"]> {
  const res = await wpQuery({
    query: `query getRecentPosts($amount: Int!) {
      posts(first: $amount) {
        nodes {
          uri
          title
          excerpt
          dateGmt
          categories {
            nodes {
              name
              uri
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          tags {
            nodes {
              uri
              name
            }
          }
        }
      }
    }`,
    variables: { amount }
  });

  return res.posts;
}
