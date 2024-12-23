import { wpQuery } from './wpQuery.ts';
import type { NodeByUri } from '../types.ts';

export async function getAllPosts(): Promise<{ uri: string }[]> {
  const res = await wpQuery({
    query: `query GetAllPosts {
      posts(where: {status: PUBLISH}, first: 100) {
        nodes {
          uri
        }
      }
    }`
  });

  
  return res.posts.nodes;
}

export async function getAllPages(): Promise<{ uri: string }[]> {
  const res = await wpQuery({
    query: `query GetAllPages {
      pages(where: {status: PUBLISH}, first: 100) {
        nodes {
          uri
        }
      }
    }`
  });

  return res.pages.nodes;
}

export async function getAllTerms(): Promise<{ name: string, uri: string }[]> {
  const res = await wpQuery({
    query: `query GetAllTerms {
      categories(first: 100) {
        nodes {
          name
          uri
        }
      }
      tags(first: 100) {
        nodes {
          name
          uri
        }
      }
    }`
  });

  const allCategories = res.categories.nodes.map((category: { name: string, uri: string }) => ({
    name: category.name,
    uri: category.uri,
    type: 'category'
  }));

  const allTags = res.tags.nodes.map((tag: { name: string, uri: string }) => ({
    name: tag.name,
    uri: tag.uri,
    type: 'tag'
  }));

  const allTerms = [...allCategories, ...allTags];

  return allTerms;
}

// get node data

export async function getNodeByURI(uri: string): Promise<NodeByUri> {
  const res = await wpQuery({
    query: `query GetNodeByURI($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
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
          author {
            node {
              avatar {
                url
              }
              name
              description
            }
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

  return res.nodeByUri;
}