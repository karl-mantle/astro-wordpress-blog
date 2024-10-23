// Posts
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
