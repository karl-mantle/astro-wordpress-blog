import { wpQuery } from './wpQuery';
import type { MetaData } from '../types';

// meta titles & descriptions are imported on a per-post basis
export async function getGlobalMetaData(): Promise<{ metadata: MetaData }> {
  const res = await wpQuery({
    query: `query getMetaData {
      seo {
        openGraph {
          defaultImage {
            sourceUrl
          }
        }
        social {
          facebook {
            url
          }
          instagram {
            url
          }
          linkedIn {
            url
          }
          mySpace {
            url
          }
          pinterest {
            url
          }
          twitter {
            username
          }
          wikipedia {
            url
          }
          youTube {
            url
          }
        }
        schema {
          logo {
            sourceUrl
          }
          companyName
          siteName
          personName
          companyOrPerson
        }
      }
    }`
  });

  return { metadata: res.seo };
}
