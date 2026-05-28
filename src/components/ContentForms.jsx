import React from 'react';

function Field({ label, children }) {
  return (
    <label className="field">
      <span className="label">{label}</span>
      {children}
    </label>
  );
}

function URLForm({ data, set, t }) {
  return (
    <Field label={t('label_url')}>
      <textarea className="textarea" value={data.url || ''}
        placeholder="https://example.com  ·  or any text"
        onChange={(e) => set({ url: e.target.value })} />
    </Field>
  );
}

function WifiForm({ data, set, t }) {
  return (
    <>
      <Field label={t('label_ssid')}>
        <input className="input" value={data.ssid || ''} placeholder="MyNetwork"
          onChange={(e) => set({ ssid: e.target.value })} />
      </Field>
      <div className="field-row">
        <Field label={t('label_password')}>
          <input className="input" type="text" value={data.password || ''} placeholder="••••••••"
            onChange={(e) => set({ password: e.target.value })} />
        </Field>
        <Field label={t('label_encryption')}>
          <select className="select" value={data.encryption || 'WPA'}
            onChange={(e) => set({ encryption: e.target.value })}>
            <option value="WPA">WPA / WPA2 / WPA3</option>
            <option value="WEP">WEP</option>
            <option value="nopass">None</option>
          </select>
        </Field>
      </div>
      <Field label={t('label_hidden')}>
        <div className="segmented" style={{ maxWidth: 220 }}>
          <button type="button" className={!data.hidden ? 'active' : ''}
            onClick={() => set({ hidden: false })}>{t('no')}</button>
          <button type="button" className={data.hidden ? 'active' : ''}
            onClick={() => set({ hidden: true })}>{t('yes')}</button>
        </div>
      </Field>
    </>
  );
}

function VcardForm({ data, set, t }) {
  const upd = (k) => (e) => set({ [k]: e.target.value });
  return (
    <>
      <div className="field-row">
        <Field label={t('label_firstName')}><input className="input" value={data.firstName || ''} onChange={upd('firstName')} /></Field>
        <Field label={t('label_lastName')}><input className="input" value={data.lastName || ''} onChange={upd('lastName')} /></Field>
      </div>
      <div className="field-row">
        <Field label={t('label_org')}><input className="input" value={data.org || ''} onChange={upd('org')} /></Field>
        <Field label={t('label_title')}><input className="input" value={data.title || ''} onChange={upd('title')} /></Field>
      </div>
      <div className="field-row">
        <Field label={t('label_email')}><input className="input" type="email" value={data.email || ''} onChange={upd('email')} /></Field>
        <Field label={t('label_phone')}><input className="input" type="tel" value={data.phone || ''} onChange={upd('phone')} /></Field>
      </div>
      <Field label={t('label_website')}><input className="input" type="url" value={data.website || ''} onChange={upd('website')} /></Field>
    </>
  );
}

function GeoForm({ data, set, t }) {
  return (
    <div className="field-row">
      <Field label={t('label_lat')}>
        <input className="input" type="number" step="any" value={data.lat || ''}
          placeholder="40.4168" onChange={(e) => set({ lat: e.target.value })} />
      </Field>
      <Field label={t('label_lon')}>
        <input className="input" type="number" step="any" value={data.lon || ''}
          placeholder="-3.7038" onChange={(e) => set({ lon: e.target.value })} />
      </Field>
    </div>
  );
}

function EmailForm({ data, set, t }) {
  return (
    <>
      <Field label={t('label_email')}>
        <input className="input" type="email" value={data.email || ''} placeholder="someone@example.com"
          onChange={(e) => set({ email: e.target.value })} />
      </Field>
      <Field label={t('label_subject')}>
        <input className="input" value={data.subject || ''} onChange={(e) => set({ subject: e.target.value })} />
      </Field>
      <Field label={t('label_body')}>
        <textarea className="textarea" value={data.body || ''} onChange={(e) => set({ body: e.target.value })} />
      </Field>
    </>
  );
}

function SmsForm({ data, set, t }) {
  return (
    <>
      <Field label={t('label_phone')}>
        <input className="input" type="tel" value={data.phone || ''} onChange={(e) => set({ phone: e.target.value })} />
      </Field>
      <Field label={t('label_message')}>
        <textarea className="textarea" value={data.message || ''} onChange={(e) => set({ message: e.target.value })} />
      </Field>
    </>
  );
}

function TelForm({ data, set, t }) {
  return (
    <Field label={t('label_phone')}>
      <input className="input" type="tel" value={data.phone || ''} placeholder="+34 600 000 000"
        onChange={(e) => set({ phone: e.target.value })} />
    </Field>
  );
}

export const CONTENT_FORMS = {
  url: URLForm, wifi: WifiForm, vcard: VcardForm, geo: GeoForm,
  email: EmailForm, sms: SmsForm, tel: TelForm,
};
