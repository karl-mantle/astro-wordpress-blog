import { wpQuery } from './wpQuery';
import type { GetAllUrisResponse } from '../types';

// terms includes tags and categories
export async function getAllUris(): Promise<{ params: { uri: string } }[]> {
  const res: GetAllUrisResponse = await wpQuery({
    query: `query GetAllUris {
      terms(where: {childless: false}) {
        nodes {
          uri
        }
      }
      posts(where: {status: PUBLISH}) {
        nodes {
          uri
        }
      }
      pages(where: {status: PUBLISH}) {
        nodes {
          uri
        }
      }
    }`
  });

  const uris = Object.values(res)
    // combine nodes
    .reduce((acc, currentValue) => acc.concat(currentValue.nodes), [] as { nodes: any[] }[])
    // filter nodes
    .filter((node: {uri: string}) => node.uri !== null)
    // format nodes
    .map((node: {uri: string}) => {
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