import { getLanguage } from '../utils/gqlSettings';

const localeMap: { [key: string]: string } = {
  '': 'en-US',
  'en_US': 'en-US',
  'en_GB': 'en-GB',
  'es_ES': 'es-ES',
  'fr_FR': 'fr-FR',
  'de_DE': 'de-DE',
  'it_IT': 'it-IT',
  'ja_JP': 'ja-JP',
  'zh_CN': 'zh-CN',
  'ru_RU': 'ru-RU',
  'pt_PT': 'pt-PT',
  'pt_BR': 'pt-BR',
  'nl_NL': 'nl-NL',
  'sv_SE': 'sv-SE',
  'no_NO': 'no-NO',
  'da_DK': 'da-DK',
  'fi': 'fi-FI',
  'tr_TR': 'tr-TR',
  'ko_KR': 'ko-KR',
  // to do add more of these...
};

export async function setLocale(): Promise<string> {
  const res: { language: string } = await getLanguage();
  const { language } = res;
  return localeMap[language] || 'en-US';
}
