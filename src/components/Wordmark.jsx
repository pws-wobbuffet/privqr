import React from 'react';

export default function Wordmark({ size = 28 }) {
  const pat = [1, 1, 1, 1, 0, 1, 1, 1, 1];
  return (
    <span className="wordmark" style={{ fontSize: size }}>
      <span>priv</span>
      <span className="glyph-q" aria-label="q">
        {pat.map((v, i) => <i key={i} className={v ? 'on' : 'off'} />)}
      </span>
      <span>r</span>
    </span>
  );
}
