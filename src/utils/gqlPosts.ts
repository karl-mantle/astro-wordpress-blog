import { wpQuery } from './wpQuery.ts';
import type { NodeByUri } from '../types.ts';

export async function getPostsByMostRecent(amount: number): Promise<NodeByUri["posts"]> {
  const res = await wpQuery({
    query: `query getPostsByMostRecent($amount: Int!) {
      posts(first: $amount, where: {orderby: {field: DATE, order: DESC}}) {
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

  return res.posts.nodes;
}

export async function getPostsByTag(tag: string): Promise<NodeByUri["posts"]> {
  const res = await wpQuery({
    query: `query getPostsByTag($tag: String) {
      posts(where: {tag: $tag}) {
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
    variables: { tag }
  });

  const posts = res.posts.nodes;
  return posts;
}

export async function getPostsByCategory(category: string): Promise<NodeByUri["posts"]> {
  const res = await wpQuery({
    query: `query getPostsByCategory($category: String) {
      posts(where: {CategoryName: $category}) {
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
    variables: { category }
  });

  const posts = res.posts.nodes;
  return posts;
}
