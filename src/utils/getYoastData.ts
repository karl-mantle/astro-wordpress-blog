import { wpQuery } from './wpQuery';
import type { SchemaData, SocialData } from '../types';

export async function getSchemaData(): Promise<SchemaData> {
  const res = await wpQuery({
    query: `query getSchemaData {
      seo {
        openGraph {
          defaultImage {
            sourceUrl
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

  return res.seo;
}

export async function getSocialData(): Promise<SocialData> {
  const res = await wpQuery({
    query: `query getSocialData {
      seo {
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
      }
    }`
  });

  return res.seo.social;
}
