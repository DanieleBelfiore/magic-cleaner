// Minimal geometric glyphs — 56×56 viewBox
const g = (inner) =>
  `<svg viewBox="0 0 56 56" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`

export const GLYPHS = {
  blot: g(`<circle cx="20" cy="36" r="6" fill="currentColor" fill-opacity="0.15"/>
    <path d="M30 10 L46 10 L46 26 L36 26 L30 20 Z"/>
    <path d="M34 30 L28 36"/>
    <circle cx="22" cy="36" r="1.2" fill="currentColor"/>`),

  salt: g(`<rect x="20" y="14" width="16" height="26" rx="2"/>
    <path d="M20 20 L36 20"/>
    <circle cx="25" cy="17" r="0.7" fill="currentColor"/>
    <circle cx="28" cy="17" r="0.7" fill="currentColor"/>
    <circle cx="31" cy="17" r="0.7" fill="currentColor"/>
    <circle cx="22" cy="46" r="0.8" fill="currentColor"/>
    <circle cx="28" cy="46" r="0.8" fill="currentColor"/>
    <circle cx="34" cy="46" r="0.8" fill="currentColor"/>`),

  'water-cold': g(`<path d="M28 10 C20 22 20 30 28 38 C36 30 36 22 28 10 Z"/>
    <path d="M42 16 L42 26 M38 21 L46 21 M39 18 L45 24 M45 18 L39 24" stroke-width="1"/>`),

  soap: g(`<rect x="14" y="24" width="24" height="14" rx="3"/>
    <circle cx="42" cy="18" r="4"/>
    <circle cx="46" cy="12" r="2"/>
    <path d="M18 30 C20 28 22 28 24 30" stroke-width="1"/>`),

  machine: g(`<rect x="12" y="10" width="32" height="36" rx="3"/>
    <circle cx="28" cy="30" r="10"/>
    <circle cx="28" cy="30" r="6" stroke-dasharray="2 2"/>
    <circle cx="18" cy="17" r="1" fill="currentColor"/>
    <rect x="22" y="15" width="18" height="4" rx="1"/>`),

  vinegar: g(`<path d="M24 10 L32 10 L32 18 L36 22 L36 44 C36 45.1 35.1 46 34 46 L22 46 C20.9 46 20 45.1 20 44 L20 22 L24 18 Z"/>
    <path d="M22 30 L34 30"/>
    <path d="M25 12 L31 12"/>`),

  lemon: g(`<ellipse cx="28" cy="28" rx="14" ry="10" transform="rotate(-20 28 28)"/>
    <path d="M18 22 L16 20 M38 34 L40 36" stroke-width="1"/>
    <path d="M22 28 L34 28" stroke-width="0.8" stroke-dasharray="1 2"/>`),

  powder: g(`<path d="M18 18 L38 18 L36 30 L20 30 Z"/>
    <path d="M22 18 L22 14 L34 14 L34 18"/>
    <circle cx="22" cy="40" r="0.8" fill="currentColor"/>
    <circle cx="28" cy="44" r="0.8" fill="currentColor"/>
    <circle cx="34" cy="40" r="0.8" fill="currentColor"/>
    <circle cx="26" cy="38" r="0.6" fill="currentColor"/>
    <circle cx="32" cy="36" r="0.6" fill="currentColor"/>`),

  brush: g(`<rect x="16" y="32" width="24" height="6" rx="1"/>
    <path d="M18 38 L16 46 M22 38 L21 46 M26 38 L26 46 M30 38 L31 46 M34 38 L34 46 M38 38 L40 46" stroke-width="1"/>
    <rect x="22" y="24" width="12" height="8" rx="1"/>`),

  brush2: g(`<path d="M14 42 L28 28 L34 34 L20 48 Z"/>
    <path d="M28 28 L40 16"/>
    <path d="M18 38 L16 40 M22 42 L20 44 M26 46 L24 48" stroke-width="1"/>`),

  scrape: g(`<ellipse cx="18" cy="20" rx="7" ry="5" transform="rotate(-30 18 20)"/>
    <path d="M22 24 L40 42"/>
    <path d="M12 40 L44 40" stroke-width="1" stroke-dasharray="2 2"/>`),

  hydrogen: g(`<rect x="20" y="16" width="16" height="28" rx="2"/>
    <rect x="23" y="10" width="10" height="6" rx="1"/>
    <text x="28" y="32" font-size="7" fill="currentColor" stroke="none" text-anchor="middle" font-family="monospace">H2O2</text>`),

  alcohol: g(`<ellipse cx="14" cy="14" rx="4" ry="3" transform="rotate(-30 14 14)"/>
    <ellipse cx="42" cy="42" rx="4" ry="3" transform="rotate(-30 42 42)"/>
    <path d="M16 18 L40 38" stroke-width="2"/>`),

  napkin: g(`<path d="M10 20 L46 20 L42 40 L14 40 Z"/>
    <path d="M10 20 L46 20"/>
    <path d="M18 20 L18 40 M28 20 L28 40 M38 20 L38 40" stroke-width="0.8" stroke-dasharray="1 2"/>`),

  foam: g(`<circle cx="20" cy="32" r="6"/>
    <circle cx="30" cy="28" r="8"/>
    <circle cx="40" cy="34" r="5"/>
    <path d="M14 38 L46 38"/>`),

  rub: g(`<rect x="14" y="22" width="20" height="12" rx="2"/>
    <path d="M34 26 L42 22 M34 30 L44 30 M34 34 L42 38"/>
    <path d="M10 40 L46 40" stroke-dasharray="2 2" stroke-width="1"/>`),

  wait: g(`<path d="M18 12 L38 12 L38 18 L30 28 L38 38 L38 44 L18 44 L18 38 L26 28 L18 18 Z"/>
    <path d="M22 16 L34 16"/>
    <path d="M22 40 L34 40"/>
    <path d="M26 28 L30 28" stroke-width="2"/>`),
}

// Stain-type card icons — emoji for instant recognizability
export const STAIN_ICONS = {
  'wine-red':  '🍷',
  coffee:      '☕',
  oil:         '🫒',
  tomato:      '🍅',
  blood:       '🩸',
  grass:       '🌿',
  ink:         '🖊️',
  makeup:      '💄',
  sweat:       '💧',
  chocolate:   '🍫',
  deodorant:   '🧴',
  mud:         '🪣',
}

