import { getLanguage, getDateTimeFormat, getSiteTitle, getSiteDescription } from "./utils/gqlSettings";

// site info
export const globalSiteTitle = await getSiteTitle();
export const globalSiteDescription = await getSiteDescription();

// i18n
const resDateTimeFormat = await getDateTimeFormat();

export const globalDateFormat = resDateTimeFormat.dateFormat;
export const globalTimeFormat = resDateTimeFormat.timeFormat;
export const globalLanguage = await getLanguage();
