export type InSuiteLocale = 'en' | 'es';

export const OFFICE_LOGO = 'https://hosted.inled.es/cdn/insuite.svg';
export const INLED_LOGO = 'https://hosted.inled.es/cdn/inled-logo-full.png';
export const ICCOUNT_LOGO = 'https://hosted.inled.es/cdn/inled-ring-v2-logo.png';

export const LEGACY_EDITORS = {
  indoc: { name: 'inDOC', icon: 'https://hosted.inled.es/INDOC.png', href: '/indoc' },
  inmd: { name: 'inMD', icon: 'https://hosted.inled.es/inMD.png', href: '/inmd' },
  mdpdf: { name: 'MDPDF', icon: 'https://hosted.inled.es/MDPDF.png', href: '/mdpdf' },
  inlinked: { name: 'inLinked', icon: 'https://hosted.inled.es/INLINKED.png', href: '/inlinked' },
  inqr: { name: 'inQR', icon: 'https://hosted.inled.es/inqr.png', href: '/inqr' },
  inx: { name: 'InX', icon: 'https://hosted-inled-es.pages.dev/inx.png', href: '/inx' },
};

const en = {
  meta: {
    title: 'InSuite | your complete Office suite, private and free',
    description:
      'Open Office files (Word, PowerPoint and Excel), PDFs and create your private forms. Use the specific editors for X, LinkedIn, Markdown...',
  },
  nav: {
    office: 'Office',
    editors: 'Editors',
    apps: 'All apps',
    inled: 'Inled',
    cta: 'Open Office',
  },
  hero: {
    eyebrow: 'The Inled office suite',
    title: 'One suite. Free, private and open. Welcome to InSuite.',
    lede: 'The complete suite: Word, PowerPoint, Excel and PDF, no login needed; and private, free Forms or our specialized editors for Markdown, X, LinkedIn or QR',
    primary: 'Open Insuite Office',
    secondary: 'Explore the editors',
    note: 'Free, open source and private by design. Your files stay on your device.',
    windowFoot: 'Free · Private · Open source',
  },
  office: {
    title: 'Insuite Office',
    sub: 'No need for Microsoft. InSuite works perfectly with Office formats.',
    leadName: 'Insuite Office',
    leadHint: 'Word, Excel, PowerPoint, CSV and PDF at office.inled.es',
    leadCta: 'Open office.inled.es',
  },
  products: {
    word: 'Word',
    wordHint: 'Documents · .docx',
    excel: 'Excel',
    excelHint: 'Spreadsheets · .xlsx',
    powerpoint: 'PowerPoint',
    powerpointHint: 'Presentations · .pptx',
    forms: 'Forms',
    formsHint: 'Surveys · forms.inled.es',
    pdf: 'PDF',
    pdfHint: 'Read, annotate, save',
  },
  account: {
    name: 'iccount',
    title: 'One account, all Inled',
    body: 'Save your forms? Use iccount! It\'s optional :)',
    cta: 'Go to iccount.inled.es',
  },
  apps: {
    title: 'More from InSuite',
    sub: 'Separate apps, same rule: nothing leaves your device.',
    mypdf: {
      name: 'MyPDF',
      domain: 'mypdf.inled.es',
      hint: 'Merge, split, rotate, OCR and protect PDFs, entirely in the browser.',
    },
    mymetadata: {
      name: 'MyMetadata',
      domain: 'mymetadata.inled.es',
      hint: 'See and erase EXIF, GPS, authorship and AI marks in photos, PDF and Office files.',
    },
  },
  editors: {
    title: 'The specific editors',
    sub: 'Single-purpose tools for the rest of the day.',
    note: 'These editors still use their own, older interface. The recommendation is to move them to the Insuite Office design, so the whole suite reads as one product.',
    open: 'Open',
  },
  legacy: [
    { ...LEGACY_EDITORS.indoc, desc: 'Rich-text editor' },
    { ...LEGACY_EDITORS.inmd, desc: 'Visual Markdown editor' },
    { ...LEGACY_EDITORS.mdpdf, desc: 'Markdown to PDF' },
    { ...LEGACY_EDITORS.inlinked, desc: 'LinkedIn post formatter' },
    { ...LEGACY_EDITORS.inqr, desc: 'QR and barcode generator' },
    { ...LEGACY_EDITORS.inx, desc: 'X / Twitter formatter' },
  ],
  why: {
    title: 'Why InSuite',
    points: [
      {
        title: 'The most private one there is',
        body: 'Because, literally (except in forms, obviously) nothing is uploaded to a server, everything is processed with the power of your browser.',
      },
      {
        title: 'Perfect, ready for you',
        body: 'Office works perfectly, forms offer the same as the big brands, plus added privacy, and the specific editors solve your work comfortably.',
      },
      {
        title: 'An optional, encrypted account',
        body: 'Forms uses iccount to encrypt your forms and their responses so that only you and the form recipients can see the messages.',
      },
    ],
  },
  footer: {
    tagline: 'The ultimate Office killer',
    suite: 'Suite',
    editors: 'Specific editors',
    inled: 'Inled',
    office: 'Insuite Office',
    forms: 'Forms',
    account: 'iccount',
    allApps: 'All apps',
    help: 'Help centre',
    site: 'inled.es',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    rights: 'Licensed under MIT-INLED, see license.inled.es for more information.',
    inledProduct: 'An Inled Group product',
  },
};

const es: typeof en = {
  meta: {
    title: 'InSuite | tu OFFICE completo, privado y gratuito',
    description:
      'Abre archivos Office (Word, Powerpoint y Excel), PDFs y crea tus formularios privados. Usa los editores especificos para X, Linkedin, Markdown...',
  },
  nav: {
    office: 'Office',
    editors: 'Editores',
    apps: 'Todas las apps',
    inled: 'Inled',
    cta: 'Abrir Office',
  },
  hero: {
    eyebrow: 'La suite ofimática de Inled',
    title: 'Una, gratis, privada y libre. Bienvenido a InSuite.',
    lede: 'La suite completa: Word, Powerpoint, Excel y PDF, sin iniciar sesión; y Forms privados y gratuitos o nuestros editores eespecializados para Markdown, X, LinkedIN o qr',
    primary: 'Abrir Insuite Office',
    secondary: 'Ver los editores',
    note: 'Gratis, de código abierto y privada por diseño. Tus archivos se quedan en tu dispositivo.',
    windowFoot: 'Gratis · Privada · Código abierto',
  },
  office: {
    title: 'Insuite Office',
    sub: 'No dependas de Microsoft. InSuite funciona a la perfeccion con los formatos Office.',
    leadName: 'Insuite Office',
    leadHint: 'Word, Excel, PowerPoint, CSV y PDF en office.inled.es',
    leadCta: 'Abrir office.inled.es',
  },
  products: {
    word: 'Word',
    wordHint: 'Documentos · .docx',
    excel: 'Excel',
    excelHint: 'Hojas de cálculo · .xlsx',
    powerpoint: 'PowerPoint',
    powerpointHint: 'Presentaciones · .pptx',
    forms: 'Forms',
    formsHint: 'Encuestas · forms.inled.es',
    pdf: 'PDF',
    pdfHint: 'Leer, anotar, guardar',
  },
  account: {
    name: 'iccount',
    title: 'Una cuenta, todo Inled',
    body: 'Guardar tus formularios? Usa iccount! Es opcional :)',
    cta: 'Ir a iccount.inled.es',
  },
  apps: {
    title: 'Más de InSuite',
    sub: 'Apps aparte, la misma regla: nada sale de tu dispositivo.',
    mypdf: {
      name: 'MyPDF',
      domain: 'mypdf.inled.es',
      hint: 'Unir, dividir, girar, OCR y proteger PDF, todo dentro del navegador.',
    },
    mymetadata: {
      name: 'MyMetadata',
      domain: 'mymetadata.inled.es',
      hint: 'Ver y borrar EXIF, GPS, autoría y marcas de IA en fotos, PDF y archivos de Office.',
    },
  },
  editors: {
    title: 'Los editores específicos',
    sub: 'Herramientas concretas para el resto del día.',
    note: 'Estos editores todavía usan su propia interfaz, más antigua. La recomendación es llevarlos al diseño de Insuite Office para que toda la suite se lea como un solo producto.',
    open: 'Abrir',
  },
  legacy: [
    { ...LEGACY_EDITORS.indoc, desc: 'Editor de texto enriquecido' },
    { ...LEGACY_EDITORS.inmd, desc: 'Editor visual de Markdown' },
    { ...LEGACY_EDITORS.mdpdf, desc: 'Markdown a PDF' },
    { ...LEGACY_EDITORS.inlinked, desc: 'Formateador de posts de LinkedIn' },
    { ...LEGACY_EDITORS.inqr, desc: 'Generador de QR y códigos de barras' },
    { ...LEGACY_EDITORS.inx, desc: 'Formateador para X / Twitter' },
  ],
  why: {
    title: 'Por qué InSuite',
    points: [
      {
        title: 'La más privada que existe',
        body: 'Por que, literalmente (excepto en los forms, obvio) NO se sube nada a un servidor, todo se procesa con la potencia de tu navegador.',
      },
      {
        title: 'Perfecta, lista para ti',
        body: 'Office funciona a la perfeccion, los formularios ofrecen lo mismo que las grandes marcas, mas privacidad añadida y los editores especificos te resuelven el trabajo comodamente.',
      },
      {
        title: 'Una cuenta opcional, encriptada',
        body: 'Forms usa iccount para encriptar tus formularios y sus respuestas para que solo tu y los destinatarios del formulario vean los mensajes.',
      },
    ],
  },
  footer: {
    tagline: 'El killer definitivo de office',
    suite: 'Suite',
    editors: 'Editores específicos',
    inled: 'Inled',
    office: 'Insuite Office',
    forms: 'Forms',
    account: 'iccount',
    allApps: 'Todas las apps',
    help: 'Centro de ayuda',
    site: 'inled.es',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    cookies: 'Política de Cookies',
    rights: 'Licenciado bajo MIT-INLED, lea license.inled.es para mas informacion.',
    inledProduct: 'Un producto de Inled Group',
  },
};

export const INSUITE_COPY: Record<InSuiteLocale, typeof en> = { en, es };

/** English is the default (root); Spanish lives at `/es/`. */
export function landingPath(locale: InSuiteLocale): string {
  return locale === 'es' ? '/es/' : '/';
}

/** The Office landing page, in the visitor's language. */
export function officeHome(locale: InSuiteLocale): string {
  return locale === 'es' ? 'https://office.inled.es/es' : 'https://office.inled.es/';
}

/** An office.inled.es editor URL that opens in the visitor's language. */
export function officeEditor(locale: InSuiteLocale, query: string): string {
  const suffix = locale === 'es' ? `${query ? '&' : '?'}locale=es` : '';
  return `https://office.inled.es/editor${query}${suffix}`;
}
