import React from 'react';

const I = (props) => (
  <svg width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="square" strokeLinejoin="miter">{props.children}</svg>
);

const Icons = {
  Link:    (p) => <I {...p}><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.5 1.5"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.5-1.5"/></I>,
  Wifi:    (p) => <I {...p}><path d="M2 9a16 16 0 0 1 20 0"/><path d="M5 13a11 11 0 0 1 14 0"/><path d="M8.5 16.5a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r="0.8" fill="currentColor" stroke="none"/></I>,
  Contact: (p) => <I {...p}><rect x="4" y="3" width="16" height="18"/><circle cx="12" cy="11" r="3"/><path d="M7 18c1-2 3-3 5-3s4 1 5 3"/></I>,
  Map:     (p) => <I {...p}><path d="M12 21s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></I>,
  Mail:    (p) => <I {...p}><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></I>,
  Sms:     (p) => <I {...p}><path d="M4 4h16v12H8l-4 4z"/></I>,
  Phone:   (p) => <I {...p}><path d="M6 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2 17 17 0 0 1-15-15 2 2 0 0 1 2-2z"/></I>,
  Download:(p) => <I {...p}><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 19h16"/></I>,
  Sun:     (p) => <I {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></I>,
  Moon:    (p) => <I {...p}><path d="M21 13a8 8 0 1 1-10-10 7 7 0 0 0 10 10z"/></I>,
  Github:  (p) => <I {...p}><path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 3-.3 5.5-1.5 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.5 1.3a12 12 0 0 0-6 0C6.5 2.7 5.5 3 5.5 3a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.5c0 4.5 2.5 5.7 5.5 6-.6.6-.6 1-.5 2V21"/></I>,
  Shield:  (p) => <I {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></I>,
  Upload:  (p) => <I {...p}><path d="M12 21V9"/><path d="M7 14l5-5 5 5"/><path d="M4 5h16"/></I>,
  X:       (p) => <I {...p}><path d="M6 6l12 12M18 6l-12 12"/></I>,
};

export default Icons;
