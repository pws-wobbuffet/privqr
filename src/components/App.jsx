import React, { useState, useEffect, useRef, useMemo } from 'react';
import QRCodeStyling from 'qr-code-styling';
import Wordmark from './Wordmark';
import Icons from './Icons';
import { useTweaks, TweaksPanel, TweakSection, TweakRow, TweakRadio } from './TweaksPanel';
import { CONTENT_FORMS } from './ContentForms';
import { useI18n, LANGS } from '../lib/i18n';
import { buildPayload, buildQrOptions } from '../lib/qr-engine';

const TYPES = [
  { id: 'url',   icon: Icons.Link },
  { id: 'wifi',  icon: Icons.Wifi },
  { id: 'vcard', icon: Icons.Contact },
  { id: 'geo',   icon: Icons.Map },
  { id: 'email', icon: Icons.Mail },
  { id: 'sms',   icon: Icons.Sms },
  { id: 'tel',   icon: Icons.Phone },
];

const ACCENTS = [
  { id: 'green',  fg: '#1aa05a', dark: '#2fd47a', ink: '#06120c' },
  { id: 'violet', fg: '#7c3aed', dark: '#a78bfa', ink: '#0f0820' },
  { id: 'orange', fg: '#e85d1f', dark: '#ff7e3d', ink: '#1a0a04' },
  { id: 'amber',  fg: '#d97706', dark: '#fbbf24', ink: '#1a1004' },
  { id: 'cyan',   fg: '#0891b2', dark: '#22d3ee', ink: '#04141a' },
  { id: 'mono',   fg: '#0a0a0a', dark: '#f3efe6', ink: '#ffffff' },
];

const TWEAK_DEFAULTS = { accent: 'green', density: 'regular', radius: 'sharp', texture: 'grid' };

function ColorRow({ value, onChange, options }) {
  const inputRef = useRef(null);
  return (
    <div className="swatch-row">
      {options.map((c) => (
        <button key={c} type="button"
          className={'swatch' + (value.toLowerCase() === c.toLowerCase() ? ' active' : '')}
          style={{ background: c }} onClick={() => onChange(c)} aria-label={c} />
      ))}
      <button type="button" className="swatch custom" onClick={() => inputRef.current?.click()}
        title="Custom color" aria-label="Pick custom color">
        <input ref={inputRef} type="color" value={value} onChange={(e) => onChange(e.target.value)} />
      </button>
    </div>
  );
}

function LogoUpload({ logo, onChange, size, onSize, t }) {
  const fileRef = useRef(null);
  const pickFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => onChange(e.target.result);
    reader.readAsDataURL(file);
  };
  return (
    <div className="field" style={{ marginTop: 8 }}>
      <span className="label">{t('logo')}</span>
      {!logo ? (
        <div className="dropzone" onClick={() => fileRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); pickFile(e.dataTransfer.files[0]); }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
            <Icons.Upload size={18} />
            <div style={{ marginTop: 6 }}>{t('dropLogo')}</div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
            onChange={(e) => pickFile(e.target.files[0])} />
        </div>
      ) : (
        <>
          <div className="dropzone has-file">
            <div className="preview-img" style={{ backgroundImage: `url(${logo})` }} />
            <span className="filename">logo.{(logo.match(/\/(\w+);/) || [, 'img'])[1]}</span>
            <button className="link-btn" onClick={() => onChange(null)}>{t('remove')}</button>
          </div>
          <div style={{ marginTop: 12 }}>
            <span className="label">{t('logoSize')} — {Math.round(size * 100)}%</span>
            <input type="range" min="0.1" max="0.5" step="0.01" value={size}
              onChange={(e) => onSize(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent)' }} />
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  const { lang, setLang, t } = useI18n();
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [theme, setTheme] = useState(() => {
    const s = localStorage.getItem('privqr.theme');
    if (s) return s;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('privqr.theme', theme);
  }, [theme]);

  useEffect(() => {
    const a = ACCENTS.find((x) => x.id === tw.accent) || ACCENTS[0];
    const accent = theme === 'dark' ? a.dark : a.fg;
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-ink', a.ink);
    const padMap = { compact: '18px', regular: '24px', roomy: '32px' };
    document.documentElement.style.setProperty('--pad', padMap[tw.density] || '24px');
    document.documentElement.style.setProperty('--radius', tw.radius === 'soft' ? '10px' : '4px');
    if (tw.texture === 'solid') {
      document.body.style.backgroundImage = 'none';
    } else if (tw.texture === 'noise') {
      document.body.style.backgroundImage =
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' seed='2'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";
    } else {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '32px 32px';
    }
  }, [tw.accent, tw.density, tw.radius, tw.texture, theme]);

  const [type, setType] = useState('url');
  const [forms, setForms] = useState({
    url: { url: 'https://github.com/pws-wobbuffet/privqr' },
    wifi: { ssid: '', password: '', encryption: 'WPA', hidden: false },
    vcard: { firstName: '', lastName: '', org: '', title: '', email: '', phone: '', website: '' },
    geo: { lat: '', lon: '' },
    email: { email: '', subject: '', body: '' },
    sms: { phone: '', message: '' },
    tel: { phone: '' },
  });
  const setFormData = (patch) =>
    setForms((prev) => ({ ...prev, [type]: { ...prev[type], ...patch } }));

  const [fg, setFg] = useState('#0a0a0a');
  const [bg, setBg] = useState('#ffffff');
  const [dotStyle, setDotStyle] = useState('rounded');
  const [cornerStyle, setCornerStyle] = useState('extra-rounded');
  const [ec, setEc] = useState('Q');
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(0.25);

  const flippedRef = useRef(false);
  useEffect(() => {
    if (theme === 'dark' && !flippedRef.current && fg === '#0a0a0a' && bg === '#ffffff') {
      setFg('#f3efe6'); setBg('#14181f'); flippedRef.current = true;
    }
  }, [theme]);

  const payload = useMemo(() => buildPayload(type, forms[type]), [type, forms]);
  const qrOptions = useMemo(
    () => buildQrOptions({ payload, fg, bg, dotStyle, cornerStyle, ec, logo, logoSize }),
    [payload, fg, bg, dotStyle, cornerStyle, ec, logo, logoSize]
  );

  const qrContainer = useRef(null);
  const qrInstance = useRef(null);
  useEffect(() => {
    if (!qrContainer.current) return;
    qrInstance.current = new QRCodeStyling(qrOptions);
    qrContainer.current.innerHTML = '';
    qrInstance.current.append(qrContainer.current);
  }, []);
  useEffect(() => {
    if (qrInstance.current) qrInstance.current.update(qrOptions);
  }, [qrOptions]);

  // qr-code-styling emits SVG without a viewBox — inject it so height:auto
  // correctly preserves the 1:1 ratio at any container size.
  useEffect(() => {
    const container = qrContainer.current;
    if (!container) return;
    const patch = () => {
      const svg = container.querySelector('svg');
      if (!svg || svg.getAttribute('viewBox')) return;
      const w = svg.getAttribute('width') || '720';
      const h = svg.getAttribute('height') || '720';
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.removeAttribute('width');
      svg.removeAttribute('height');
    };
    const obs = new MutationObserver(patch);
    obs.observe(container, { childList: true, subtree: true });
    patch();
    return () => obs.disconnect();
  }, []);

  const download = (ext) => {
    if (!qrInstance.current) return;
    qrInstance.current.download({ name: `privqr-${type}-${Date.now()}`, extension: ext });
  };

  const cycleLang = () => {
    const idx = LANGS.indexOf(lang);
    setLang(LANGS[(idx + 1) % LANGS.length]);
  };

  const Form = CONTENT_FORMS[type];

  return (
    <div className="page">
      <header className="top">
        <div className="top-left">
          <Wordmark size={32} />
          <span className="badge"><span className="dot" />{t('badge')}</span>
        </div>
        <div className="top-right">
          <button className="ghost-btn" onClick={cycleLang} title="Change language">
            {lang.toUpperCase()}
          </button>
          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
            {theme === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
          </button>
          <a className="icon-btn" href="https://github.com/pws-wobbuffet/privqr"
            target="_blank" rel="noopener noreferrer" title="GitHub">
            <Icons.Github size={16} />
          </a>
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="kicker">v1.0 · {t('tagline')}</div>
          <h1>
            {t('hero1')}<br />
            {t('hero2')} <span className="em rot">{t('hero2em')}</span>
          </h1>
        </div>
        <div className="hero-side">
          <b>{t('sideline')}</b>
        </div>
      </section>

      <div className="grid">
        <div>
          <div className="card">
            <span className="card-tab num"><b>01</b> · {t('encode')}</span>
            <h2 className="section-title" style={{ marginTop: 6 }}>{t('encode')}</h2>
            <div className="section-sub">{t('encodeSub')}</div>
            <div className="type-tabs">
              {TYPES.map((T) => {
                const Ico = T.icon;
                return (
                  <button key={T.id}
                    className={'type-tab' + (type === T.id ? ' active' : '')}
                    onClick={() => setType(T.id)}>
                    <Ico size={14} /> {t('type_' + T.id)}
                  </button>
                );
              })}
            </div>
            <Form data={forms[type]} set={setFormData} t={t} />
          </div>

          <div className="card">
            <span className="card-tab num"><b>02</b> · {t('customize')}</span>
            <h2 className="section-title" style={{ marginTop: 6 }}>{t('customize')}</h2>
            <div className="section-sub">{t('customizeSub')}</div>

            <div className="field-row">
              <div className="field">
                <span className="label">{t('color')}</span>
                <ColorRow value={fg} onChange={setFg}
                  options={['#0a0a0a','#1aa05a','#7c3aed','#e85d1f','#0891b2','#d4264c']} />
              </div>
              <div className="field">
                <span className="label">{t('bg')}</span>
                <ColorRow value={bg} onChange={setBg}
                  options={['#ffffff','#f3efe6','#fef3c7','#dbeafe','#fce7f3','#0a0a0a']} />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <span className="label">{t('dotStyle')}</span>
                <select className="select" value={dotStyle} onChange={(e) => setDotStyle(e.target.value)}>
                  <option value="square">{t('dot_square')}</option>
                  <option value="rounded">{t('dot_rounded')}</option>
                  <option value="dots">{t('dot_dots')}</option>
                  <option value="classy">{t('dot_classy')}</option>
                  <option value="extra-rounded">{t('dot_extra')}</option>
                </select>
              </div>
              <div className="field">
                <span className="label">{t('cornerStyle')}</span>
                <select className="select" value={cornerStyle} onChange={(e) => setCornerStyle(e.target.value)}>
                  <option value="square">{t('corner_square')}</option>
                  <option value="dot">{t('corner_dot')}</option>
                  <option value="extra-rounded">{t('corner_extra')}</option>
                </select>
              </div>
            </div>

            <div className="field">
              <span className="label">{t('errorCorr')}</span>
              <div className="segmented">
                {['L','M','Q','H'].map((lvl) => (
                  <button key={lvl} type="button" className={ec === lvl ? 'active' : ''}
                    onClick={() => setEc(lvl)}>
                    {t('ec_' + lvl.toLowerCase())}
                  </button>
                ))}
              </div>
            </div>

            <LogoUpload logo={logo} onChange={setLogo} size={logoSize} onSize={setLogoSize} t={t} />
          </div>
        </div>

        <div>
          <div className="preview-card">
            <div className="preview-header">
              <span>◆ {t('preview')}</span>
              <span className="meta">{t('previewMeta')}</span>
            </div>
            <div className="preview-frame">
              <div className="preview-qr" ref={qrContainer} />
            </div>
            <div className="download-row">
              <button className="btn-primary" onClick={() => download('png')}>
                <Icons.Download size={16} /> {t('dlPng')}
              </button>
              <button className="btn-secondary" onClick={() => download('svg')}>
                <Icons.Download size={16} /> {t('dlSvg')}
              </button>
            </div>
            <div className="privacy-note">
              <Icons.Shield size={16} />
              <span>{t('privacyNote')}</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="bottom">
        <span>
          {t('footerLeft')} ·{' '}
          <a href="https://github.com/pws-wobbuffet/privqr" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
        <span className="marquee">{t('footerRight')}</span>
      </footer>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Look &amp; feel" />
        <TweakRadio label="Density" value={tw.density}
          options={['compact','regular','roomy']} onChange={(v) => setTweak('density', v)} />
        <TweakRadio label="Corners" value={tw.radius}
          options={['sharp','soft']} onChange={(v) => setTweak('radius', v)} />
        <TweakRadio label="Background" value={tw.texture}
          options={['solid','grid','noise']} onChange={(v) => setTweak('texture', v)} />
        <TweakSection label="Accent" />
        <TweakRadio label="Color" value={tw.accent}
          options={['green','violet','orange','amber','cyan','mono']}
          onChange={(v) => setTweak('accent', v)} />
      </TweaksPanel>
    </div>
  );
}
