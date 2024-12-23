// gqlNavigation

export interface MenuItemType { 
  id: string;
  parentId: string | null;
  uri: string;
  label: string;
  children: MenuItemType[];
}

export interface menuItemsType {
  nodes: MenuItemType[];
}

// gqlRoutes
export interface Author {
  node: {
    avatar: {
      url: string;
    };
    name: string;
    description: string;
  }
}

export interface YoastSEO {
  breadcrumbs: {
    text: string;
    url: string;
  };
  metaDesc: string;
  title: string;
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface Category {
  name: string;
  uri: string;
}

export interface Tag {
  name: string;
  uri: string;
}

export interface NodeByUri {
  __typename: string;
  // shared
  title?: string;
  name?: string;
  uri?: string;
  date?: string;
  dateGmt?: string;
  content?: string;
  excerpt?: string;
  description?: string;
  categories?: {
    nodes: Category[];
  };
  featuredImage?: FeaturedImage | null;
  seo?: YoastSEO;
  author: Author;
  // gqlPosts
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
}

// gqlSettings

export interface generalSettingsType {
  dateFormat: string;
  description: string;
  timeFormat: string;
  timezone: string;
  title: string;
}

export interface readingSettingsType {
  showOnFront: 'page' | 'posts';
  postsPerPage: number;
  pageOnFront: string;
  pageForPosts: string;
}

// gqlYoastSeo

export interface OpenGraphType {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    height: number;
    width: number;
  };
}

export interface SiteLogoType {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    height: number;
    width: number;
  };
}

export interface SchemaType {
  seo: {
    schema: {
      logo: SiteLogoType;
      companyName: string;
      siteName: string;
      personName: string;
      companyOrPerson: 'company' | 'person';
    };
  };
}

export interface SocialLinkType {
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
  otherSocials: string[];
}

// archive

export interface PostCardType {
  title: string;
  excerpt: string;
  uri: string;
  dateGmt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
}

export interface ArchiveType {
  start: number;
  end: number;
  total: number;
  data: PostCardType[];
}
