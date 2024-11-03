// getPosts.ts
export interface UriNode {
  uri: string;
};

export interface GetAllUrisResponse {
  terms: {
    nodes: UriNode[];
  };
  posts: {
    nodes: UriNode[];
  };
  pages: {
    nodes: UriNode[];
  };
};

export interface YoastSEO {
  breadcrumbs: {
    text: string;
    url: string;
  };
  metaDesc: string;
  title: string;
};

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
};

export interface Category {
  name: string;
  uri: string;
};

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
  seo?: YoastSEO;
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
};

// getMetaData.ts

export interface SchemaData {
  seo: {
    openGraph: {
      defaultImage: {
        sourceUrl: string;
      };
    };
    schema: {
      logo: {
        sourceUrl: string;
      };
      companyName: string;
      siteName: string;
      personName: string;
      companyOrPerson: 'company' | 'person';
    };
  };
};

export interface SocialData {
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
};
