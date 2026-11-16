/* Qwick Fix app: routing, search engine, photo search, views. */
(function () {
'use strict';

/* ───────── Icons (lucide, 1.5 stroke) ───────── */
const P = {
  power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
  lifebuoy: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  wifi: '<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  usb: '<circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5M21 3l-3 1 2 2ZM9.26 7.68 5 12l2 5M10 14l5 2 3.5-3.5M18 12l1-1 1 1-1 1Z"/>',
  chip: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  bluetooth: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
  history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  keyboard: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'
};
const ic = (n, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ''}</svg>`;

/* ───────── Data lookups ───────── */
const CAT = Object.fromEntries(CATS.map(c => [c.id, c]));
const BY_ID = Object.fromEntries(PROBLEMS.map(p => [p.id, p]));
const imgUrl = name => `images/${name}.jpg`;

/* ───────── Storage (best effort) ───────── */
const store = {
  get(k, d) { try { const v = localStorage.getItem('qf:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('qf:' + k, JSON.stringify(v)); } catch (e) {} }
};

/* ───────── Text helpers ───────── */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const KEY_NAMES = { win: 'Win', ctrl: 'Ctrl', alt: 'Alt', del: 'Del', shift: 'Shift', esc: 'Esc', enter: 'Enter' };
const keycaps = spec => spec.split('+').map(k => `<kbd>${esc(KEY_NAMES[k.toLowerCase()] || k)}</kbd>`).join('<span class="plus">+</span>');
function fmt(s) {
  let h = esc(s);
  h = h.replace(/\[\[([^\]]+)\]\]/g, (m, k) => keycaps(k));
  h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
  h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, url) => {
    const jump = url.match(/^fix:(\d+)$/);
    if (jump) return `<a href="#" data-jump="fix-${jump[1]}">${label}</a>`;
    const ext = /^https?:/.test(url);
    return `<a href="${url}"${ext ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
  });
  return h;
}
const plain = s => String(s).replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[`*]/g, '');
const stepText = st => typeof st === 'string' ? st : st.t;

/* ═════════════════════════ SEARCH ENGINE ═════════════════════════
   Runs in the browser, so it answers instantly and works on weak data.
   1. Normalise: lower case, apostrophes, spelling variants.
   2. Understand phrases: "not coming on", "screen is black", "storage full"
      become intent words that match how the problems are described.
   3. Synonyms: words that mean the same thing share one concept.
   4. Score by where words match (title > other phrasings > steps), weighted by rarity.
   5. Typos: unknown words are matched to the nearest known word.
   6. Never a dead end: if nothing matches, drop words, then fall back to the closest titles. */

const STOP = new Set(('a an the my mine your is are was were be been it its i im ive me to of on in into for and or with when after before at by this that these those ' +
  'has have had do does did doesnt dont didnt cant cannot wont isnt not no very really keep keeps keeping how what why can will help please pls plz ' +
  'laptop computer pc machine system anymore suddenly just get got getting still all any some there work works working worked properly ' +
  'again always now today since but so also even then thing something showing shows show says saying said').split(' '));

/* Phrases that mean one thing become an intent word, applied to both content and queries */
const PHRASES = [
  [/(?<!(bluetooth|wifi|camera|webcam|hotspot) )\b(not|never|refus\w*|fail\w*( to)?|unable to|wouldnt|cant|wont|isnt|doesnt|didnt)\s+(com\w*|turn\w*|power\w*)\s+on\b/g, ' nostart '],
  [/(?<!(bluetooth|wifi|camera|webcam|hotspot|app|apps|game|program) )\b(not|never|wont|isnt|doesnt|didnt|refus\w*|fail\w*( to)?)\s+(start\w*|boot\w*|load\w*)\b/g, ' nostart '],
  [/\b(dead|no power|totally off)\b/g, ' nostart '],
  [/\bno display\b|\bnothing (shows |on )(on )?(the )?screen\b|\bscreen (is |goes |went |turns? |stays? )?(black|blank|dark|off)\b|\bblack ?screen\b|\bblank ?screen\b/g, ' blackscreen '],
  [/\bblue ?screen\b|\bbsod\b/g, ' bluescreen '],
  [/\b(not|isnt|wont|doesnt|stopped) charg\w*\b|\bbattery (is )?(dead|0|zero|flat)\b|\b0 ?%/g, ' nocharge '],
  [/\b(storage|memory|space|c drive|local disk|disk) (is )?(full|low|almost full|finished)\b|\blow (storage|space|memory|disk space)\b|\bno space\b/g, ' lowstorage '],
  [/\b(no|without|cant hear|zero) (sound|audio)\b|\bsound (is )?(gone|off|not)\b/g, ' nosound '],
  [/\b(no|without) internet\b|\bnot browsing\b|\bcant browse\b|\bwebsites? (wont|not) (load|open)\b/g, ' nointernet '],
  [/\bkeeps? restart\w*\b|\brestart\w* (again and again|by itself|on its own|over and over)\b|\breboot ?loop\b|\brestart ?loop\b/g, ' restartloop '],
  [/\bfiles? (became|turned|turning|changed) (in)?to shortcuts?\b/g, ' shortcutvirus '],
  [/\b(goes|went|switch\w*|turns?) off (by itself|on its own|suddenly)\b|\bshuts? (down|off) (by itself|suddenly|on its own)\b/g, ' selfshutdown ']
];

const SYN = [
  ['wifi', 'wireless', 'wlan', 'network', 'networks', 'router', 'signal'],
  ['internet', 'online', 'web', 'website', 'websites', 'browsing', 'browse', 'connection', 'connect', 'connected', 'mb', 'bundle', 'nointernet'],
  ['slow', 'sluggish', 'lag', 'lagging', 'laggy', 'freeze', 'freezing', 'frozen', 'freezes', 'hang', 'hangs', 'hanging', 'unresponsive', 'speed', 'performance', 'delay', 'delays'],
  ['virus', 'viruses', 'malware', 'infected', 'infection', 'trojan', 'worm', 'spyware', 'adware', 'ransomware', 'keylogger', 'hacked', 'antivirus', 'popup', 'popups'],
  ['usb', 'flash', 'pendrive', 'pen', 'thumb', 'stick', 'flashdrive', 'sd'],
  ['bluetooth', 'bt', 'airpods', 'earbuds', 'earbud', 'earphone', 'earphones', 'headset', 'pair', 'pairing', 'buds'],
  ['sound', 'audio', 'speaker', 'speakers', 'volume', 'mute', 'muted', 'headphones', 'nosound', 'hear'],
  ['brightness', 'bright', 'dim', 'dimming'],
  ['screen', 'display', 'monitor', 'lcd'],
  ['boot', 'booting', 'boots', 'start', 'starting', 'startup', 'nostart', 'bios', 'load', 'loading'],
  ['black', 'blank', 'dark', 'blackscreen'],
  ['delete', 'erase', 'remove'],
  ['password', 'pin', 'passcode', 'login', 'log', 'signin', 'locked', 'lockout'],
  ['office', 'word', 'excel', 'powerpoint', 'ms365', 'microsoft365', 'docx', 'xlsx', 'pptx'],
  ['install', 'installation', 'installing', 'setup', 'reinstall', 'download'],
  ['windows', 'win', 'win11', 'win10', 'os'],
  ['driver', 'drivers'],
  ['hot', 'heat', 'heating', 'overheating', 'overheat', 'temperature', 'fan', 'thermal', 'warm', 'selfshutdown'],
  ['battery', 'batt', 'charger', 'charging', 'charge', 'charged', 'nocharge', 'plug', 'plugged'],
  ['hidden', 'missing', 'disappeared', 'vanished', 'gone', 'invisible', 'empty', 'lost'],
  ['hotspot', 'tethering', 'mobile'],
  ['permission', 'access', 'denied', 'ownership', 'administrator', 'admin'],
  ['format', 'reformat', 'fat32', 'exfat', 'ntfs', 'filesystem'],
  ['update', 'updates', 'updating', 'upgrade'],
  ['loop', 'restarting', 'restarts', 'rebooting', 'reboots', 'restart', 'reboot', 'restartloop'],
  ['corrupt', 'corrupted', 'damaged', 'broken', 'spoil', 'spoilt', 'spoiled', 'faulty'],
  ['dll', 'msvcp110', 'msvcp140', 'vcruntime140', 'redistributable', 'runtime'],
  ['ethernet', 'lan', 'cable', 'wired'],
  ['shortcut', 'shortcuts', 'lnk', 'shortcutvirus'],
  ['hijack', 'hijacked', 'redirect', 'redirects', 'redirecting', 'managed', 'questfinder'],
  ['harddisk', 'hdd', 'ssd', 'hard', 'disk', 'drive'],
  ['storage', 'space', 'lowstorage', 'full', 'gb'],
  ['camera', 'webcam', 'cam'],
  ['safe', 'safemode'],
  ['bluescreen', 'blue'],
  ['error', 'message', 'warning']
];
const CANON = new Map();
SYN.forEach(g => g.forEach(w => { if (!CANON.has(w)) CANON.set(w, g[0]); }));
const INTENT_WORDS = new Set(['nostart', 'blackscreen', 'bluescreen', 'nocharge', 'lowstorage', 'nosound', 'nointernet', 'restartloop', 'shortcutvirus', 'selfshutdown']);

function normalize(s) {
  let t = ' ' + String(s).toLowerCase()
    .replace(/[’‘'`]/g, '')
    .replace(/[“”"]/g, ' ')
    .replace(/wi-?fi/g, 'wifi')
    .replace(/hard (disk|drive)s?/g, 'harddisk')
    .replace(/pen ?drive/g, 'pendrive')
    .replace(/flash ?drive/g, 'flashdrive')
    .replace(/safe ?mode/g, 'safemode')
    .replace(/log ?in|sign ?in/g, 'login')
    .replace(/ms ?word|microsoft word/g, 'word')
    .replace(/[^a-z0-9.%]+/g, ' ') + ' ';
  for (const [re, rep] of PHRASES) t = t.replace(re, m => m + rep);
  return t.replace(/\.(?![a-z0-9])|(?<![a-z0-9])\./g, ' ').replace(/%/g, ' ');
}
function stem(w) {
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
  if (w.length > 4 && /(ss|x|ch|sh)es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}
const term = w => CANON.get(w) || CANON.get(stem(w)) || stem(w);
const tokens = (s, keepStop) => normalize(s).split(' ').filter(w => w && (keepStop || !STOP.has(w)) && (w.length > 1 || /\d/.test(w)));

const FIELDS = [['title', 10], ['aka', 8], ['see', 5], ['summary', 4], ['fixTitles', 3], ['causes', 2.5], ['cat', 2], ['steps', 1]];
const INDEX = PROBLEMS.map(p => {
  const f = {
    title: plain(p.title),
    aka: (p.aka || []).join(' · '),
    see: (p.see || []).map(s => s.cap).join(' · '),
    summary: plain(p.summary),
    fixTitles: p.fixes.map(x => x.title).join(' · '),
    causes: (p.causes || []).join(' · '),
    cat: CAT[p.cat].name + ' ' + CAT[p.cat].blurb,
    steps: p.fixes.flatMap(x => x.steps.map(st => plain(stepText(st)) + ' ' + ((st.cmd || []).join(' ')))).join(' · ')
  };
  const terms = new Map();
  for (const [name, w] of FIELDS) for (const t of tokens(f[name])) {
    const k = term(t);
    /* intent words only count where people describe the problem, not deep in the steps */
    const weight = INTENT_WORDS.has(t) && w < 4 ? 0 : w;
    if (weight && (terms.get(k) || 0) < weight) terms.set(k, weight);
  }
  const phrases = [f.title, ...(p.aka || []), ...(p.see || []).map(s => s.cap)].map(x => normalize(x).replace(/\s+/g, ' ').trim());
  return { p, terms, phrase: phrases.join(' · '), phrases, lines: p.fixes.flatMap((x, fi) => x.steps.map(st => ({ fi, text: plain(stepText(st)) }))) };
});
const DF = new Map();
INDEX.forEach(d => d.terms.forEach((_, k) => DF.set(k, (DF.get(k) || 0) + 1)));
const VOCAB = [...DF.keys()];
const RAW_VOCAB = new Set();
PROBLEMS.forEach(p => tokens(plain(p.title) + ' ' + (p.aka || []).join(' ') + ' ' + p.summary + ' ' + p.fixes.map(f => f.title).join(' ')).forEach(w => { if (!INTENT_WORDS.has(w)) RAW_VOCAB.add(w); }));
SYN.flat().forEach(w => { if (!INTENT_WORDS.has(w)) RAW_VOCAB.add(w); });
const idf = k => Math.log(1 + PROBLEMS.length / (DF.get(k) || 1));

function lev(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]; let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], prev[j - 2] + 1);
      best = Math.min(best, cur[j]);
    }
    if (best > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

function expandWord(w, isLast) {
  const exact = term(w);
  const out = new Map();
  let fixedTo = null;
  if (DF.has(exact)) out.set(exact, 1);
  if (!out.size && !INTENT_WORDS.has(w)) {
    const max = w.length >= 8 ? 2 : w.length >= 4 ? 1 : 0;
    if (max) {
      for (const s of STOP) if (s.length >= 4 && lev(w, s, 1) <= 1) return { out, fixedTo: s, filler: true };
      let best = max + 1, bestRaw = null;
      for (const v of RAW_VOCAB) { const d = lev(w, v, max); if (d < best) { best = d; bestRaw = v; } }
      if (bestRaw) { const k = term(bestRaw); if (DF.has(k)) { out.set(k, best === 1 ? 0.75 : 0.55); fixedTo = bestRaw; } }
    }
  }
  if (isLast && w.length >= 2 && !INTENT_WORDS.has(w)) {
    for (const v of VOCAB) if (v !== exact && v.startsWith(w) && !out.has(v) && !INTENT_WORDS.has(v)) out.set(v, 0.6);
    for (const v of RAW_VOCAB) if (v.startsWith(w) && v !== w) { const k = term(v); if (!out.has(k)) out.set(k, 0.6); }
  }
  return { out, fixedTo };
}

function rank(query, opts = {}) {
  const raw = query.trim();
  if (!raw) return { results: [], fixed: null, words: [] };
  const allWords = tokens(raw);
  if (!allWords.length) return { results: [], fixed: null, words: [] };
  const typingLast = !opts.final && !/\s$/.test(query);
  const expandedAll = allWords.map((w, i) => ({ w, ...expandWord(w, typingLast && i === allWords.length - 1) }));
  /* words that are part of a recognised phrase ("wont TURN on") count once, through the phrase */
  const parts = new Set();
  let probe = ' ' + normalize(raw).replace(/\s(nostart|blackscreen|bluescreen|nocharge|lowstorage|nosound|nointernet|restartloop|shortcutvirus|selfshutdown)\s/g, ' ') + ' ';
  for (const [re] of PHRASES) { re.lastIndex = 0; (probe.match(re) || []).forEach(m => m.split(/\s+/).forEach(w => w && parts.add(w))); }
  const hasIntent = expandedAll.some(e => INTENT_WORDS.has(e.w));
  const expanded = expandedAll.filter(e => !e.filler && e.out.size && (!hasIntent || INTENT_WORDS.has(e.w) || !parts.has(e.w)));
  const intents = 0;
  const words = expanded.map(e => e.w);
  const fullWords = tokens(raw, true).filter(w => !INTENT_WORDS.has(w)).map(w => { const e = expandedAll.find(x => x.w === w); return e && e.fixedTo ? e.fixedTo : w; });
  const qPhrase = fullWords.join(' ');
  const fixed = expandedAll.some(e => e.fixedTo && !e.filler) ? qPhrase : null;
  if (!expanded.length) return { results: [], fixed, words };
  const pairs = [];
  for (let i = 0; i < fullWords.length - 1; i++) if (!(STOP.has(fullWords[i]) && STOP.has(fullWords[i + 1]))) pairs.push(fullWords[i] + ' ' + fullWords[i + 1]);
  const codes = (raw.match(/\b\d{4,5}-\d{3,4}\b|\b0x[0-9a-f]{6,8}\b|\b[a-z0-9_]+\.dll\b|\b[a-z]+\.exe\b/gi) || []).map(c => c.toLowerCase());

  const results = [];
  for (const d of INDEX) {
    let score = 0, matched = 0, intentHit = 0;
    for (const e of expanded) {
      let best = 0;
      e.out.forEach((mult, k) => { const w = d.terms.get(k); if (w) { const s = w * mult * idf(k); if (s > best) best = s; } });
      if (best) { score += best; matched++; if (INTENT_WORDS.has(e.w)) intentHit++; }
    }
    if (!matched) continue;
    /* the words that make up an intent phrase also match separately; count the phrase once */
    const denom = Math.max(1, expanded.length - intents * 1);
    const coverage = Math.min(1, matched / denom);
    score *= Math.pow(coverage, 1.6);
    if (intentHit) score *= 1.5;
    if (qPhrase.length > 3 && d.phrase.includes(qPhrase)) score *= 1.8;
    const pairHits = pairs.filter(pr => d.phrase.includes(pr)).length;
    if (pairHits) score *= 1 + 0.35 * pairHits;
    if (codes.length && codes.some(c => d.phrase.includes(c) || d.lines.some(l => l.text.toLowerCase().includes(c)))) score *= 2.5;
    results.push({ p: d.p, score, coverage, d });
  }
  results.sort((a, b) => b.score - a.score);
  if (!results.length) return { results, fixed, words };
  const top = results[0].score;
  return { results: results.filter(r => r.score >= top * 0.25 && (r.coverage >= 0.5 || expanded.length <= 2)), fixed, words };
}

/* character trigrams, for the last-resort "closest match" */
const grams = s => { const t = '  ' + s + ' '; const g = new Set(); for (let i = 0; i < t.length - 2; i++) g.add(t.slice(i, i + 3)); return g; };
const PHRASE_GRAMS = INDEX.map(d => ({ d, g: grams(d.phrase) }));
function closest(q, n = 4) {
  const qg = grams(normalize(q).replace(/\s+/g, ' ').trim());
  if (!qg.size) return [];
  return PHRASE_GRAMS.map(({ d, g }) => { let hit = 0; qg.forEach(x => { if (g.has(x)) hit++; }); return { p: d.p, d, score: hit / qg.size }; })
    .filter(r => r.score > 0.3).sort((a, b) => b.score - a.score).slice(0, n);
}

/* Main entry: always tries to return something useful */
function search(query, opts = {}) {
  const first = rank(query, opts);
  if (first.results.length) return { ...first, mode: 'exact' };
  const ws = first.words;
  if (ws.length > 1) {
    const pool = new Map();
    for (let i = 0; i < ws.length; i++) {
      const sub = ws.filter((_, j) => j !== i).join(' ');
      rank(sub, { final: true }).results.forEach(r => { const prev = pool.get(r.p.id); if (!prev || prev.score < r.score) pool.set(r.p.id, r); });
    }
    if (pool.size) return { results: [...pool.values()].sort((a, b) => b.score - a.score).slice(0, 8), fixed: first.fixed, words: ws, mode: 'relaxed' };
  }
  if (query.trim().length < 3) return { results: [], fixed: null, words: ws, mode: 'none' };
  const near = closest(query);
  return { results: near, fixed: first.fixed, words: ws, mode: near.length ? 'closest' : 'none' };
}

/* Pages that answer a question directly, shown above problem results */
const QUICK = [
  { re: /\b(boot ?menu|bios|boot ?key|uefi|which key|f2|f9|f10|f12|f11|esc key|del key)\b/i, href: '#/keys', icon: 'keyboard', title: 'Boot and BIOS keys', sub: 'The key for your laptop brand' },
  { re: /\b(contact|call|phone number|whatsapp|technician|repair ?shop|shop|location|where are you|visit|human|person|talk to)\b/i, href: '#/contact', icon: 'phone', title: 'Talk to us', sub: 'Call, WhatsApp or visit the shop' }
];
const quickLinks = q => QUICK.filter(x => x.re.test(q));

/* Highlighting */
function highlightTerms(words) {
  const set = new Set();
  (words || []).filter(w => !INTENT_WORDS.has(w)).forEach(w => { set.add(w); const c = term(w); SYN.forEach(g => { if (g[0] === c) g.forEach(x => { if (!INTENT_WORDS.has(x)) set.add(x); }); }); });
  return [...set].filter(w => w.length > 2).sort((a, b) => b.length - a.length);
}
const reEsc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function hl(text, terms) {
  const h = esc(text);
  if (!terms || !terms.length) return h;
  return h.replace(new RegExp('\\b(' + terms.map(reEsc).join('|') + ')\\w*', 'gi'), '<mark>$&</mark>');
}
function snippet(r, terms) {
  if (!terms.length) return '';
  const re = new RegExp('\\b(' + terms.map(reEsc).join('|') + ')', 'i');
  if (re.test(r.p.title) || re.test(r.p.summary.split('. ')[0])) return '';
  const aka = (r.p.aka || []).find(a => re.test(a));
  if (aka) return `Matches “${hl(aka, terms)}”`;
  const line = r.d.lines.find(l => re.test(l.text));
  if (!line) return '';
  let t = line.text;
  if (t.length > 120) { const i = Math.max(0, t.search(re) - 40); t = (i ? '…' : '') + t.slice(i, i + 120) + '…'; }
  return hl(t, terms);
}

/* ═════════════════════════ PHOTO SEARCH ═════════════════════════
   Reads the text in a photo of the screen on the phone itself (nothing is uploaded),
   checks the colours (blue recovery screen, black screen), then matches problems. */
const TESS_SRC = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
let tessLoading = null;
function loadTesseract() {
  if (window.Tesseract) return Promise.resolve(window.Tesseract);
  if (!tessLoading) tessLoading = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = TESS_SRC; s.async = true;
    s.onload = () => res(window.Tesseract); s.onerror = () => { tessLoading = null; rej(new Error('load')); };
    document.head.appendChild(s);
  });
  return tessLoading;
}
function readImage(file) {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      /* small screenshots are enlarged, big phone photos shrunk: OCR reads best around 1600–2000px */
      const longest = Math.max(img.width, img.height);
      const s = longest < 1400 ? Math.min(2.5, 1800 / longest) : Math.min(1, 2000 / longest);
      const c = document.createElement('canvas'); c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      const x = c.getContext('2d', { willReadFrequently: true });
      x.imageSmoothingQuality = 'high';
      x.drawImage(img, 0, 0, c.width, c.height);
      const im = x.getImageData(0, 0, c.width, c.height);
      const data = im.data;
      let blue = 0, dark = 0, n = 0, sum = 0;
      for (let i = 0; i < data.length; i += 16) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (b > 110 && b > r + 45 && b > g + 15) blue++;
        if (r + g + b < 120) dark++;
        sum += r + g + b; n++;
      }
      /* greyscale with stretched contrast; flip light-on-dark screens to dark-on-light */
      const invert = sum / n / 3 < 110;
      for (let i = 0; i < data.length; i += 4) {
        let v = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        if (invert) v = 255 - v;
        v = Math.max(0, Math.min(255, (v - 128) * 1.5 + 128));
        data[i] = data[i + 1] = data[i + 2] = v;
      }
      x.putImageData(im, 0, 0);
      res({ canvas: c, url, blue: blue / n, dark: dark / n });
    };
    img.onerror = () => rej(new Error('image'));
    img.src = url;
  });
}
function matchPhotoText(text, look) {
  const toks = [...new Set(normalize(text).split(' ').filter(w => w.length > 2 && !STOP.has(w)))];
  const tokSet = new Set(toks);
  const scored = INDEX.map(d => {
    let best = 0;
    d.phrases.forEach(ph => {
      const pw = ph.split(' ').filter(w => w.length > 2 && !STOP.has(w) && !INTENT_WORDS.has(w));
      if (pw.length < 2) return;
      let hit = 0;
      pw.forEach(w => { if (tokSet.has(w) || toks.some(x => x.length > 4 && lev(x, w, 1) <= 1)) hit++; });
      const r = (hit / pw.length) * Math.min(1, 0.6 + pw.length / 10);
      if (r > best) best = r;
    });
    /* exact clues on the screen beat general words like "error" */
    if (d.p.id === 'missing-dll' && /\b[a-z0-9_]+\s?\.\s?d[l1i]{1,2}\b|\bdll\b/i.test(text)) best += 0.9;
    if (d.p.id === 'bitlocker' && /bitlocker|recovery key/i.test(text)) best += 0.9;
    if (d.p.id === 'chrome-managed' && /managed by your organi[sz]ation|quest.?finder/i.test(text)) best += 0.9;
    if (d.p.id === 'blue-screen' && /ran into a problem|stop code|needs to restart|we.?re just collecting/i.test(text)) best += 0.9;
    if (d.p.id === 'blue-screen' && STOP_CODES.some(c => text.toUpperCase().replace(/\s+/g, '_').includes(c[0]))) best += 0.6;
    if (d.p.id === 'error-codes' && /\b0x[0-9a-f]{6,8}\b/i.test(text)) best += 0.7;
    if (look.blue > 0.35 && ['repair-loop', 'update-boot-loop', 'safe-mode', 'reset-this-pc', 'bitlocker'].includes(d.p.id)) best += 0.25;
    if (look.dark > 0.75 && toks.length < 6 && ['blinking-cursor', 'black-screen-after-login'].includes(d.p.id)) best += 0.35;
    return { p: d.p, d, score: best };
  }).filter(r => r.score >= 0.45).sort((a, b) => b.score - a.score);
  if (scored.length) return scored.slice(0, 6);
  const words = toks.slice(0, 14).join(' ');
  return words ? search(words, { final: true }).results.slice(0, 6) : [];
}
let lensState = null;
async function startLens(file) {
  lensState = { status: 'reading', progress: 0, text: '', results: [], url: null };
  if (location.hash !== '#/photo') location.hash = '#/photo'; else route(true);
  try {
    const look = await readImage(file);
    lensState.url = look.url; renderLens();
    const T = await loadTesseract();
    lensState.status = 'ocr'; renderLens();
    const worker = await T.createWorker('eng', 1, { logger: m => { if (m.status === 'recognizing text') { lensState.progress = m.progress; renderLens(true); } } });
    await worker.setParameters({ tessedit_pageseg_mode: '11' }); /* find text anywhere, not just one block */
    const { data } = await worker.recognize(look.canvas);
    await worker.terminate();
    lensState.text = (data.text || '').replace(/\s+/g, ' ').trim();
    lensState.results = matchPhotoText(lensState.text, look);
    lensState.status = 'done';
  } catch (e) {
    lensState.status = 'error';
  }
  renderLens();
}
function pickPhoto() {
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'image/*';
  inp.addEventListener('change', () => { if (inp.files && inp.files[0]) startLens(inp.files[0]); });
  inp.click();
}

/* ═════════════════════════ SEARCH BOX ═════════════════════════ */
const EXAMPLES = ['laptop not coming on', 'WiFi not showing', 'no sound', 'files became shortcuts', 'storage is full', 'black screen after login', 'battery not charging'];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const saveSearch = q => { if (!q) return; store.set('lastq', q); const s = store.get('searches', []).filter(x => x.toLowerCase() !== q.toLowerCase()); s.unshift(q); store.set('searches', s.slice(0, 6)); };

/* Code lookup tables (blue screen stop codes, 0x error codes) with a filter box.
   A code the person just searched for is pinned to the top. */
const codeKey = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
function codeTable(kind) {
  const rows = kind === 'stopcodes' ? STOP_CODES : ERROR_CODES;
  const q = codeKey(store.get('lastq', ''));
  const hit = r => q.length >= 6 && (q.includes(codeKey(r[0])) || codeKey(r[0]).includes(q));
  const sorted = [...rows.filter(hit), ...rows.filter(r => !hit(r))];
  return `<div class="codes" data-codes>
    <div class="codes-filter">${ic('search', 'icon-16')}<input type="search" inputmode="search" autocapitalize="characters" spellcheck="false" placeholder="${kind === 'stopcodes' ? 'e.g. CRITICAL_PROCESS_DIED' : 'e.g. 0xc000007b'}" aria-label="Filter codes"></div>
    <div class="codes-list">${sorted.map(([code, means, tryit]) => `
      <div class="code-row${hit([code]) ? ' on' : ''}" data-key="${codeKey(code)} ${codeKey(means)}">
        <code>${esc(code)}</code>
        <p class="code-means">${fmt(means)}</p>
        <p class="code-try"><span>Try:</span> ${fmt(tryit)}</p>
      </div>`).join('')}
      <p class="codes-none" hidden>Not on this list. Search the exact code at the top, or WhatsApp us a photo.</p>
    </div></div>`;
}

function searchBox(opts) {
  const id = 'sb' + Math.random().toString(36).slice(2, 7);
  const el = document.createElement('div');
  el.className = 'search' + (opts.hero ? ' search-hero' : '');
  el.setAttribute('role', 'search');
  el.innerHTML = `
    <div class="search-field">
      <span class="lead">${ic('search', opts.hero ? 'icon-20' : '')}</span>
      <input type="search" id="${id}" enterkeyhint="search" autocomplete="off" spellcheck="false" autocapitalize="off"
        role="combobox" aria-expanded="false" aria-controls="${id}-list" aria-autocomplete="list" aria-label="Describe your laptop problem"
        placeholder="${opts.rotate ? '' : esc(opts.placeholder || 'Describe the problem')}">
      ${opts.rotate ? `<span class="ph" aria-hidden="true"><span class="ph-text">${reduceMotion.matches ? 'Describe the problem' : 'Try “' + EXAMPLES[0] + '”'}</span></span>` : ''}
      <button class="clear" type="button" aria-label="Clear">${ic('x', 'icon-16')}</button>
      ${opts.camera ? `<button class="cam" type="button" aria-label="Search with a photo of the screen">${ic('camera', opts.hero ? 'icon-20' : '')}</button>` : ''}
    </div>
    <div class="suggest" id="${id}-list" role="listbox"></div>`;
  const input = el.querySelector('input');
  const list = el.querySelector('.suggest');
  let items = [], active = -1, rot = null;

  function close() { list.classList.remove('open'); input.setAttribute('aria-expanded', 'false'); active = -1; }
  function setActive(i) {
    active = i;
    list.querySelectorAll('.suggest-item').forEach((n, j) => n.classList.toggle('active', j === i));
    if (i >= 0) input.setAttribute('aria-activedescendant', `${id}-o${i}`); else input.removeAttribute('aria-activedescendant');
  }
  function render() {
    const q = input.value;
    el.classList.toggle('has-value', !!q);
    if (!q.trim()) {
      const recent = store.get('searches', []).slice(0, 4);
      if (!recent.length || document.activeElement !== input) { close(); return; }
      items = [];
      list.innerHTML = `<div class="suggest-head">Recent</div>` + recent.map(s => `<a class="suggest-item recent" href="#/search?q=${encodeURIComponent(s)}"><span class="ic">${ic('history')}</span><span class="tx"><span class="t">${esc(s)}</span></span></a>`).join('');
      list.classList.add('open'); input.setAttribute('aria-expanded', 'true');
      return;
    }
    const { results, fixed, words, mode } = search(q);
    const terms = highlightTerms(words);
    const quick = quickLinks(q);
    items = results.slice(0, quick.length ? 5 : 6).map(r => r.p);
    const quickHtml = quick.map(x => `<a class="suggest-item quick" href="${x.href}"><span class="ic">${ic(x.icon)}</span><span class="tx"><span class="t">${esc(x.title)}</span><span class="c">${esc(x.sub)}</span></span></a>`).join('');
    if (!items.length && quick.length) {
      list.innerHTML = quickHtml;
    } else if (!items.length) {
      list.innerHTML = `<div class="suggest-empty">Keep typing, or say what you see on the screen.</div>`;
    } else {
      list.innerHTML = quickHtml + (mode !== 'exact' ? `<div class="suggest-head">Closest matches</div>` : '') +
        items.map((p, i) => `<a class="suggest-item" id="${id}-o${i}" role="option" href="#/p/${p.id}"><span class="ic">${ic(CAT[p.cat].icon)}</span>
          <span class="tx"><span class="t">${hl(plain(p.title), terms)}</span><span class="c">${esc(CAT[p.cat].name)}</span></span></a>`).join('') +
        `<a class="suggest-all" href="#/search?q=${encodeURIComponent(q.trim())}">${fixed ? `Search for “${esc(fixed)}”` : 'See all results'}${ic('chevron', 'icon-16')}</a>`;
    }
    list.classList.add('open'); input.setAttribute('aria-expanded', 'true');
    setActive(-1);
  }
  function submit() {
    const q = input.value.trim();
    if (!q) return;
    close(); saveSearch(q);
    if (active >= 0 && items[active]) location.hash = '#/p/' + items[active].id;
    else location.hash = '#/search?q=' + encodeURIComponent(q);
    input.blur();
  }
  input.addEventListener('input', () => { el.classList.toggle('typing', !!input.value); render(); });
  input.addEventListener('focus', render);
  input.addEventListener('keydown', e => {
    const open = list.classList.contains('open');
    if (e.key === 'ArrowDown' && open) { e.preventDefault(); setActive(Math.min(items.length - 1, active + 1)); }
    else if (e.key === 'ArrowUp' && open) { e.preventDefault(); setActive(Math.max(-1, active - 1)); }
    else if (e.key === 'Enter') { e.preventDefault(); submit(); }
    else if (e.key === 'Escape') { if (open) close(); else input.blur(); }
  });
  list.addEventListener('mousedown', e => e.preventDefault());
  list.addEventListener('click', e => { const a = e.target.closest('a'); if (a && !a.classList.contains('recent')) saveSearch(input.value.trim()); close(); input.blur(); });
  el.querySelector('.clear').addEventListener('click', () => { input.value = ''; el.classList.remove('typing'); render(); input.focus(); });
  const cam = el.querySelector('.cam'); if (cam) cam.addEventListener('click', pickPhoto);
  document.addEventListener('click', e => { if (!el.contains(e.target)) close(); });
  if (opts.value) { input.value = opts.value; el.classList.add('has-value', 'typing'); }

  /* rotating examples: the current one fades out downward, the next fades in from above */
  if (opts.rotate && !reduceMotion.matches) {
    const ph = el.querySelector('.ph-text');
    let i = 0;
    rot = setInterval(() => {
      if (input.value || document.hidden) return;
      ph.classList.add('out');
      setTimeout(() => {
        i = (i + 1) % EXAMPLES.length;
        ph.textContent = 'Try “' + EXAMPLES[i] + '”';
        ph.classList.remove('out'); ph.classList.add('pre');
        void ph.offsetWidth; ph.classList.remove('pre');
      }, 280);
    }, 3200);
  }
  el.input = input;
  el.stop = () => { if (rot) clearInterval(rot); };
  return el;
}

/* ═════════════════════════ VIEWS ═════════════════════════ */
const app = document.getElementById('app');
const topSearch = document.getElementById('topSearch');

function crumbs(parts) {
  return `<nav class="crumbs" aria-label="Breadcrumb">${parts.map((p, i) =>
    (i ? ic('chevron') : '') + (p.href ? `<a href="${p.href}">${esc(p.label)}</a>` : `<span aria-current="page">${esc(p.label)}</span>`)).join('')}</nav>`;
}
const firstSentence = s => { const t = plain(s); const i = t.indexOf('. '); return i > 0 ? t.slice(0, i + 1) : t; };
function row(p, extra = {}) {
  return `<a class="row" href="#/p/${p.id}">
    <span class="ic">${ic(CAT[p.cat].icon)}</span>
    <span class="tx"><span class="t">${extra.title || esc(plain(p.title))}</span><span class="d">${extra.snip || esc(firstSentence(p.summary))}</span></span>
    <span class="go">${ic('chevron')}</span></a>`;
}
function contactCard(heading, text) {
  return `<div class="help-card">
    <div class="help-text"><h2>${heading}</h2><p>${text}</p></div>
    <div class="help-actions">
      <a class="btn btn-primary" href="tel:${CONTACT.phone}">${ic('phone', 'icon-16')} Call</a>
      <a class="btn" href="${CONTACT.whatsapp}" target="_blank" rel="noopener">${ic('chat', 'icon-16')} WhatsApp</a>
    </div>
    <div class="help-meta">
      <a class="help-loc" href="${CONTACT.map}" target="_blank" rel="noopener">${ic('pin', 'icon-16')}${esc(CONTACT.location)} · ${CONTACT.phoneLabel}</a>
      <a class="help-loc" href="${CONTACT.group}" target="_blank" rel="noopener">${ic('users', 'icon-16')}Join our WhatsApp group</a>
    </div>
  </div>`;
}

const POPULAR = ['wifi-not-showing', 'slow-laptop', 'no-bootable-device', 'low-storage', 'no-sound', 'battery-zero'];
const SHORT = { 'wifi-not-showing': 'WiFi not showing', 'slow-laptop': 'Slow or hanging', 'no-bootable-device': 'No bootable device', 'low-storage': 'Storage full', 'no-sound': 'No sound', 'battery-zero': 'Not charging' };
const SHORTCUTS = [
  { href: '#/c/boot', icon: 'power', label: 'Boot issues' },
  { href: '#/c/network', icon: 'wifi', label: 'WiFi' },
  { href: '#/c/slow', icon: 'gauge', label: 'Slow PC' },
  { href: '#/c/malware', icon: 'shield', label: 'Viruses' },
  { href: '#/c/storage', icon: 'usb', label: 'Flash drives' },
  { href: '#/keys', icon: 'keyboard', label: 'Boot keys' }
];
const SWOOSH = `<svg viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="swg" x1="0" x2="1"><stop offset="0" stop-color="#e06f62"/><stop offset="1" stop-color="#fea35d"/></linearGradient></defs><path d="M4 16 C 60 6, 140 2, 216 10" fill="none" stroke="url(#swg)" stroke-width="6" stroke-linecap="round"/></svg>`;

function viewHome() {
  const recent = store.get('recent', []).filter(id => BY_ID[id]).slice(0, 3);
  app.innerHTML = `
    <section class="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="wrap hero-inner">
        <h1 class="t-hero"><span class="hl">What’s wrong</span> <span class="hl">with your <span class="swoosh">laptop?${SWOOSH}</span></span></h1>
        <p class="t-lede">Describe your issue or upload a snapshot. We’ll help you fix it, step by step.</p>
        <div id="heroSearch"></div>
        <div class="try">${POPULAR.map(id => `<a class="chip" href="#/p/${id}">${esc(SHORT[id])}</a>`).join('')}</div>
      </div>
    </section>

    <div class="wrap"><nav class="shortcuts" aria-label="Quick areas">
      ${SHORTCUTS.map(s => `<a class="shortcut" href="${s.href}"><span class="ic">${ic(s.icon, 'icon-24')}</span><span>${esc(s.label)}</span></a>`).join('')}
    </nav></div>

    ${recent.length ? `<section class="section"><div class="wrap">
      <h2 class="t-section">Pick up where you stopped</h2>
      <div class="rows">${recent.map(id => row(BY_ID[id])).join('')}</div>
    </div></section>` : ''}

    <section class="section"><div class="wrap">
      <h2 class="t-section">All problems</h2>
      <div class="cat-grid">${CATS.map(c => `
        <a class="cat-tile" href="#/c/${c.id}"><span class="ic">${ic(c.icon, 'icon-20')}</span><span><h3>${esc(c.name)}</h3><p>${esc(c.blurb)}</p></span></a>`).join('')}
        <a class="cat-tile feature" href="#/keys"><span class="ic">${ic('keyboard', 'icon-20')}</span><span><h3>Boot and BIOS keys</h3><p>The key that opens the boot menu on your laptop</p></span></a>
      </div>
    </div></section>

    <section class="section"><div class="wrap">${contactCard('Can’t fix it yourself?', 'Call or WhatsApp us, or bring the laptop to the shop.')}</div></section>`;

  const sb = searchBox({ hero: true, rotate: true, camera: true });
  document.getElementById('heroSearch').appendChild(sb);
  return { title: 'Qwick Fix: fix your laptop', search: false, nav: 'home', cleanup: sb.stop };
}

function viewBrowse() {
  app.innerHTML = `<div class="wrap">
    <div class="page-head">${crumbs([{ label: 'Home', href: '#/' }, { label: 'Browse' }])}<h1 class="t-title">All problems</h1></div>
    ${CATS.map(c => `<section class="browse-group"><h2 class="t-section"><a href="#/c/${c.id}">${esc(c.name)}</a></h2>
      <div class="rows">${PROBLEMS.filter(p => p.cat === c.id).map(p => row(p)).join('')}</div></section>`).join('')}
  </div>`;
  return { title: 'All problems | Qwick Fix', search: true, nav: 'browse' };
}

function viewCategory(id) {
  const c = CAT[id];
  if (!c) return viewNotFound();
  app.innerHTML = `<div class="wrap">
    <div class="page-head">${crumbs([{ label: 'Home', href: '#/' }, { label: 'Browse', href: '#/browse' }, { label: c.name }])}
      <h1 class="t-title">${esc(c.name)}</h1><p class="t-lede">Pick the one that matches what you see.</p></div>
    <div class="rows">${PROBLEMS.filter(p => p.cat === id).map(p => row(p)).join('')}</div>
  </div>`;
  return { title: c.name + ' | Qwick Fix', search: true, nav: 'browse' };
}

function viewSearch(q, catFilter) {
  if (!q.trim()) {
    app.innerHTML = `<div class="wrap">
      <div class="page-head"><h1 class="t-title">Search</h1><p class="t-lede">Say what’s wrong in your own words, or take a photo of the screen.</p></div>
      <div id="searchAgain"></div>
      <button class="photo-cta" type="button" id="photoCta"><span class="ic">${ic('camera', 'icon-24')}</span><span><strong>Search with a photo</strong><span>Snap the error on your laptop screen. We’ll read it.</span></span></button>
      <div class="try try-left">${POPULAR.map(id => `<a class="chip" href="#/p/${id}">${esc(SHORT[id])}</a>`).join('')}</div>
    </div>`;
    const sb = searchBox({ camera: true, placeholder: 'Describe the problem' });
    document.getElementById('searchAgain').appendChild(sb);
    document.getElementById('photoCta').addEventListener('click', pickPhoto);
    return { title: 'Search | Qwick Fix', search: false, nav: 'search', focus: sb.input };
  }
  store.set('lastq', q);
  const { results, fixed, words, mode } = search(q + ' ', { final: true });
  const terms = highlightTerms(words);
  const counts = {};
  results.forEach(r => { counts[r.p.cat] = (counts[r.p.cat] || 0) + 1; });
  const shown = catFilter ? results.filter(r => r.p.cat === catFilter) : results;
  const qs = encodeURIComponent(q);
  const note = mode === 'relaxed' || mode === 'closest' ? `<p class="dym">No exact match. These are the closest.</p>` : fixed && fixed !== q.toLowerCase().trim() ? `<p class="dym">Showing results for <strong>${esc(fixed)}</strong></p>` : '';
  const quick = quickLinks(q);
  app.innerHTML = `<div class="wrap">
    <div class="page-head" style="padding-bottom:20px"><div id="searchAgain"></div></div>
    ${quick.length ? `<div class="rows" style="margin-bottom:16px">${quick.map(x => `<a class="row" href="${x.href}"><span class="ic">${ic(x.icon)}</span><span class="tx"><span class="t">${esc(x.title)}</span><span class="d">${esc(x.sub)}</span></span><span class="go">${ic('chevron')}</span></a>`).join('')}</div>` : ''}
    ${quick.length && !results.length ? '' : note}
    ${quick.length && !results.length ? '' : results.length ? `
      <p class="sr-only" role="status">${results.length} results</p>
      ${Object.keys(counts).length > 1 && results.length > 4 ? `<div class="filters" role="group" aria-label="Filter">
        <button class="chip${!catFilter ? ' on' : ''}" data-href="#/search?q=${qs}">All</button>
        ${CATS.filter(c => counts[c.id]).map(c => `<button class="chip${catFilter === c.id ? ' on' : ''}" data-href="#/search?q=${qs}&c=${c.id}">${esc(c.name)}</button>`).join('')}
      </div>` : ''}
      <div class="rows">${shown.map(r => row(r.p, { title: hl(plain(r.p.title), terms), snip: snippet(r, terms) })).join('')}</div>`
    : `<div class="empty"><h2>We couldn’t find that one</h2><p>Try saying what you see on the screen, or take a photo of it.</p>
        <div class="help-actions center"><button class="btn" type="button" id="photoCta">${ic('camera', 'icon-16')} Photo search</button><a class="btn" href="#/browse">All problems</a></div></div>`}
    <div class="section">${contactCard('Not what you need?', 'Tell us what’s happening and we’ll point you to the fix.')}</div>
  </div>`;
  const sb = searchBox({ value: q, camera: true, placeholder: 'Describe the problem' });
  document.getElementById('searchAgain').appendChild(sb);
  app.querySelectorAll('.filters .chip').forEach(b => b.addEventListener('click', () => { location.hash = b.dataset.href; }));
  const pc = document.getElementById('photoCta'); if (pc) pc.addEventListener('click', pickPhoto);
  return { title: `${q} | Qwick Fix`, search: false, nav: 'search' };
}

function viewPhoto() {
  if (!lensState) { setTimeout(() => location.replace('#/search'), 0); return viewSearch(''); }
  app.innerHTML = `<div class="wrap"><div class="page-head" style="padding-bottom:16px">${crumbs([{ label: 'Search', href: '#/search' }, { label: 'Photo' }])}<h1 class="t-title">Photo search</h1></div><div id="lens"></div></div>`;
  renderLens();
  return { title: 'Photo search | Qwick Fix', search: false, nav: 'search' };
}
function renderLens(progressOnly) {
  const box = document.getElementById('lens');
  if (!box || !lensState) return;
  const s = lensState;
  if (progressOnly) { const bar = box.querySelector('.lens-bar i'); if (bar) { bar.style.transform = `scaleX(${s.progress})`; return; } }
  const thumb = s.url ? `<img class="lens-thumb" src="${s.url}" alt="Your photo">` : '<span class="lens-thumb"></span>';
  if (s.status === 'reading' || s.status === 'ocr') {
    box.innerHTML = `<div class="lens-card">${thumb}<div><p class="lens-status">Reading your photo…</p><div class="lens-bar"><i style="transform:scaleX(${s.progress})"></i></div>
      <p class="t-caption">The first time takes a little longer. Your photo stays on your phone.</p></div></div>`;
    return;
  }
  if (s.status === 'error') {
    box.innerHTML = `<div class="lens-card">${thumb}<div><p class="lens-status">We couldn’t read that photo</p><p class="t-caption">Check your internet, or type what the screen says.</p>
      <div class="help-actions"><button class="btn" type="button" data-again>${ic('camera', 'icon-16')} Try again</button><a class="btn" href="#/search">Type it</a></div></div></div>`;
  } else {
    const all = s.text ? s.text.split(' ') : [];
    box.innerHTML = `<div class="lens-card">${thumb}<div>
        <p class="lens-status">${s.results.length ? 'This looks like' : 'No match for this screen yet'}</p>
        ${all.length ? `<p class="lens-read">We read: “${esc(all.slice(0, 24).join(' '))}${all.length > 24 ? '…' : ''}”</p>` : `<p class="t-caption">No text found. A closer, straight photo works best.</p>`}
        <div class="help-actions"><button class="btn" type="button" data-again>${ic('camera', 'icon-16')} Another photo</button></div>
      </div></div>
      ${s.results.length ? `<div class="rows" style="margin-top:16px">${s.results.map(r => row(r.p)).join('')}</div>` : ''}
      <div class="section">${contactCard('Send it to us instead', 'WhatsApp us the photo and we’ll tell you what to do.')}</div>`;
  }
  const again = box.querySelector('[data-again]'); if (again) again.addEventListener('click', pickPhoto);
}

function figure(img, cap, idx) {
  return `<figure><button class="shot-btn" data-shot="${idx}" aria-label="Enlarge: ${esc(cap)}">
    <img src="${imgUrl(img)}" alt="${esc(cap)}" loading="lazy" decoding="async"><span class="zoom">${ic('zoom', 'icon-16')}</span></button>
    ${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`;
}

function viewProblem(id) {
  const p = BY_ID[id];
  if (!p) return viewNotFound();
  const c = CAT[p.cat];
  const done = new Set(store.get('done:' + id, []));
  const solvedBy = store.get('solved:' + id, null);
  const platform = p.platforms ? store.get('platform', /Mac/i.test(navigator.platform) ? 'mac' : 'windows') : null;
  const shots = [];
  const addShot = (img, cap) => { shots.push({ img, cap }); return shots.length - 1; };
  const recent = store.get('recent', []).filter(x => x !== id); recent.unshift(id); store.set('recent', recent.slice(0, 8));

  const visible = p.fixes.map((f, fi) => ({ f, fi })).filter(({ f }) => !f.platform || !platform || f.platform === platform);

  const seeHtml = p.see && p.see.length ? `<section class="block"><h2 class="t-section">Is this what you see?</h2>
    <div class="see">${p.see.map(s => figure(s.img, s.cap, addShot(s.img, s.cap))).join('')}</div></section>` : '';

  const fixesHtml = visible.map(({ f, fi }, vi) => {
    const steps = f.steps.map((st, si) => {
      const key = fi + '-' + si;
      const o = typeof st === 'string' ? { t: st } : st;
      const cmds = o.cmd ? `<div class="cmds">${o.cmd.map(cm => `<div class="cmd"><code>${esc(cm)}</code><button class="copy" type="button" data-copy="${esc(cm)}">${ic('copy', 'icon-16')}<span>Copy</span></button></div>`).join('')}</div>` : '';
      const table = o.table === 'bootkeys' ? `<div class="bootkeys">${BOOT_KEYS.map(([b, k]) => `<div>${esc(b)} <kbd>${k}</kbd></div>`).join('')}</div>`
        : o.table === 'stopcodes' || o.table === 'errorcodes' ? codeTable(o.table) : '';
      const fig = o.img ? figure(o.img, o.cap || '', addShot(o.img, o.cap || '')) : '';
      return `<li class="step${done.has(key) ? ' done' : ''}" data-key="${key}">
        <button class="step-check" type="button" aria-pressed="${done.has(key)}" aria-label="Step ${si + 1}, mark as done"><span>${si + 1}</span>${ic('check')}</button>
        <div class="step-body"><p>${fmt(o.t)}</p>${cmds}${table}${fig}</div></li>`;
    }).join('');
    const isLast = vi === visible.length - 1;
    const solved = solvedBy === fi;
    const askVerdict = !p.platforms && !p.guide && !f.noVerdict && visible.length > 1;
    return `<article class="fix${solved ? ' solved' : ''}" id="fix-${vi + 1}" data-fix="${vi}">
      <div class="fix-head"><span class="fix-num">${solved ? ic('check', 'icon-16') : vi + 1}</span>
        <h3 class="fix-title">${esc(f.title)}</h3>${f.level === 3 ? '<span class="tag">Advanced</span>' : ''}</div>
      ${f.when ? `<p class="fix-when">${fmt(f.when)}</p>` : ''}
      ${f.warn ? `<div class="callout warn">${ic('alert')}<div>${fmt(f.warn)}</div></div>` : ''}
      <ol class="steps">${steps}</ol>
      ${askVerdict ? `<div class="verdict">${solved
        ? `<div class="solved-note">${ic('check')}<div>Fixed. Nice work. For a laptop tip every day, <a href="${CONTACT.group}" target="_blank" rel="noopener">join our WhatsApp group</a>.</div></div>`
        : `<span class="q">Did this fix it?</span><button class="btn btn-primary" type="button" data-yes="${fi}">Yes</button><button class="btn" type="button" data-no="${vi}">${isLast ? 'No' : 'No, next fix'}</button>`}</div>` : ''}
    </article>`;
  }).join('');

  const total = visible.reduce((n, { f }) => n + f.steps.length, 0);
  const countDone = () => [...done].filter(k => visible.some(v => k.startsWith(v.fi + '-'))).length;
  const related = (p.related || []).map(r => BY_ID[r]).filter(Boolean);

  app.innerHTML = `<div class="wrap"><div class="problem">
    <div class="problem-main">
      <div class="page-head" style="padding-bottom:0">
        ${crumbs([{ label: 'Home', href: '#/' }, { label: c.name, href: '#/c/' + c.id }])}
        <h1 class="t-title">${esc(plain(p.title))}</h1>
        <p class="t-lede">${fmt(p.summary)}</p>
      </div>
      ${seeHtml}
      ${p.warn ? `<div class="block"><div class="callout warn">${ic('alert')}<div>${fmt(p.warn)}</div></div></div>` : ''}
      ${p.causes && p.causes.length ? `<details class="block why"><summary><span class="t-section">Why it happens</span>${ic('chevron')}</summary><ul class="causes">${p.causes.map(x => `<li>${fmt(x)}</li>`).join('')}</ul></details>` : ''}
      <section class="block" id="fixes"><h2 class="t-section">${p.platforms ? 'How to get it' : p.guide ? 'What to do' : visible.length > 1 ? 'Try these in order' : 'How to fix it'}</h2>
        ${p.platforms ? `<div class="seg" role="group" aria-label="Your laptop">
          <button type="button" data-plat="windows" aria-pressed="${platform === 'windows'}">Windows</button>
          <button type="button" data-plat="mac" aria-pressed="${platform === 'mac'}">Mac</button></div>` : ''}
        ${fixesHtml}
      </section>
      ${p.after && p.after.length ? `<section class="block">${p.after.map(a => `<div class="callout tip">${ic('bulb')}<div>${fmt(a)}</div></div>`).join('')}</section>` : ''}
      <section class="block" id="stuck">${contactCard('Still not fixed?', 'Call or WhatsApp us and say which fixes you tried. Or bring the laptop to the shop.')}</section>
      ${related.length ? `<section class="block"><h2 class="t-section">Related</h2><div class="rows">${related.map(r => row(r)).join('')}</div></section>` : ''}
    </div>
    ${visible.length > 1 ? `<aside class="aside glass" aria-label="Fixes on this page">
      <ol class="toc">${visible.map(({ f, fi }, vi) => `<li><a href="#/p/${id}" data-jump="fix-${vi + 1}"><span class="n">${solvedBy === fi ? '<span class="ok">✓</span>' : vi + 1}</span><span>${esc(f.title)}</span></a></li>`).join('')}</ol>
      <div class="progress"><div class="progress-bar"><i style="transform:scaleX(${countDone() / total})"></i></div>
        <p class="t-caption"><span id="progCount">${countDone()}</span> of ${total} steps done · <button class="reset-link" type="button" id="resetProg">Reset</button></p></div>
    </aside>` : ''}
  </div></div>`;

  const saveDone = () => {
    store.set('done:' + id, [...done]);
    const n = countDone();
    const bar = app.querySelector('.progress-bar i'); if (bar) bar.style.transform = `scaleX(${n / total})`;
    const pc = document.getElementById('progCount'); if (pc) pc.textContent = n;
  };
  app.querySelectorAll('.step-check').forEach(b => b.addEventListener('click', () => {
    const li = b.closest('.step'); const key = li.dataset.key; const on = !done.has(key);
    on ? done.add(key) : done.delete(key);
    li.classList.toggle('done', on); b.setAttribute('aria-pressed', on); saveDone();
  }));
  const rp = document.getElementById('resetProg');
  if (rp) rp.addEventListener('click', () => { done.clear(); store.set('solved:' + id, null); saveDone(); route(true); });
  app.querySelectorAll('[data-yes]').forEach(b => b.addEventListener('click', () => {
    store.set('solved:' + id, +b.dataset.yes); route(true);
    const vi = visible.findIndex(v => v.fi === +b.dataset.yes);
    requestAnimationFrame(() => document.getElementById('fix-' + (vi + 1)).scrollIntoView({ block: 'center' }));
  }));
  app.querySelectorAll('[data-no]').forEach(b => b.addEventListener('click', () => {
    const next = document.getElementById('fix-' + (+b.dataset.no + 2)) || document.getElementById('stuck');
    next.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
  }));
  app.querySelectorAll('[data-plat]').forEach(b => b.addEventListener('click', () => { store.set('platform', b.dataset.plat); route(true); }));
  app.querySelectorAll('[data-jump]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); document.getElementById(a.dataset.jump).scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
  }));
  app.querySelectorAll('.copy').forEach(b => b.addEventListener('click', () => copyText(b)));
  app.querySelectorAll('[data-shot]').forEach(b => b.addEventListener('click', () => lightbox.open(shots, +b.dataset.shot, b)));
  app.querySelectorAll('[data-codes]').forEach(box => {
    const input = box.querySelector('input'); const rowsEl = [...box.querySelectorAll('.code-row')]; const none = box.querySelector('.codes-none');
    input.addEventListener('input', () => {
      const k = codeKey(input.value); let shown = 0;
      rowsEl.forEach(r => { const ok = !k || r.dataset.key.includes(k); r.hidden = !ok; if (ok) shown++; });
      none.hidden = shown > 0;
    });
  });

  let stop = null;
  const tocLinks = [...app.querySelectorAll('.toc a')];
  if ('IntersectionObserver' in window && tocLinks.length) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { const i = +en.target.dataset.fix; tocLinks.forEach((l, j) => l.classList.toggle('current', j === i)); }
    }), { rootMargin: '-30% 0px -60% 0px' });
    app.querySelectorAll('.fix').forEach(f => io.observe(f));
    stop = () => io.disconnect();
  }
  return { title: plain(p.title) + ' | Qwick Fix', search: true, nav: 'browse', cleanup: stop };
}

/* ───────── Boot keys ───────── */
const FKEYS = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Del'];
function viewKeys() {
  let brand = store.get('brand', 'HP');
  if (!BOOT_KEYS.find(b => b[0] === brand)) brand = 'HP';
  const staticStep = (t, i, extra = '') => `<li class="step"><span class="step-check static" aria-hidden="true"><span>${i + 1}</span></span><div class="step-body"><p>${fmt(t)}</p>${extra}</div></li>`;
  app.innerHTML = `<div class="wrap">
    <div class="page-head">${crumbs([{ label: 'Home', href: '#/' }, { label: 'Boot keys' }])}
      <h1 class="t-title">Boot and BIOS keys</h1>
      <p class="t-lede">Pick your laptop brand to see which key to press right after you turn it on.</p></div>
    <div class="keys-card">
      <div class="chips-row" role="group" aria-label="Laptop brand">
        ${BOOT_KEYS.map(([b]) => `<button class="chip" type="button" data-brand="${b}" aria-pressed="${b === brand}">${b}</button>`).join('')}
      </div>
      <div class="deck" aria-hidden="true">
        <div class="keyrow">${FKEYS.map(k => `<span class="key${k === 'Esc' || k === 'Del' ? ' wide' : ''}" data-k="${k}">${k}</span>`).join('')}</div>
        <div class="keyrow">${['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map(k => `<span class="key tall">${k}</span>`).join('')}</div>
      </div>
      <div class="keys-result" aria-live="polite">
        <div class="keys-stat boot"><div class="label">Boot menu</div><div class="val" id="kBoot"></div><p class="what">To start from a USB drive, like when installing Windows.</p></div>
        <div class="keys-stat bios"><div class="label">BIOS</div><div class="val" id="kBios"></div><p class="what">The laptop’s built-in settings, like the boot order.</p></div>
      </div>
      <p class="keys-note" id="kNote"></p>
    </div>
    <section class="block"><h2 class="t-section">How to press it</h2>
      <ol class="steps">${['Shut the laptop down completely.', 'Press the power button. Straight away, tap the key about once every second. Don’t hold it down.', 'When the menu shows, use the arrow keys and hit [[Enter]].'].map((t, i) => staticStep(t, i)).join('')}</ol>
    </section>
    <details class="block why"><summary><span class="t-section">The key doesn’t work?</span>${ic('chevron')}</summary>
      <ol class="steps">${staticStep('Start Windows. Hold [[Shift]] and click **Restart**.', 0)}${staticStep('Click **Troubleshoot → Advanced options → UEFI Firmware Settings → Restart**. It opens BIOS for you.', 1, figure('recovery-06', 'UEFI Firmware Settings', 0))}</ol>
    </details>
    <section class="block"><h2 class="t-section">All brands</h2>
      <div class="rows"><table class="keys-table"><thead><tr><th scope="col">Brand</th><th scope="col">Boot menu</th><th scope="col">BIOS</th></tr></thead>
      <tbody>${BOOT_KEYS.map(([b, k, bios]) => `<tr data-row="${b}"><td>${b}</td><td><kbd>${k}</kbd></td><td><kbd>${bios}</kbd></td></tr>`).join('')}</tbody></table></div>
    </section>
  </div>`;
  function show() {
    const [, boot, bios, note] = BOOT_KEYS.find(b => b[0] === brand);
    app.querySelectorAll('.key[data-k]').forEach(k => { k.classList.toggle('boot', k.dataset.k === boot); k.classList.toggle('bios', k.dataset.k === bios && bios !== boot); });
    app.querySelectorAll('[data-brand]').forEach(b => b.setAttribute('aria-pressed', b.dataset.brand === brand));
    app.querySelectorAll('[data-row]').forEach(r => r.classList.toggle('on', r.dataset.row === brand));
    document.getElementById('kBoot').innerHTML = `<kbd>${boot}</kbd>`;
    document.getElementById('kBios').innerHTML = `<kbd>${bios}</kbd>`;
    const n = document.getElementById('kNote'); n.textContent = note; n.hidden = !note;
    store.set('brand', brand);
  }
  app.querySelectorAll('[data-brand]').forEach(b => b.addEventListener('click', () => { brand = b.dataset.brand; show(); }));
  app.querySelectorAll('[data-shot]').forEach(b => b.addEventListener('click', () => lightbox.open([{ img: 'recovery-06', cap: 'UEFI Firmware Settings' }], 0, b)));
  show();
  return { title: 'Boot and BIOS keys | Qwick Fix', search: true, nav: 'keys' };
}

function viewContact() {
  app.innerHTML = `<div class="wrap">
    <div class="page-head">${crumbs([{ label: 'Home', href: '#/' }, { label: 'Contact' }])}
      <h1 class="t-title">Talk to us</h1>
      <p class="t-lede">Stuck on a step, or the laptop needs hands-on repair? Call, WhatsApp, or come to the shop.</p></div>
    <div class="contact-grid">
      <a class="contact-tile" href="tel:${CONTACT.phone}"><span class="ic">${ic('phone', 'icon-24')}</span><span><strong>Call</strong><span>${CONTACT.phoneLabel}</span></span></a>
      <a class="contact-tile" href="${CONTACT.whatsapp}" target="_blank" rel="noopener"><span class="ic">${ic('chat', 'icon-24')}</span><span><strong>WhatsApp</strong><span>Send a photo of the screen</span></span></a>
      <a class="contact-tile" href="${CONTACT.map}" target="_blank" rel="noopener"><span class="ic">${ic('pin', 'icon-24')}</span><span><strong>Visit</strong><span>${esc(CONTACT.location)}</span></span></a>
    </div>
    <div class="callout tip" style="margin-top:24px">${ic('bulb')}<div>When you message us, say your laptop brand and model, what the screen shows, and what you already tried.</div></div>
    <a class="group-card" href="${CONTACT.group}" target="_blank" rel="noopener">
      <span class="ic">${ic('users', 'icon-24')}</span>
      <span><strong>Join the Qwick Fix WhatsApp group</strong><span>A laptop tip every day, tech news, and students helping each other with laptop issues.</span></span>
      <span class="go">${ic('chevron')}</span>
    </a>
  </div>`;
  return { title: 'Contact | Qwick Fix', search: true, nav: 'contact' };
}

function viewNotFound() {
  app.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="t-title">Page not found</h1><p class="t-lede">Try searching instead.</p></div><div id="nfSearch"></div></div>`;
  document.getElementById('nfSearch').appendChild(searchBox({ camera: true }));
  return { title: 'Not found | Qwick Fix', search: false };
}

/* ───────── Copy ───────── */
function copyText(btn) {
  const text = btn.dataset.copy;
  const ok = () => { btn.classList.add('done'); btn.querySelector('span').textContent = 'Copied'; setTimeout(() => { btn.classList.remove('done'); btn.querySelector('span').textContent = 'Copy'; }, 1600); };
  const fallback = () => {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) {} ta.remove();
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
}

/* ───────── Lightbox ───────── */
const lightbox = (() => {
  const el = document.getElementById('lightbox');
  const img = el.querySelector('img'); const cap = el.querySelector('.cap');
  let list = [], i = 0, opener = null, startX = null;
  function show() {
    const s = list[i]; img.src = imgUrl(s.img); img.alt = s.cap;
    cap.innerHTML = `${esc(s.cap)}${list.length > 1 ? `<span>${i + 1} / ${list.length}</span>` : ''}`;
    el.querySelector('.lb-prev').style.display = el.querySelector('.lb-next').style.display = list.length > 1 ? '' : 'none';
  }
  function open(l, idx, from) { list = l; i = idx; opener = from; show(); el.classList.add('open'); document.body.style.overflow = 'hidden'; el.querySelector('.lb-close').focus(); }
  function close() { el.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); }
  const step = d => { i = (i + d + list.length) % list.length; show(); };
  el.addEventListener('click', e => { const a = e.target.closest('[data-lb]'); if (a) { a.dataset.lb === 'close' ? close() : step(a.dataset.lb === 'next' ? 1 : -1); } else if (e.target === el) close(); });
  el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => { if (startX == null || list.length < 2) return; const dx = e.changedTouches[0].clientX - startX; startX = null; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); });
  document.addEventListener('keydown', e => {
    if (!el.classList.contains('open')) return;
    if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') step(1); else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'Tab') { const f = [...el.querySelectorAll('button')].filter(b => b.style.display !== 'none'); const k = f.indexOf(document.activeElement); e.preventDefault(); f[(k + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
  });
  return { open };
})();

/* ───────── Theme ───────── */
const themeBtn = document.getElementById('themeBtn');
const currentTheme = () => document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
function paintThemeBtn() { const t = currentTheme(); themeBtn.innerHTML = ic(t === 'dark' ? 'sun' : 'moon'); themeBtn.setAttribute('aria-label', t === 'dark' ? 'Light mode' : 'Dark mode'); }
themeBtn.addEventListener('click', () => { const t = currentTheme() === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = t; try { localStorage.setItem('qf:theme', t); } catch (e) {} paintThemeBtn(); });
paintThemeBtn();

/* ───────── Footer and tab bar ───────── */
document.getElementById('footContact').innerHTML = `
  <a href="tel:${CONTACT.phone}">${ic('phone', 'icon-16')}${CONTACT.phoneLabel}</a>
  <a href="${CONTACT.whatsapp}" target="_blank" rel="noopener">${ic('chat', 'icon-16')}WhatsApp</a>
  <a href="${CONTACT.map}" target="_blank" rel="noopener">${ic('pin', 'icon-16')}${esc(CONTACT.location)}</a>
  <a href="${CONTACT.group}" target="_blank" rel="noopener">${ic('users', 'icon-16')}WhatsApp group</a>`;
document.getElementById('tabbar').innerHTML = [['home', '#/', 'home', 'Home'], ['browse', '#/browse', 'grid', 'Browse'], ['search', '#/search', 'search', 'Search'], ['keys', '#/keys', 'keyboard', 'Boot keys'], ['contact', '#/contact', 'phone', 'Contact']]
  .map(([k, href, icon, label]) => `<a href="${href}" data-nav="${k}">${ic(icon, 'icon-20')}<span>${label}</span></a>`).join('');

/* ───────── Router ───────── */
let cleanup = null, topBox = null, lastPath = null;
function route(keepScroll) {
  if (cleanup) { cleanup(); cleanup = null; }
  const h = location.hash.replace(/^#/, '') || '/';
  const [path, qs] = h.split('?');
  const params = new URLSearchParams(qs || '');
  let r;
  if (path === '/' || path === '') r = viewHome();
  else if (path === '/browse') r = viewBrowse();
  else if (path === '/keys') r = viewKeys();
  else if (path === '/contact') r = viewContact();
  else if (path === '/photo') r = viewPhoto();
  else if (path.startsWith('/c/')) r = viewCategory(path.slice(3));
  else if (path.startsWith('/p/')) r = viewProblem(path.slice(3));
  else if (path === '/search') r = viewSearch(params.get('q') || '', params.get('c'));
  else r = viewNotFound();
  cleanup = r.cleanup || null;
  document.title = r.title;
  document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === r.nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  topSearch.hidden = !r.search;
  if (r.search && !topBox) { topBox = searchBox({ placeholder: 'Search problems' }); topSearch.appendChild(topBox); }
  if (topBox) { topBox.input.value = ''; topBox.classList.remove('has-value', 'typing'); }
  if (!keepScroll && path !== lastPath) {
    window.scrollTo(0, 0);
    if (r.focus && matchMedia('(min-width: 641px)').matches) r.focus.focus({ preventScroll: true });
    else if (lastPath !== null) app.focus({ preventScroll: true });
  }
  lastPath = path;
}
window.addEventListener('hashchange', () => route());
route();
})();
