import { wpQuery } from './wpQuery';
import type { generalSettings, readingSettings } from '../types';

// general settings

export async function getDateTimeFormat(): Promise<generalSettings> {
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

export async function getDescription(): Promise<generalSettings> {
  const res = await wpQuery({
    query: `query getDescription {
      generalSettings {
        description
      }
    }`
  });

  return res.generalSettings;
}

export async function getLanguage(): Promise<generalSettings> {
  const res = await wpQuery({
    query: `query getLanguage {
      generalSettings {
        language
      }
    }`
  });

  return res.generalSettings;
}

export async function getTimeZone(): Promise<generalSettings> {
  const res = await wpQuery({
    query: `query getTimeZone {
      generalSettings {
        timezone
      }
    }`
  });

  return res.generalSettings;
}

export async function getSiteTitle(): Promise<generalSettings> {
  const res = await wpQuery({
    query: `query getSiteTitle {
      generalSettings {
        title
      }
    }`
  });

  return res.generalSettings;
}

// reading settings

export async function getFrontPageStatus(): Promise<readingSettings> {
  const res = await wpQuery({
    query: `query getFrontPageStatus {
      readingSettings {
        showOnFront
      }
    }`
  });

  return res.readingSettings;
}

export async function getPostsPerPage(): Promise<readingSettings> {
  const res = await wpQuery({
    query: `query getPostsPerPage {
      readingSettings {
        postsPerPage
      }
    }`
  });

  return res.readingSettings;
}

export async function getPageIds(): Promise<readingSettings> {
  const res = await wpQuery({
    query: `query getPageIds {
      readingSettings {
        pageOnFront
        pageForPosts
      }
    }`
  });

  return res.readingSettings;
}

// to do

export async function getPageUri(pageId: string) {
  const res = await wpQuery({
    query: `query getPageUri {
      pageBy(pageId: ${pageId}) {
        uri
      }
    }`
  });

  return res.pageBy;
}