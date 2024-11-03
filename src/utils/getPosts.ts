import { wpQuery } from './wpQuery';
import type { GetAllUrisResponse, UriNode } from '../types';

// terms includes tags and categories
export async function getAllUris(): Promise<{ params: { uri: string } }[]> {
  const res: GetAllUrisResponse = await wpQuery({
    query: `query GetAllUris {
      terms {
        nodes {
          uri
        }
      }
      posts(first: 100) {
        nodes {
          uri
        }
      }
      pages(first: 100) {
        nodes {
          uri
        }
      }
    }`
  });

  const uris = Object.values(res)
    // combine nodes
    .reduce((acc, currentValue) => acc.concat(currentValue.nodes), [] as UriNode[])
    // filter nodes
    .filter((node: UriNode) => node.uri !== null)
    // format nodes
    .map((node: UriNode) => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
      return { params: { uri: trimmedURI } };
    });

  return uris;
}

export async function getNodeByURI(uri: string) {
  const res = await wpQuery({
    query: `query GetNodeByURI($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
        isContentNode
        isTermNode
        ... on Post {
          uri
          title
          content
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
              sourceUrl
              altText
            }
          }
          seo {
            breadcrumbs {
              text
              url
            }
            metaDesc
            title
          }
        }
        ... on Page {
          uri
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          seo {
            breadcrumbs {
              text
              url
            }
            metaDesc
            title
          }
        }
        ... on Category {
          uri
          name
          description
          seo {
            breadcrumbs {
              text
              url
            }
            metaDesc
            title
          }
        }
        ... on Tag {
          uri
          name
          description
          seo {
            breadcrumbs {
              text
              url
            }
            metaDesc
            title
          }
        }
      }
    }`,
    variables: { uri }
  });

  return { nodeByUri: res.nodeByUri }
}