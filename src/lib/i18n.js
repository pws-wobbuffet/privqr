import { useState, useEffect } from 'react';

export const LANGS = ['en', 'es', 'pt', 'fr'];

export const STRINGS = {
  en: {
    tagline: 'QR codes that never leave your browser.',
    hero1: 'MAKE A QR.', hero2: 'STAY', hero2em: 'PRIVATE.',
    sideline: '100% browser-side. No tracking. No server. No spying. Just bits.',
    badge: 'Offline-ready',
    encode: 'WHAT TO ENCODE', encodeSub: 'Pick a content type below',
    customize: 'MAKE IT YOURS', customizeSub: 'Style your QR however you like',
    preview: 'LIVE PREVIEW', previewMeta: 'regenerates as you type',
    color: 'Foreground', bg: 'Background',
    dotStyle: 'Dot style', cornerStyle: 'Corner style', errorCorr: 'Error correction',
    logo: 'Logo (optional)', logoSize: 'Logo size',
    dropLogo: 'Drop a PNG/SVG · or click to pick', remove: 'Remove',
    dlPng: 'Download PNG', dlSvg: 'Download SVG',
    privacyNote: 'Everything happens in this page. Pull the network plug — it still works.',
    footerLeft: 'Made for humans · Open source · MIT', footerRight: 'No servers harmed.',
    type_url: 'URL / Text', type_wifi: 'Wi-Fi', type_vcard: 'Contact',
    type_geo: 'Location', type_email: 'Email', type_sms: 'SMS', type_tel: 'Phone',
    label_url: 'URL or text', label_ssid: 'Network name (SSID)', label_password: 'Password',
    label_encryption: 'Encryption', label_hidden: 'Hidden network',
    label_firstName: 'First name', label_lastName: 'Last name',
    label_org: 'Organization', label_title: 'Job title',
    label_email: 'Email', label_phone: 'Phone', label_website: 'Website',
    label_lat: 'Latitude', label_lon: 'Longitude',
    label_subject: 'Subject', label_body: 'Body', label_message: 'Message',
    yes: 'Yes', no: 'No',
    dot_square: 'Square', dot_rounded: 'Rounded', dot_dots: 'Dots',
    dot_classy: 'Classy', dot_extra: 'Extra rounded',
    corner_square: 'Square', corner_dot: 'Dot', corner_extra: 'Extra rounded',
    ec_l: 'L · 7%', ec_m: 'M · 15%', ec_q: 'Q · 25%', ec_h: 'H · 30%',
  },
  es: {
    tagline: 'Códigos QR que nunca salen de tu navegador.',
    hero1: 'HAZ UN QR.', hero2: 'MANTENLO', hero2em: 'PRIVADO.',
    sideline: '100% en tu navegador. Sin tracking. Sin servidor. Sin espionaje. Solo bits.',
    badge: 'Funciona offline',
    encode: 'QUÉ CODIFICAR', encodeSub: 'Elige un tipo de contenido',
    customize: 'PERSONALÍZALO', customizeSub: 'Dale el estilo que quieras',
    preview: 'VISTA EN VIVO', previewMeta: 'se regenera al escribir',
    color: 'Color principal', bg: 'Fondo',
    dotStyle: 'Estilo de puntos', cornerStyle: 'Estilo de esquinas', errorCorr: 'Corrección de errores',
    logo: 'Logo (opcional)', logoSize: 'Tamaño del logo',
    dropLogo: 'Suelta un PNG/SVG · o haz clic', remove: 'Quitar',
    dlPng: 'Descargar PNG', dlSvg: 'Descargar SVG',
    privacyNote: 'Todo ocurre en esta página. Desconecta la red — sigue funcionando.',
    footerLeft: 'Hecho para humanos · Código abierto · MIT', footerRight: 'Ningún servidor fue dañado.',
    type_url: 'URL / Texto', type_wifi: 'Wi-Fi', type_vcard: 'Contacto',
    type_geo: 'Ubicación', type_email: 'Email', type_sms: 'SMS', type_tel: 'Teléfono',
    label_url: 'URL o texto', label_ssid: 'Nombre de red (SSID)', label_password: 'Contraseña',
    label_encryption: 'Cifrado', label_hidden: 'Red oculta',
    label_firstName: 'Nombre', label_lastName: 'Apellido',
    label_org: 'Organización', label_title: 'Cargo',
    label_email: 'Email', label_phone: 'Teléfono', label_website: 'Sitio web',
    label_lat: 'Latitud', label_lon: 'Longitud',
    label_subject: 'Asunto', label_body: 'Cuerpo', label_message: 'Mensaje',
    yes: 'Sí', no: 'No',
    dot_square: 'Cuadrado', dot_rounded: 'Redondeado', dot_dots: 'Puntos',
    dot_classy: 'Elegante', dot_extra: 'Extra redondeado',
    corner_square: 'Cuadrado', corner_dot: 'Punto', corner_extra: 'Extra redondeado',
    ec_l: 'L · 7%', ec_m: 'M · 15%', ec_q: 'Q · 25%', ec_h: 'H · 30%',
  },
  pt: {
    tagline: 'Códigos QR que nunca saem do seu navegador.',
    hero1: 'CRIE UM QR.', hero2: 'MANTENHA', hero2em: 'PRIVADO.',
    sideline: '100% no navegador. Sem rastreamento. Sem servidor. Só bits.',
    badge: 'Funciona offline',
    encode: 'O QUE CODIFICAR', encodeSub: 'Escolha um tipo de conteúdo',
    customize: 'PERSONALIZE', customizeSub: 'Estilize seu QR como quiser',
    preview: 'PRÉ-VISUALIZAÇÃO', previewMeta: 'regenera enquanto digita',
    color: 'Cor principal', bg: 'Fundo',
    dotStyle: 'Estilo dos pontos', cornerStyle: 'Estilo dos cantos', errorCorr: 'Correção de erros',
    logo: 'Logo (opcional)', logoSize: 'Tamanho do logo',
    dropLogo: 'Solte um PNG/SVG · ou clique', remove: 'Remover',
    dlPng: 'Baixar PNG', dlSvg: 'Baixar SVG',
    privacyNote: 'Tudo acontece nesta página. Desconecte a rede — continua funcionando.',
    footerLeft: 'Feito para humanos · Código aberto · MIT', footerRight: 'Nenhum servidor foi prejudicado.',
    type_url: 'URL / Texto', type_wifi: 'Wi-Fi', type_vcard: 'Contato',
    type_geo: 'Localização', type_email: 'Email', type_sms: 'SMS', type_tel: 'Telefone',
    label_url: 'URL ou texto', label_ssid: 'Nome da rede (SSID)', label_password: 'Senha',
    label_encryption: 'Criptografia', label_hidden: 'Rede oculta',
    label_firstName: 'Nome', label_lastName: 'Sobrenome',
    label_org: 'Empresa', label_title: 'Cargo',
    label_email: 'Email', label_phone: 'Telefone', label_website: 'Site',
    label_lat: 'Latitude', label_lon: 'Longitude',
    label_subject: 'Assunto', label_body: 'Mensagem', label_message: 'Mensagem',
    yes: 'Sim', no: 'Não',
    dot_square: 'Quadrado', dot_rounded: 'Arredondado', dot_dots: 'Pontos',
    dot_classy: 'Elegante', dot_extra: 'Extra arredondado',
    corner_square: 'Quadrado', corner_dot: 'Ponto', corner_extra: 'Extra arredondado',
    ec_l: 'L · 7%', ec_m: 'M · 15%', ec_q: 'Q · 25%', ec_h: 'H · 30%',
  },
  fr: {
    tagline: 'Des QR codes qui ne quittent jamais votre navigateur.',
    hero1: 'FAITES UN QR.', hero2: 'RESTEZ', hero2em: 'PRIVÉ.',
    sideline: '100% côté navigateur. Sans tracking. Sans serveur. Juste des bits.',
    badge: 'Hors connexion',
    encode: 'QUE CODER', encodeSub: 'Choisissez un type de contenu',
    customize: 'PERSONNALISEZ', customizeSub: 'Stylez votre QR comme vous voulez',
    preview: 'APERÇU EN DIRECT', previewMeta: 'se régénère en tapant',
    color: 'Couleur principale', bg: 'Arrière-plan',
    dotStyle: 'Style des points', cornerStyle: 'Style des coins', errorCorr: "Correction d'erreurs",
    logo: 'Logo (optionnel)', logoSize: 'Taille du logo',
    dropLogo: 'Déposez un PNG/SVG · ou cliquez', remove: 'Retirer',
    dlPng: 'Télécharger PNG', dlSvg: 'Télécharger SVG',
    privacyNote: 'Tout se passe sur cette page. Coupez le réseau — ça marche toujours.',
    footerLeft: 'Fait pour les humains · Open source · MIT', footerRight: "Aucun serveur n'a été blessé.",
    type_url: 'URL / Texte', type_wifi: 'Wi-Fi', type_vcard: 'Contact',
    type_geo: 'Localisation', type_email: 'Email', type_sms: 'SMS', type_tel: 'Téléphone',
    label_url: 'URL ou texte', label_ssid: 'Nom du réseau (SSID)', label_password: 'Mot de passe',
    label_encryption: 'Chiffrement', label_hidden: 'Réseau caché',
    label_firstName: 'Prénom', label_lastName: 'Nom',
    label_org: 'Organisation', label_title: 'Poste',
    label_email: 'Email', label_phone: 'Téléphone', label_website: 'Site web',
    label_lat: 'Latitude', label_lon: 'Longitude',
    label_subject: 'Sujet', label_body: 'Corps', label_message: 'Message',
    yes: 'Oui', no: 'Non',
    dot_square: 'Carré', dot_rounded: 'Arrondi', dot_dots: 'Points',
    dot_classy: 'Élégant', dot_extra: 'Extra arrondi',
    corner_square: 'Carré', corner_dot: 'Point', corner_extra: 'Extra arrondi',
    ec_l: 'L · 7%', ec_m: 'M · 15%', ec_q: 'Q · 25%', ec_h: 'H · 30%',
  },
};

export function detectLang() {
  const stored = localStorage.getItem('privqr.lang');
  if (stored && STRINGS[stored]) return stored;
  const b = (navigator.language || 'en').toLowerCase();
  if (b.startsWith('es')) return 'es';
  if (b.startsWith('pt')) return 'pt';
  if (b.startsWith('fr')) return 'fr';
  return 'en';
}

export function useI18n() {
  const [lang, setLang] = useState(detectLang);
  useEffect(() => {
    localStorage.setItem('privqr.lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (key) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
  return { lang, setLang, t };
}
