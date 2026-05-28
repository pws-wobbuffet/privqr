export function buildPayload(type, data) {
  switch (type) {
    case 'url': return (data.url || '').trim();
    case 'wifi': {
      const enc = data.encryption || 'WPA';
      const ssid = (data.ssid || '').replace(/([\\;,":])/g, '\\$1');
      const pw = (data.password || '').replace(/([\\;,":])/g, '\\$1');
      const hidden = data.hidden ? 'true' : 'false';
      if (enc === 'nopass') return `WIFI:T:nopass;S:${ssid};H:${hidden};;`;
      return `WIFI:T:${enc};S:${ssid};P:${pw};H:${hidden};;`;
    }
    case 'vcard': {
      const lines = [
        'BEGIN:VCARD', 'VERSION:3.0',
        `N:${data.lastName || ''};${data.firstName || ''}`,
        `FN:${[data.firstName, data.lastName].filter(Boolean).join(' ')}`,
        data.org ? `ORG:${data.org}` : null,
        data.title ? `TITLE:${data.title}` : null,
        data.email ? `EMAIL:${data.email}` : null,
        data.phone ? `TEL:${data.phone}` : null,
        data.website ? `URL:${data.website}` : null,
        'END:VCARD',
      ].filter(Boolean);
      return lines.join('\n');
    }
    case 'geo': return `geo:${data.lat || 0},${data.lon || 0}`;
    case 'email':
      return `mailto:${data.email || ''}?subject=${encodeURIComponent(data.subject || '')}&body=${encodeURIComponent(data.body || '')}`;
    case 'sms': return `SMSTO:${data.phone || ''}:${data.message || ''}`;
    case 'tel': return `tel:${data.phone || ''}`;
    default: return '';
  }
}

export function buildQrOptions({ payload, fg, bg, dotStyle, cornerStyle, ec, logo, logoSize }) {
  return {
    width: 720, height: 720, type: 'svg',
    data: payload || ' ',
    margin: 12,
    qrOptions: { errorCorrectionLevel: ec || 'Q' },
    dotsOptions: { color: fg, type: dotStyle || 'rounded' },
    backgroundOptions: { color: bg },
    cornersSquareOptions: { color: fg, type: cornerStyle || 'extra-rounded' },
    cornersDotOptions: { color: fg, type: cornerStyle === 'dot' ? 'dot' : 'square' },
    image: logo || undefined,
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: logoSize ?? 0.25,
      margin: 4,
      crossOrigin: 'anonymous',
    },
  };
}
