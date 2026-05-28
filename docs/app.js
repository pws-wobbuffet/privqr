import QRCodeStyling from "https://cdn.jsdelivr.net/npm/qr-code-styling@1.6.0-rc.1/+esm";

const PLACEHOLDER = "https://github.com/pws-wobbuffet/privqr";

const I18N = {
  en: {
    "brand.tag": "QR codes that never leave your browser",
    "lang.label": "Language",
    "content.title": "What do you want to encode?",
    "tab.url": "URL / Text",
    "tab.wifi": "WiFi",
    "tab.vcard": "Contact",
    "tab.geo": "Location",
    "tab.email": "Email",
    "tab.sms": "SMS",
    "tab.phone": "Phone",
    "form.url.value": "URL or text",
    "form.wifi.ssid": "Network name (SSID)",
    "form.wifi.password": "Password",
    "form.wifi.encryption": "Encryption",
    "form.wifi.nopass": "None (open)",
    "form.wifi.hidden": "Hidden network",
    "form.vcard.firstname": "First name",
    "form.vcard.lastname": "Last name",
    "form.vcard.org": "Organization",
    "form.vcard.title": "Job title",
    "form.vcard.phone": "Phone",
    "form.vcard.email": "Email",
    "form.vcard.url": "Website",
    "form.geo.lat": "Latitude",
    "form.geo.lng": "Longitude",
    "form.geo.hint": "Tip: in Google Maps, right-click a point to copy the coordinates.",
    "form.email.to": "Recipient",
    "form.email.subject": "Subject",
    "form.email.body": "Body",
    "form.sms.number": "Phone number",
    "form.sms.body": "Message",
    "form.phone.number": "Phone number",
    "style.title": "Make it yours",
    "style.fg": "Foreground",
    "style.bg": "Background",
    "style.dots": "Dot style",
    "style.corners": "Corner style",
    "style.ecl": "Error correction",
    "style.logo": "Logo (optional)",
    "style.logoClear": "Clear",
    "style.logoSize": "Logo size",
    "preview.title": "Preview",
    "preview.downloadPng": "Download PNG",
    "preview.downloadSvg": "Download SVG",
    "preview.privacy": "Everything happens on this page. Disconnect from the internet, and it still works.",
    "footer.made": "Made by",
    "footer.source": "Source on GitHub",
  },
  es: {
    "brand.tag": "Códigos QR que nunca salen de tu navegador",
    "lang.label": "Idioma",
    "content.title": "¿Qué quieres codificar?",
    "tab.url": "URL / Texto",
    "tab.wifi": "WiFi",
    "tab.vcard": "Contacto",
    "tab.geo": "Ubicación",
    "tab.email": "Email",
    "tab.sms": "SMS",
    "tab.phone": "Teléfono",
    "form.url.value": "URL o texto",
    "form.wifi.ssid": "Nombre de red (SSID)",
    "form.wifi.password": "Contraseña",
    "form.wifi.encryption": "Cifrado",
    "form.wifi.nopass": "Ninguno (abierta)",
    "form.wifi.hidden": "Red oculta",
    "form.vcard.firstname": "Nombre",
    "form.vcard.lastname": "Apellido",
    "form.vcard.org": "Organización",
    "form.vcard.title": "Cargo",
    "form.vcard.phone": "Teléfono",
    "form.vcard.email": "Email",
    "form.vcard.url": "Sitio web",
    "form.geo.lat": "Latitud",
    "form.geo.lng": "Longitud",
    "form.geo.hint": "Truco: en Google Maps, haz clic derecho en un punto para copiar las coordenadas.",
    "form.email.to": "Destinatario",
    "form.email.subject": "Asunto",
    "form.email.body": "Mensaje",
    "form.sms.number": "Número de teléfono",
    "form.sms.body": "Mensaje",
    "form.phone.number": "Número de teléfono",
    "style.title": "Personalízalo",
    "style.fg": "Color principal",
    "style.bg": "Fondo",
    "style.dots": "Estilo de puntos",
    "style.corners": "Estilo de esquinas",
    "style.ecl": "Corrección de errores",
    "style.logo": "Logo (opcional)",
    "style.logoClear": "Quitar",
    "style.logoSize": "Tamaño del logo",
    "preview.title": "Vista previa",
    "preview.downloadPng": "Descargar PNG",
    "preview.downloadSvg": "Descargar SVG",
    "preview.privacy": "Todo ocurre en esta página. Desconéctate de internet y seguirá funcionando.",
    "footer.made": "Hecho por",
    "footer.source": "Código en GitHub",
  },
  pt: {
    "brand.tag": "QR codes que nunca saem do seu navegador",
    "lang.label": "Idioma",
    "content.title": "O que você quer codificar?",
    "tab.url": "URL / Texto",
    "tab.wifi": "WiFi",
    "tab.vcard": "Contato",
    "tab.geo": "Localização",
    "tab.email": "Email",
    "tab.sms": "SMS",
    "tab.phone": "Telefone",
    "form.url.value": "URL ou texto",
    "form.wifi.ssid": "Nome da rede (SSID)",
    "form.wifi.password": "Senha",
    "form.wifi.encryption": "Criptografia",
    "form.wifi.nopass": "Nenhuma (aberta)",
    "form.wifi.hidden": "Rede oculta",
    "form.vcard.firstname": "Nome",
    "form.vcard.lastname": "Sobrenome",
    "form.vcard.org": "Empresa",
    "form.vcard.title": "Cargo",
    "form.vcard.phone": "Telefone",
    "form.vcard.email": "Email",
    "form.vcard.url": "Site",
    "form.geo.lat": "Latitude",
    "form.geo.lng": "Longitude",
    "form.geo.hint": "Dica: no Google Maps, clique com o botão direito num ponto para copiar as coordenadas.",
    "form.email.to": "Destinatário",
    "form.email.subject": "Assunto",
    "form.email.body": "Mensagem",
    "form.sms.number": "Número de telefone",
    "form.sms.body": "Mensagem",
    "form.phone.number": "Número de telefone",
    "style.title": "Personalize",
    "style.fg": "Cor principal",
    "style.bg": "Fundo",
    "style.dots": "Estilo dos pontos",
    "style.corners": "Estilo dos cantos",
    "style.ecl": "Correção de erros",
    "style.logo": "Logo (opcional)",
    "style.logoClear": "Remover",
    "style.logoSize": "Tamanho do logo",
    "preview.title": "Pré-visualização",
    "preview.downloadPng": "Baixar PNG",
    "preview.downloadSvg": "Baixar SVG",
    "preview.privacy": "Tudo acontece nesta página. Desconecte-se da internet e continua funcionando.",
    "footer.made": "Feito por",
    "footer.source": "Código no GitHub",
  },
  fr: {
    "brand.tag": "Des QR codes qui ne quittent jamais votre navigateur",
    "lang.label": "Langue",
    "content.title": "Que voulez-vous encoder ?",
    "tab.url": "URL / Texte",
    "tab.wifi": "WiFi",
    "tab.vcard": "Contact",
    "tab.geo": "Localisation",
    "tab.email": "Email",
    "tab.sms": "SMS",
    "tab.phone": "Téléphone",
    "form.url.value": "URL ou texte",
    "form.wifi.ssid": "Nom du réseau (SSID)",
    "form.wifi.password": "Mot de passe",
    "form.wifi.encryption": "Chiffrement",
    "form.wifi.nopass": "Aucun (ouvert)",
    "form.wifi.hidden": "Réseau caché",
    "form.vcard.firstname": "Prénom",
    "form.vcard.lastname": "Nom",
    "form.vcard.org": "Organisation",
    "form.vcard.title": "Poste",
    "form.vcard.phone": "Téléphone",
    "form.vcard.email": "Email",
    "form.vcard.url": "Site web",
    "form.geo.lat": "Latitude",
    "form.geo.lng": "Longitude",
    "form.geo.hint": "Astuce : dans Google Maps, faites un clic droit sur un point pour copier les coordonnées.",
    "form.email.to": "Destinataire",
    "form.email.subject": "Sujet",
    "form.email.body": "Message",
    "form.sms.number": "Numéro de téléphone",
    "form.sms.body": "Message",
    "form.phone.number": "Numéro de téléphone",
    "style.title": "Personnalisez",
    "style.fg": "Couleur principale",
    "style.bg": "Arrière-plan",
    "style.dots": "Style des points",
    "style.corners": "Style des coins",
    "style.ecl": "Correction d'erreurs",
    "style.logo": "Logo (optionnel)",
    "style.logoClear": "Retirer",
    "style.logoSize": "Taille du logo",
    "preview.title": "Aperçu",
    "preview.downloadPng": "Télécharger PNG",
    "preview.downloadSvg": "Télécharger SVG",
    "preview.privacy": "Tout se passe sur cette page. Déconnectez-vous d'internet, ça marche toujours.",
    "footer.made": "Fait par",
    "footer.source": "Code sur GitHub",
  },
};

function detectLang() {
  const stored = localStorage.getItem("privqr.lang");
  if (stored && I18N[stored]) return stored;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : "en";
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  }
  document.title = `privqr — ${dict["brand.tag"]}`;
}

const escapeWifi = (s) => (s || "").replace(/([\\;,":])/g, "\\$1");

const ENCODERS = {
  url: ({ value }) => (value || "").trim(),

  wifi: ({ ssid, password, encryption, hidden }) => {
    if (!ssid) return "";
    const parts = [`T:${encryption || "nopass"}`, `S:${escapeWifi(ssid)}`];
    if (encryption !== "nopass") parts.push(`P:${escapeWifi(password)}`);
    if (hidden) parts.push("H:true");
    return `WIFI:${parts.join(";")};;`;
  },

  vcard: ({ firstname, lastname, org, title, phone, email, url }) => {
    const fullname = [firstname, lastname].filter(Boolean).join(" ");
    if (!fullname && !phone && !email) return "";
    const lines = ["BEGIN:VCARD", "VERSION:3.0"];
    if (lastname || firstname) lines.push(`N:${lastname || ""};${firstname || ""};;;`);
    if (fullname) lines.push(`FN:${fullname}`);
    if (org) lines.push(`ORG:${org}`);
    if (title) lines.push(`TITLE:${title}`);
    if (phone) lines.push(`TEL:${phone}`);
    if (email) lines.push(`EMAIL:${email}`);
    if (url) lines.push(`URL:${url}`);
    lines.push("END:VCARD");
    return lines.join("\n");
  },

  geo: ({ lat, lng }) => {
    if (lat === "" || lng === "" || lat == null || lng == null) return "";
    return `geo:${lat},${lng}`;
  },

  email: ({ to, subject, body }) => {
    if (!to) return "";
    const params = [];
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
    if (body) params.push(`body=${encodeURIComponent(body)}`);
    return `mailto:${to}${params.length ? `?${params.join("&")}` : ""}`;
  },

  sms: ({ number, body }) => {
    if (!number) return "";
    const clean = number.replace(/[\s()-]/g, "");
    return `sms:${clean}${body ? `?body=${encodeURIComponent(body)}` : ""}`;
  },

  phone: ({ number }) => {
    if (!number) return "";
    return `tel:${number.replace(/[\s()-]/g, "")}`;
  },
};

const state = {
  tab: "url",
  forms: {
    url: { value: "" },
    wifi: { ssid: "", password: "", encryption: "WPA", hidden: false },
    vcard: { firstname: "", lastname: "", org: "", title: "", phone: "", email: "", url: "" },
    geo: { lat: "", lng: "" },
    email: { to: "", subject: "", body: "" },
    sms: { number: "", body: "" },
    phone: { number: "" },
  },
  style: {
    fg: "#0b0d12",
    bg: "#ffffff",
    dotStyle: "rounded",
    cornerStyle: "extra-rounded",
    ecl: "Q",
    logoData: "",
    logoSize: 25,
  },
};

function currentData() {
  const out = ENCODERS[state.tab](state.forms[state.tab]);
  return out || PLACEHOLDER;
}

function qrOptions() {
  const s = state.style;
  return {
    width: 320,
    height: 320,
    type: "canvas",
    data: currentData(),
    margin: 8,
    image: s.logoData || "",
    dotsOptions: { color: s.fg, type: s.dotStyle },
    backgroundOptions: { color: s.bg },
    cornersSquareOptions: { color: s.fg, type: s.cornerStyle },
    cornersDotOptions: { color: s.fg },
    imageOptions: {
      imageSize: s.logoSize / 100,
      margin: 4,
      hideBackgroundDots: true,
      crossOrigin: "anonymous",
    },
    qrOptions: { errorCorrectionLevel: s.ecl },
  };
}

const qrContainer = document.getElementById("qr");
const qr = new QRCodeStyling(qrOptions());
qr.append(qrContainer);

function render() {
  qr.update(qrOptions());
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;
    document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === btn));
    document
      .querySelectorAll(".form")
      .forEach((f) => f.classList.toggle("active", f.dataset.form === target));
    state.tab = target;
    render();
  });
});

document.querySelectorAll(".form").forEach((form) => {
  const name = form.dataset.form;
  const handle = () => {
    const data = state.forms[name];
    for (const el of form.elements) {
      if (!el.name) continue;
      data[el.name] = el.type === "checkbox" ? el.checked : el.value;
    }
    render();
  };
  form.addEventListener("input", handle);
  form.addEventListener("change", handle);
});

const $ = (id) => document.getElementById(id);

$("fg").addEventListener("input", (e) => {
  state.style.fg = e.target.value;
  render();
});
$("bg").addEventListener("input", (e) => {
  state.style.bg = e.target.value;
  render();
});
$("dotStyle").addEventListener("change", (e) => {
  state.style.dotStyle = e.target.value;
  render();
});
$("cornerStyle").addEventListener("change", (e) => {
  state.style.cornerStyle = e.target.value;
  render();
});
$("ecl").addEventListener("change", (e) => {
  state.style.ecl = e.target.value;
  render();
});

const logoInput = $("logo");
const logoSizeInput = $("logoSize");
const logoSizeOut = $("logoSizeOut");

logoInput.addEventListener("change", () => {
  const file = logoInput.files?.[0];
  if (!file) {
    state.style.logoData = "";
    render();
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    state.style.logoData = reader.result;
    render();
  };
  reader.readAsDataURL(file);
});

$("logoClear").addEventListener("click", () => {
  logoInput.value = "";
  state.style.logoData = "";
  render();
});

logoSizeInput.addEventListener("input", () => {
  state.style.logoSize = +logoSizeInput.value;
  logoSizeOut.textContent = `${logoSizeInput.value}%`;
  render();
});

$("downloadPng").addEventListener("click", () => {
  qr.download({ name: "privqr", extension: "png" });
});
$("downloadSvg").addEventListener("click", () => {
  qr.download({ name: "privqr", extension: "svg" });
});

const langSelect = $("lang");
function setLang(lang) {
  if (!I18N[lang]) lang = "en";
  langSelect.value = lang;
  applyI18n(lang);
  localStorage.setItem("privqr.lang", lang);
}
langSelect.addEventListener("change", () => setLang(langSelect.value));
setLang(detectLang());
