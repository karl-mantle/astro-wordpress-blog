import { wpQuery } from './wpQuery';
import type { generalSettingsType, readingSettingsType } from '../types';

// general settings

export async function getDateTimeFormat(): Promise<generalSettingsType> {
  const res = await wpQuery({
    query: `query getDateTimeFormat {
      generalSettings {
        dateFormat
        timeFormat
      }
    }`
  });

  return res.generalSettings;
}

export async function getDescription(): Promise<generalSettingsType> {
  const res = await wpQuery({
    query: `query getDescription {
      generalSettings {
        description
      }
    }`
  });

  return res.generalSettings;
}

export async function getLanguage(): Promise<generalSettingsType> {
  const res = await wpQuery({
    query: `query getLanguage {
      generalSettings {
        language
      }
    }`
  });

  return res.generalSettings;
}

export async function getTimeZone(): Promise<generalSettingsType> {
  const res = await wpQuery({
    query: `query getTimeZone {
      generalSettings {
        timezone
      }
    }`
  });

  return res.generalSettings;
}

export async function getSiteTitle(): Promise<generalSettingsType> {
  const res = await wpQuery({
    query: `query getSiteTitle {
      generalSettings {
        title
      }
    }`
  });

  return res.generalSettings;
}

// reading settings (archives)

export async function getFrontPageStatus(): Promise<readingSettingsType> {
  const res = await wpQuery({
    query: `query getFrontPageStatus {
      readingSettings {
        showOnFront
      }
    }`
  });

  return res.readingSettings;
}

export async function getPostsPerPage(): Promise<readingSettingsType> {
  const res = await wpQuery({
    query: `query getPostsPerPage {
      readingSettings {
        postsPerPage
      }
    }`
  });

  return res.readingSettings.postsPerPage;
}

export async function getPostsPageId(): Promise<readingSettingsType> {
  const res = await wpQuery({
    query: `query getPostsPageId {
      readingSettings {
        pageForPosts
      }
    }`
  });

  return res.readingSettings;
}

export async function getSlugByPageId(pageId: string) {
  const res = await wpQuery({
    query: `query getSlugByPageId {
      pageBy(pageId: ${pageId}) {
        slug
      }
    }`
  });

  return res.pageBy.slug;
}