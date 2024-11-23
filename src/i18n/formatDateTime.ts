import { getDateTimeFormat } from '../utils/gqlSettings';
import { setLocale } from './setLocale';

const suffixes: { [key: string]: string[] } = {
  'en': ['th', 'st', 'nd', 'rd'],
  'dk': ['test', 'dansk', 'dag', 'sv'],
  // to do add other language suffixes?
};

// this possibly isn't worth pursuing yet now as won't apply to many non-IE languages, also RTL scripts?
const getSuffix = (day: number, locale: string) => {
  const lang = locale.split('-')[0];
  const suffixSet = suffixes[lang] || suffixes['en'];

  // this will only work for english
  if (day > 3 && day < 21) return suffixSet[0];
  switch (day % 10) {
    case 1: return suffixSet[1];
    case 2: return suffixSet[2];
    case 3: return suffixSet[3];
    default: return suffixSet[0];
  }
};

const formatMapping: {[key: string]: (date: Date, locale: string) => string } = {
  d: date => String(date.getDate()).padStart(2, '0'),
  j: date => String(date.getDate()),
  S: (date, locale) => { // needs looking at what languages use ordinal suffixes and what don't
    const day = date.getDate();
    return getSuffix(day, locale);
  },
  l: (date, locale) => date.toLocaleDateString(locale, { weekday: 'long' }),
  D: (date, locale) => date.toLocaleDateString(locale, { weekday: 'short' }),
  m: date => String(date.getMonth() + 1).padStart(2, '0'),
  n: date => String(date.getMonth() + 1),
  F: (date, locale) => date.toLocaleDateString(locale, { month: 'long' }),
  M: (date, locale) => date.toLocaleDateString(locale, { month: 'short' }),
  Y: date => String(date.getFullYear()),
  y: date => String(date.getFullYear()).slice(-2),
  a: date => date.getHours() < 12 ? 'am' : 'pm',
  A: date => date.getHours() < 12 ? 'AM' : 'PM',
  g: date => String((date.getHours() % 12) || 12),
  h: date => String((date.getHours() % 12) || 12).padStart(2, '0'),
  G: date => String(date.getHours()),
  H: date => String(date.getHours()).padStart(2, '0'),
  i: date => String(date.getMinutes()).padStart(2, '0'),
  s: date => String(date.getSeconds()).padStart(2, '0'),
  T: date => date.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2], // to do multilingual timezones, why not
  c: date => date.toISOString(),
  r: date => date.toUTCString(),
  U: date => String(Math.floor(date.getTime() / 1000))
};

export function formatDate(dateString: string, dateFormat: string, timeFormat:string, locale = 'en-US'): string {
  const date = new Date(dateString);
  const replaceDateFormat = (match: string): string => (formatMapping[match] ? formatMapping[match](date, locale) : match);

  const formatString = `${dateFormat} ${timeFormat}`.trim();
  return formatString.replace(/d|j|S|l|D|m|n|F|M|Y|y|a|A|g|h|G|H|i|s|T|c|r|U/g, replaceDateFormat);
}

export async function getFormattedDate(dateString: string): Promise<string> {
  const settings = await getDateTimeFormat();
  const locale = await setLocale();
  return formatDate(dateString, settings.dateFormat, settings.timeFormat, locale);
}
