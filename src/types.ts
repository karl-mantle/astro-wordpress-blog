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

export interface SeoData {
  breadcrumbs: {
    text: string;
    url: string;
  };
  metaDesc: string;
  title: string;
}

export interface FeaturedImage {
  node: {
    srcSet: string;
    sourceUrl: string;
    altText: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  };
}

export interface Category {
  name: string;
  uri: string;
}

export interface NodeByUri {
  __typename: string;
  isContentNode: boolean;
  isTermNode: boolean;
  title?: string;
  uri?: string;
  date?: string;
  content?: string;
  excerpt?: string;
  categories?: {
    nodes: Category[];
  };
  featuredImage?: FeaturedImage;
  seo?: SeoData;
  posts?: {
    nodes: {
      date: string;
      title: string;
      excerpt: string;
      uri: string;
      categories: {
        nodes: Category[];
      };
      featuredImage: FeaturedImage;
    }[];
  };
  description?: string;
}

// getMetaData.ts
export interface SocialUrls {
  facebook: {
    url: URL;
  };
  instagram: {
    url: URL;
  };
  linkedIn: {
    url: URL;
  };
  mySpace: {
    url: URL;
  };
  pinterest: {
    url: URL;
  };
  twitter: {
    username: string;
  };
  wikipedia: {
    url: URL;
  };
  youTube: {
    url: URL;
  };
}

export interface Schema {
  logo: {
    sourceUrl: string;
  };
  companyName: string;
  siteName: string;
  personName: string;
  companyOrPerson: 'company' | 'person';
}

export interface MetaData {
  image: string;
  seo: {
    meta: {
      config: {
        separator: string;
      };
    };
    openGraph: {
      defaultImage: {
        sourceUrl: string;
      };
    };
    social: SocialUrls;
    schema: Schema;
  };
}
