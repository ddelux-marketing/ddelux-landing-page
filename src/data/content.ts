/**
 * Všetky texty stránky. Nastavenia webu (logo, GTM, kontakt…) sú v site.ts.
 * Reťazce môžu obsahovať <strong> — komponenty ho vykresľujú modrou (farba brand).
 */

export const seo = {
  titulok: 'PPF fólie a keramická ochrana | DDelux Šaľa',
  popis:
    'Profesionálne detailingové štúdio v Šali. Ochranné PPF fólie so zárukou 10 rokov a keramická ochrana KRYTEX. Rezervujte si termín ešte dnes.',
};

export const hero = {
  nadpisModra: 'PRÉMIOVÁ',
  nadpisBiela: 'STAROSTLIVOSŤ\nO VAŠE AUTO',
  podnadpis: 'Profesionálne detailingové štúdio',
  cta: 'Rezervácia termínu',
  videoId: 'Z8kKkYq9PDo',
};

export const ppf = {
  nadpis: 'OCHRANNÁ PPF FÓLIA',
  odseky: [
    'PPF fólia zabezpečí, že bude vaše auto vyzerať ako nové aj niekoľko rokov po jeho kúpe.',
    'PPF fólia chráni auto pred mechanickým aj chemickým poškodením - kamienky, škrabance, oderky z parkoviska aj poveternostné vplyvy a UV žiarenie po dobu až <strong>10 rokov</strong>. PPF fólia chráni originálny lak a udržuje jeho perfektný vzhľad, čím si vaše vozidlo uchová vyššiu zostatkovú hodnotu pri budúcom predaji.',
    'Pri lepení PPF fólií zväčšujeme šablóny vozidiel alebo ich z ruky upravujeme na mieru tak, aby bolo možné diely zabaliť za hrany precíznou ručnou prácou a tvarovaním. Jednoducho tak, aby bol celý polep <strong>neviditeľný</strong>.',
  ],
  ceny: [
    {
      uvod: 'PPF fólia na',
      zvyraznene: 'prednú časť vozidla',
      cena: 'od 1 300 €',
      poznamka: '(bez DPH) podľa veľkosti auta',
    },
    {
      uvod: 'PPF fólia na',
      zvyraznene: 'celé vozidlo',
      cena: 'od 3 300 €',
      poznamka: '(bez DPH) podľa veľkosti auta',
    },
  ],
  accordion: {
    nadpis: 'Čo všetko polep PPF fólie zahŕňa (rozbaliť)',
    polozky: [
      'Full Front Packet – celý predok, blatníky, začiatok strechy, podkľučky, stĺpiky A/B/C, zrkadlá, nakladacia hrana kufra + základná keramická ochrana na zvyšok auta a ošetrenie interiéru',
      'Precíznosť a cit pre najmenšie detaily – rovnaký prístup pre rodinné auto aj športiak',
      'Ochrana pred kamienkami, šuchnutiami z parkoviska, kyselinami aj vtáčim trusom',
      'Samoregeneračné schopnosti – automatické zacelenie drobných škrabancov',
      'Keramická vrstva vo fólii – hydrofóbny účinok a jednoduchšia údržba',
      'Každých 12 mesiacov bezplatné čistenie (neobmedzene na vek vozidla)',
      'Záruka 10 rokov, hrúbka ochrany +200 μm, vizuálne na nerozoznanie od laku',
    ],
  },
  cta: 'Vyžiadať cenovú ponuku',
  vyhodaNadpis: 'TOP OCHRANA LAKU NA TRHU',
  obrazky: [
    { src: '/images/ppf-01.jpg', alt: 'Aplikácia PPF fólie na vozidlo' },
    { src: '/images/ppf-02.jpg', alt: 'Detail PPF fólie na karosérii' },
    { src: '/images/ppf-03.jpg', alt: 'Vozidlo chránené PPF fóliou' },
  ],
};

export const keramika = {
  nadpis: 'KERAMICKÁ OCHRANA',
  odseky: [
    'Keramika je druhý najodolnejší typ ochrany pre vaše auto. Lak každého vozidla stráca časom lesk a objavujú sa na ňom škrabance.',
    'Keramický povlak KRYTEX chráni lak pred poveternostnými vplyvmi, chemikáliami, UV žiarením a výrazne uľahčuje jeho údržbu. Keramika vytvára na laku ochranný film, ktorý odpudzuje vodu aj nečistoty a žiari vysokým leskom.',
    'Vďaka profesionálnej renovácii laku nadobudne vaše auto opäť svoj pôvodný žiarivý vzhľad.',
  ],
  ceny: [
    {
      uvod: 'Keramika na',
      zvyraznene: 'celé vozidlo',
      cena: 'od 800 €',
      poznamka: '(bez DPH) podľa veľkosti auta',
    },
  ],
  accordion: {
    nadpis: 'Čo všetko aplikácia keramiky zahŕňa (rozbaliť)',
    polozky: [
      'Detailné čistenie karosérie, pneumatík a diskov (možnosť aplikácie keramickej ochrany diskov)',
      'Renovácia laku',
      'Aplikácia keramickej ochrany KRYTEX na karosériu aj medzidverový priestor',
      'Odstránenie vodného kameňa zo skiel',
      'Aplikácia keramickej ochrany KRYTEX na sklá',
      'Detailné čistenie a dezinfekcia interiéru parou',
      'Impregnácia interiérových a exteriérových detailov',
    ],
  },
  cta: 'Vyžiadať cenovú ponuku',
  obrazky: [
    { src: '/images/keramika-01.jpg', alt: 'Aplikácia keramickej ochrany KRYTEX' },
    { src: '/images/keramika-02.jpg', alt: 'Lesk laku po keramickej ochrane' },
  ],
};

export const statistiky = {
  nadpis: 'VÝSLEDKY, KTORÉ UVIDÍTE AJ NA VAŠOM AUTE',
  polozky: [
    { cislo: '7+', text: 'rokov skúseností' },
    { cislo: '100+', text: 'aplikovaných PPF fólií' },
    { cislo: '100+', text: 'aplikovaných keramík' },
    { cislo: '500+', text: 'spokojných zákazníkov' },
  ],
};

export const recenzie = {
  nadpis: 'RECENZIE NAŠICH ZÁKAZNÍKOV',
  googleObrazok: {
    src: '/images/google-recenzie.jpg',
    alt: 'Hodnotenie DDelux na Google',
    width: 269,
    height: 75,
  },
  polozky: [
    {
      meno: 'Patrik Greguš',
      text: '„Včera som si vyzdvihol auto z DDelux detailing, ktoré vyzerá po roku ešte krajšie ako nové. Ďakujem za profesionálny prístup od prvého kontaktu…“',
    },
    {
      meno: 'Patrik Polák',
      text: 'Auto po "pobyte" v DDelux vyzerá ako nové. Oceňujem kvalitu odvedenej práce, precíznosť a ochotný prístup. Určite sa sem vrátim.',
    },
    {
      meno: 'Marek Wojcik',
      text: 'Bol som veľmi spokojný s prácou aj prístupom. Auto vyzerá po detailingu perfektne – precízne, čisté a do posledného detailu spravené. Je vidieť, že svoju robotu robia srdcom a profesionálne. Určite odporúčam každému, kto chce kvalitnú starostlivosť o auto. Ďakujem! 🙌',
    },
    {
      meno: 'Karol Brányik',
      text: 'So službami DDelux som bol maximálne spokojný. Od prvého kontaktu veľmi milý a ochotný prístup, všetko mi bolo detailne vysvetlené a poradené. Určite sa sem rád vrátim a môžem DDelux s čistým svedomím odporúčiť každému, kto hľadá kvalitné služby. Precízna práca, priateľský prístup, flexibilita 💯👏 Ďakujem pekne',
    },
  ],
};

export const videa = {
  nadpis: 'Chcete vidieť viac z našich prác?',
  text: 'Navštívte náš profil na Instagrame alebo Facebooku.',
  videoIds: ['WMQH1ezBIUw', 'OgvZxGccP9E', 'EuqWV0LtZ1A'],
};

export const vyber = {
  nadpis: 'Neviete, či si vybrať PPF fóliu alebo keramickú ochranu?',
  text: 'Alebo by ste chceli pre svoje auto inú ochranu? Napíšte nám, radi vám poradíme.',
  cta: 'Kontaktujte nás',
};

export const zaruka = {
  nadpis: 'ZÁRUKA KVALITY V DDELUX',
  polozky: [
    {
      titulok: 'Profesionálny prístup',
      text: 'Milujeme náročné projekty, autá a radosť majiteľov, ktorí si prídu vyzdvihnúť svoje auto po detailingu',
    },
    {
      titulok: 'Individuálne poradenstvo',
      text: 'Individuálna starostlivosť o každého zákazníka zaručí, že si majiteľ auta odnesie presne to, čo mu skutočne vyhovuje',
    },
    {
      titulok: 'Skúsenosti a precízna práca',
      text: 'Skúsený a profesionálny tím ľudí s niekoľkoročnými skúsenosťami aj na unikátnych a exotických vozidlách',
    },
  ],
  obrazok: {
    src: '/images/tim-ddelux.webp',
    alt: 'Tím detailingového štúdia DDelux',
    width: 684,
    height: 455,
  },
};

export const popup = {
  nadpis: 'Potrebujete poradiť s ochranou laku?',
  text: 'Napíšte nám a my vám odporučíme to najlepšie riešenie pre vaše auto a štýl jazdy.',
  polia: {
    meno: 'Meno',
    email: 'Email',
    telefon: 'Telefón',
    modelAuta: 'Model auta',
    sluzba: 'Vyberte si službu',
    sprava: 'Správa',
  },
  sluzbaMoznosti: ['Keramická ochrana', 'PPF fólia', 'Potrebujem poradiť'],
  gdprText: 'Súhlasím so spracovaním osobných údajov',
  odoslat: 'Odoslať',
};

export const dakujeme = {
  nadpis: 'Ďakujeme za vašu správu!',
  text: 'Vaša správa bola úspešne odoslaná. Ozveme sa vám čo najskôr.',
  tlacidlo: 'Späť na hlavnú stránku',
};
