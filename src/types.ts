// getPosts.ts
export interface UriNode {
  uri: string;
}

export interface TermsResponse {
  terms: {
    nodes: UriNode[];
  };
}

export interface PostsResponse {
  posts: {
    nodes: UriNode[];
  };
}

export interface PagesResponse {
  pages: {
    nodes: UriNode[];
  };
}

export interface GetAllUrisResponse {
  terms: TermsResponse;
  posts: PostsResponse;
  pages: PagesResponse;
}

export interface NodeByUri {
  __typename: string;
  isContentNode: boolean;
  isTermNode: boolean;
  title?: string;
  uri?: string;
  date?: string;
  content?: string;
  categories?: {
    nodes: {
      name: string;
      uri: string;
    }[];
  };
  featuredImage?: {
    node: {
      srcSet: string;
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        height: number;
        width: number;
      };
    };
  };
}
