// Posts
export interface Post {
  slug: string;
}

export interface PostEdge {
node: Post;
}

export interface PostsRes {
posts: {
  edges: PostEdge[];
};
}

export interface SinglePost {
title: string;
content: string;
}

export interface SinglePostRes {
post: SinglePost;
}

// Pages
export interface Page {
    slug: string;
  }

export interface PageEdge {
  node: Page;
}

export interface PagesRes {
  pages: {
    edges: PageEdge[];
  };
}

export interface SinglePage {
  title: string;
  content: string;
}

export interface SinglePageRes {
  page: SinglePage;
}
