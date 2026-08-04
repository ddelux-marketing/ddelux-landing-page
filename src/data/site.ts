/**
 * Nastavenia projektu — jediné miesto, kde sa mení identita webu.
 * Texty sekcií sa upravujú v content.ts.
 */
export const site = {
  /** Názov firmy — používa sa v title, og:site_name a JSON-LD */
  nazovFirmy: 'DDelux',

  /** Jazyk stránky a og:locale */
  jazyk: 'sk',
  ogLocale: 'sk_SK',

  /**
   * Google Tag Manager ID (napr. 'GTM-XXXXXXX').
   * Ak zostane prázdny reťazec, GTM sa do stránky vôbec nevloží.
   */
  gtmId: '',

  logo: {
    src: '/images/logo.jpg',
    alt: 'DDelux – logo',
    width: 132,
    height: 63,
  },

  favicon: '/images/favicon.png',

  /** Obrázok pre og:image (zdieľanie na sociálnych sieťach) */
  ogImage: {
    src: '/images/logo-og.png',
    width: 1024,
    height: 518,
  },

  /** URL stránky s ochranou osobných údajov (GDPR) */
  gdprUrl: 'https://ddelux.sk/ochrana-sukromia-gdpr/',

  socialne: {
    instagram: 'https://www.instagram.com/ddeluxsk/',
    facebook: 'https://www.facebook.com/ddeluxsk',
  },

  kontakt: {
    email: 'info@ddelux.sk',
    telefony: ['+421 904 089 402'],
    /** Telefón v medzinárodnom formáte pre JSON-LD */
    telefonJsonLd: '+421904089402',
    sidlo: 'M. R. Štefánika 117/15, 927 01 Šaľa',
  },

  fakturacne: {
    nazov: 'DDelux, s. r. o.',
    ico: 'IČO: 53242165 DIČ: 2121313843 IČ DPH: SK2121313843',
    register: 'Zapísaný v OR OS Trnava, vložka č. 47432/T',
  },

  /**
   * Údaje pre štruktúrované dáta (JSON-LD) na hlavnej stránke.
   * Typ firmy: https://schema.org/LocalBusiness a podtypy
   */
  jsonLd: {
    typFirmy: 'AutomotiveBusiness',
    adresa: {
      ulica: 'M. R. Štefánika 117/15',
      mesto: 'Šaľa',
      psc: '927 01',
      krajina: 'SK',
    },
    oblastPosobenia: 'Slovensko',
  },
};
