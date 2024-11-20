// gqlNavigation.ts

export interface MenuItem { 
  id: string;
  parentId: string | null;
  uri: string;
  label: string;
  children: MenuItem[];
}

export interface menuItems {
  nodes: MenuItem[];
}

// gqlRoutes.ts

export interface GetAllUrisResponse {
  posts: {
    nodes: {
      uri: string
    };
  };
  pages: {
    nodes: {
      uri: string
    };
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

export interface Tag {
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
  featuredImage?: FeaturedImage | null;
  seo?: YoastSEO;
  posts?: {
    nodes: {
      date: string;
      title: string;
      excerpt: string;
      dateGmt: string;
      uri: string;
      categories: {
        nodes: Category[];
      };
      tags: {
        nodes: Tag[];
      };
      featuredImage: FeaturedImage | null;
    }[];
  };
  description?: string;
};

// gqlSettings.ts

export interface generalSettings {
  dateFormat: string;
  description: string;
  language: string;
  timeFormat: string;
  timezone: string;
  title: string;
}

export interface readingSettings {
  readingSettings: {
    showOnFront: 'page' | 'posts';
    postsPerPage: number;
    pageOnFront: number;
    pageForPosts: number;
  };
}

// gqlYoastSeo.ts

export interface OpenGraph {
  seo: {
    openGraph: {
      defaultImage: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          height: number;
          width: number;
        };
      };
    };
  };
}

export interface SiteLogo {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    height: number;
    width: number;
  };
}

export interface SchemaData {
  seo: {
    schema: {
      logo: SiteLogo;
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
