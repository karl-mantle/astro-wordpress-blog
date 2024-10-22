import { wpQuery } from './wpQuery';
import type { Post, PostsRes, SinglePost, SinglePostRes, Page, PagesRes, SinglePage, SinglePageRes } from '../types';

export async function getAllPostsWithSlugs(): Promise<Post[] | undefined> {
  const data: PostsRes = await wpQuery({
    query: `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  });
  return data?.posts?.edges.map(edge => edge.node);
}

export async function getPostBySlug(slug: string): Promise<SinglePost | undefined> {
  const data: SinglePostRes = await wpQuery({
    query: `
      {
        post(id: "${slug}", idType: URI) {
          title
          content
        }
      }
    `
  });
  return data?.post;
}

export async function getAllPagesWithSlugs(): Promise<Page[] | undefined> {
  const data: PagesRes = await wpQuery({
    query: `
      {
        pages(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  });
  return data?.pages?.edges.map(edge => edge.node);
}

export async function getPageBySlug(slug: string): Promise<SinglePage | undefined> {
  const data: SinglePageRes = await wpQuery({
    query: `
      {
        page(id: "${slug}", idType: URI) {
          title
          content
        }
      }
    `
  });
  return data?.page;
}