import { wpQuery } from './wpQuery';
import type { OpenGraph, SchemaData, SocialData } from '../types';

export async function getOpenGraph(): Promise<OpenGraph> {
  const res = await wpQuery({
    query: `query getOpenGraph {
      seo {
        openGraph {
          defaultImage {
            sourceUrl
          }
        }
      }
    }`
  });

  return res.seo;
}

export async function getSiteLogo(): Promise<SchemaData> {
  const res = await wpQuery({
    query: `query getSiteLogo {
      seo {
        schema {
          logo {
            sourceUrl
            altText
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }`
  });

  return res.seo.schema.logo;
}

export async function getSchemaData(): Promise<SchemaData> {
  const res = await wpQuery({
    query: `query getSchemaData {
      seo {
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
