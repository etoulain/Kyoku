// ═══════════════════════════════════════════════════════════════════
// KARATE FIGURE SVG LIBRARY
// Each SVG is a 120×140 viewBox inline figure, gold on dark bg
// Keyed by romaji (lowercase, no spaces) matching technique data
// ═══════════════════════════════════════════════════════════════════

const FIGS = {};

// ── Helper: base SVG wrapper ──────────────────────────────────────
function fig(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140" class="tech-fig" aria-hidden="true">
  <rect width="120" height="140" fill="#111114" rx="6"/>
  <g stroke="#c9a84c" stroke-linecap="round" stroke-linejoin="round" fill="none">
  ${body}
  </g></svg>`;
}
// body parts helpers (gold stroke)
// Head: circle at cx,cy r=8
// Torso: line from neck to hip
// Limbs: lines

// ══ STANCES ════════════════════════════════════════════════════════

// Heiko Dachi – parallel stance, standing upright, feet parallel
FIGS['heikodachi'] = fig(`
  <circle cx="60" cy="22" r="8" stroke-width="2"/>
  <line x1="60" y1="30" x2="60" y2="75" stroke-width="2.5"/>
  <line x1="60" y1="45" x2="40" y2="60" stroke-width="2"/>
  <line x1="60" y1="45" x2="80" y2="60" stroke-width="2"/>
  <line x1="60" y1="75" x2="45" y2="110" stroke-width="2.5"/>
  <line x1="60" y1="75" x2="75" y2="110" stroke-width="2.5"/>
  <line x1="45" y1="110" x2="45" y2="125" stroke-width="2"/>
  <line x1="75" y1="110" x2="75" y2="125" stroke-width="2"/>
  <line x1="45" y1="125" x2="35" y2="128" stroke-width="1.5"/>
  <line x1="75" y1="125" x2="85" y2="128" stroke-width="1.5"/>
`);

// Zenkutsu Dachi – front stance, front knee bent, rear leg straight
FIGS['zenkutsudachi'] = fig(`
  <circle cx="55" cy="20" r="8" stroke-width="2"/>
  <line x1="55" y1="28" x2="52" y2="72" stroke-width="2.5"/>
  <line x1="54" y1="45" x2="30" y2="55" stroke-width="2"/>
  <line x1="30" y1="55" x2="26" y2="68" stroke-width="1.8"/>
  <line x1="54" y1="45" x2="78" y2="50" stroke-width="2"/>
  <line x1="78" y1="50" x2="82" y2="62" stroke-width="1.8"/>
  <line x1="52" y1="72" x2="42" y2="108" stroke-width="2.5"/>
  <line x1="42" y1="108" x2="42" y2="128" stroke-width="2"/>
  <line x1="42" y1="128" x2="28" y2="130" stroke-width="1.5"/>
  <line x1="52" y1="72" x2="78" y2="85" stroke-width="2.5"/>
  <line x1="78" y1="85" x2="85" y2="125" stroke-width="2.5"/>
  <line x1="85" y1="125" x2="98" y2="128" stroke-width="1.5"/>
`);

// Kokutsu Dachi – back stance, weight on rear
FIGS['kokutsudachi'] = fig(`
  <circle cx="50" cy="20" r="8" stroke-width="2"/>
  <line x1="50" y1="28" x2="55" y2="72" stroke-width="2.5"/>
  <line x1="53" y1="44" x2="75" y2="52" stroke-width="2"/>
  <line x1="75" y1="52" x2="82" y2="65" stroke-width="1.8"/>
  <line x1="53" y1="44" x2="32" y2="56" stroke-width="2"/>
  <line x1="32" y1="56" x2="28" y2="68" stroke-width="1.8"/>
  <line x1="55" y1="72" x2="70" y2="85" stroke-width="2.5"/>
  <line x1="70" y1="85" x2="78" y2="125" stroke-width="2.5"/>
  <line x1="78" y1="125" x2="92" y2="128" stroke-width="1.5"/>
  <line x1="55" y1="72" x2="42" y2="100" stroke-width="2.5"/>
  <line x1="42" y1="100" x2="38" y2="125" stroke-width="2"/>
  <line x1="38" y1="125" x2="25" y2="128" stroke-width="1.5"/>
`);

// Kiba Dachi – horse stance, feet wide, knees out
FIGS['kibadachi'] = fig(`
  <circle cx="60" cy="18" r="8" stroke-width="2"/>
  <line x1="60" y1="26" x2="60" y2="68" stroke-width="2.5"/>
  <line x1="60" y1="42" x2="38" y2="54" stroke-width="2"/>
  <line x1="38" y1="54" x2="32" y2="68" stroke-width="1.8"/>
  <line x1="60" y1="42" x2="82" y2="54" stroke-width="2"/>
  <line x1="82" y1="54" x2="88" y2="68" stroke-width="1.8"/>
  <line x1="60" y1="68" x2="35" y2="92" stroke-width="2.5"/>
  <line x1="35" y1="92" x2="22" y2="125" stroke-width="2.5"/>
  <line x1="22" y1="125" x2="10" y2="128" stroke-width="1.5"/>
  <line x1="60" y1="68" x2="85" y2="92" stroke-width="2.5"/>
  <line x1="85" y1="92" x2="98" y2="125" stroke-width="2.5"/>
  <line x1="98" y1="125" x2="110" y2="128" stroke-width="1.5"/>
`);

// Sanchin Dachi – hourglass stance, toes in, knees in
FIGS['sanchindachi'] = fig(`
  <circle cx="60" cy="20" r="8" stroke-width="2"/>
  <line x1="60" y1="28" x2="60" y2="74" stroke-width="2.5"/>
  <line x1="60" y1="44" x2="40" y2="56" stroke-width="2"/>
  <line x1="40" y1="56" x2="36" y2="70" stroke-width="1.8"/>
  <line x1="60" y1="44" x2="80" y2="56" stroke-width="2"/>
  <line x1="80" y1="56" x2="84" y2="70" stroke-width="1.8"/>
  <line x1="60" y1="74" x2="48" y2="108" stroke-width="2.5"/>
  <line x1="48" y1="108" x2="52" y2="126" stroke-width="2"/>
  <line x1="52" y1="126" x2="40" y2="130" stroke-width="1.5"/>
  <line x1="60" y1="74" x2="72" y2="108" stroke-width="2.5"/>
  <line x1="72" y1="108" x2="68" y2="126" stroke-width="2"/>
  <line x1="68" y1="126" x2="80" y2="130" stroke-width="1.5"/>
`);

// Yoi Dachi – ready stance 50-50
FIGS['yoidachi'] = fig(`
  <circle cx="60" cy="21" r="8" stroke-width="2"/>
  <line x1="60" y1="29" x2="60" y2="73" stroke-width="2.5"/>
  <line x1="60" y1="46" x2="38" y2="60" stroke-width="2"/>
  <line x1="38" y1="60" x2="33" y2="75" stroke-width="1.8"/>
  <line x1="60" y1="46" x2="82" y2="60" stroke-width="2"/>
  <line x1="82" y1="60" x2="87" y2="75" stroke-width="1.8"/>
  <line x1="60" y1="73" x2="46" y2="108" stroke-width="2.5"/>
  <line x1="46" y1="108" x2="43" y2="126" stroke-width="2"/>
  <line x1="43" y1="126" x2="30" y2="130" stroke-width="1.5"/>
  <line x1="60" y1="73" x2="74" y2="108" stroke-width="2.5"/>
  <line x1="74" y1="108" x2="77" y2="126" stroke-width="2"/>
  <line x1="77" y1="126" x2="90" y2="130" stroke-width="1.5"/>
`);

// ══ PUNCHES / TE WAZA ══════════════════════════════════════════════

// Seiken Jodan Tsuki – upper punch
FIGS['seikenjodan'] = FIGS['seikenjodan'] || fig(`
  <circle cx="52" cy="22" r="8" stroke-width="2"/>
  <line x1="52" y1="30" x2="50" y2="75" stroke-width="2.5"/>
  <line x1="51" y1="46" x2="22" y2="38" stroke-width="2"/>
  <line x1="22" y1="38" x2="10" y2="32" stroke-width="2.5"/>
  <rect x="6" y="29" width="8" height="6" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="51" y1="46" x2="76" y2="58" stroke-width="2"/>
  <line x1="76" y1="58" x2="82" y2="72" stroke-width="1.8"/>
  <line x1="50" y1="75" x2="36" y2="110" stroke-width="2.5"/>
  <line x1="36" y1="110" x2="30" y2="128" stroke-width="2"/>
  <line x1="30" y1="128" x2="18" y2="131" stroke-width="1.5"/>
  <line x1="50" y1="75" x2="64" y2="108" stroke-width="2.5"/>
  <line x1="64" y1="108" x2="72" y2="126" stroke-width="2"/>
  <line x1="72" y1="126" x2="85" y2="130" stroke-width="1.5"/>
  <text x="60" y="135" font-size="7" fill="#c9a84c" text-anchor="middle" font-family="serif">Jodan</text>
`);

// Seiken Chudan Tsuki – middle punch
FIGS['seikenchudantsuki'] = fig(`
  <circle cx="52" cy="22" r="8" stroke-width="2"/>
  <line x1="52" y1="30" x2="50" y2="75" stroke-width="2.5"/>
  <line x1="51" y1="46" x2="18" y2="52" stroke-width="2"/>
  <line x1="18" y1="52" x2="8" y2="52" stroke-width="2.5"/>
  <rect x="4" y="48" width="8" height="6" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="51" y1="46" x2="76" y2="58" stroke-width="2"/>
  <line x1="76" y1="58" x2="80" y2="72" stroke-width="1.8"/>
  <line x1="50" y1="75" x2="36" y2="110" stroke-width="2.5"/>
  <line x1="36" y1="110" x2="30" y2="128" stroke-width="2"/>
  <line x1="30" y1="128" x2="18" y2="131" stroke-width="1.5"/>
  <line x1="50" y1="75" x2="64" y2="108" stroke-width="2.5"/>
  <line x1="64" y1="108" x2="72" y2="126" stroke-width="2"/>
  <line x1="72" y1="126" x2="85" y2="130" stroke-width="1.5"/>
  <text x="60" y="135" font-size="7" fill="#c9a84c" text-anchor="middle" font-family="serif">Chudan</text>
`);

// Gyaku Tsuki – reverse punch
FIGS['gyakutsuki'] = fig(`
  <circle cx="55" cy="22" r="8" stroke-width="2"/>
  <line x1="55" y1="30" x2="52" y2="74" stroke-width="2.5"/>
  <line x1="53" y1="46" x2="88" y2="50" stroke-width="2"/>
  <line x1="88" y1="50" x2="100" y2="50" stroke-width="2.5"/>
  <rect x="100" y="46" width="8" height="6" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="53" y1="46" x2="28" y2="60" stroke-width="2"/>
  <line x1="28" y1="60" x2="22" y2="74" stroke-width="1.8"/>
  <line x1="52" y1="74" x2="36" y2="108" stroke-width="2.5"/>
  <line x1="36" y1="108" x2="28" y2="128" stroke-width="2"/>
  <line x1="28" y1="128" x2="15" y2="131" stroke-width="1.5"/>
  <line x1="52" y1="74" x2="68" y2="108" stroke-width="2.5"/>
  <line x1="68" y1="108" x2="78" y2="126" stroke-width="2"/>
  <line x1="78" y1="126" x2="92" y2="130" stroke-width="1.5"/>
`);

// Uraken Uchi – back fist
FIGS['urakenuchi'] = fig(`
  <circle cx="60" cy="22" r="8" stroke-width="2"/>
  <line x1="60" y1="30" x2="58" y2="74" stroke-width="2.5"/>
  <line x1="59" y1="44" x2="90" y2="30" stroke-width="2"/>
  <line x1="90" y1="30" x2="108" y2="24" stroke-width="2"/>
  <rect x="104" y="20" width="8" height="6" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="59" y1="44" x2="34" y2="60" stroke-width="2"/>
  <line x1="34" y1="60" x2="28" y2="74" stroke-width="1.8"/>
  <line x1="58" y1="74" x2="44" y2="108" stroke-width="2.5"/>
  <line x1="44" y1="108" x2="38" y2="126" stroke-width="2"/>
  <line x1="38" y1="126" x2="25" y2="130" stroke-width="1.5"/>
  <line x1="58" y1="74" x2="72" y2="108" stroke-width="2.5"/>
  <line x1="72" y1="108" x2="80" y2="125" stroke-width="2"/>
  <line x1="80" y1="125" x2="93" y2="129" stroke-width="1.5"/>
  <path d="M59,44 Q75,35 90,30" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Uraken Jodan Yoko Uchi – side backfist
FIGS['urakenjodan'] = FIGS['urakenjodan'] || fig(`
  <circle cx="60" cy="22" r="8" stroke-width="2"/>
  <line x1="60" y1="30" x2="58" y2="74" stroke-width="2.5"/>
  <line x1="59" y1="44" x2="100" y2="42" stroke-width="2"/>
  <line x1="100" y1="42" x2="112" y2="36" stroke-width="2"/>
  <rect x="108" y="32" width="8" height="6" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="59" y1="44" x2="34" y2="58" stroke-width="2"/>
  <line x1="34" y1="58" x2="28" y2="72" stroke-width="1.8"/>
  <line x1="58" y1="74" x2="44" y2="108" stroke-width="2.5"/>
  <line x1="44" y1="108" x2="38" y2="126" stroke-width="2"/>
  <line x1="38" y1="126" x2="25" y2="130" stroke-width="1.5"/>
  <line x1="58" y1="74" x2="72" y2="108" stroke-width="2.5"/>
  <line x1="72" y1="108" x2="80" y2="125" stroke-width="2"/>
  <line x1="80" y1="125" x2="93" y2="129" stroke-width="1.5"/>
  <text x="60" y="137" font-size="6.5" fill="#c9a84c" text-anchor="middle" font-family="serif">Yoko Uchi</text>
`);

// Empi Uchi – elbow strike
FIGS['empiuchi'] = fig(`
  <circle cx="55" cy="22" r="8" stroke-width="2"/>
  <line x1="55" y1="30" x2="52" y2="74" stroke-width="2.5"/>
  <line x1="53" y1="44" x2="84" y2="38" stroke-width="2"/>
  <line x1="84" y1="38" x2="96" y2="52" stroke-width="2"/>
  <circle cx="84" cy="38" r="5" stroke-width="2" fill="rgba(201,168,76,0.2)"/>
  <line x1="53" y1="44" x2="28" y2="58" stroke-width="2"/>
  <line x1="28" y1="58" x2="22" y2="72" stroke-width="1.8"/>
  <line x1="52" y1="74" x2="38" y2="108" stroke-width="2.5"/>
  <line x1="38" y1="108" x2="32" y2="127" stroke-width="2"/>
  <line x1="32" y1="127" x2="19" y2="131" stroke-width="1.5"/>
  <line x1="52" y1="74" x2="66" y2="108" stroke-width="2.5"/>
  <line x1="66" y1="108" x2="74" y2="126" stroke-width="2"/>
  <line x1="74" y1="126" x2="88" y2="130" stroke-width="1.5"/>
  <path d="M53,44 Q70,38 84,38" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Seiken Kagi Tsuki – hook punch
FIGS['seikenkagitsuki'] = fig(`
  <circle cx="55" cy="22" r="8" stroke-width="2"/>
  <line x1="55" y1="30" x2="52" y2="74" stroke-width="2.5"/>
  <line x1="53" y1="46" x2="82" y2="46" stroke-width="2"/>
  <line x1="82" y1="46" x2="90" y2="56" stroke-width="2"/>
  <rect x="86" y="52" width="7" height="5" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="53" y1="46" x2="30" y2="58" stroke-width="2"/>
  <line x1="30" y1="58" x2="24" y2="72" stroke-width="1.8"/>
  <line x1="52" y1="74" x2="38" y2="108" stroke-width="2.5"/>
  <line x1="38" y1="108" x2="32" y2="127" stroke-width="2"/>
  <line x1="32" y1="127" x2="19" y2="131" stroke-width="1.5"/>
  <line x1="52" y1="74" x2="66" y2="108" stroke-width="2.5"/>
  <line x1="66" y1="108" x2="74" y2="126" stroke-width="2"/>
  <line x1="74" y1="126" x2="88" y2="130" stroke-width="1.5"/>
`);

// ══ BLOCKS / UKE WAZA ══════════════════════════════════════════════

// Gedan Barai – low block
FIGS['gedanbarai'] = fig(`
  <circle cx="55" cy="22" r="8" stroke-width="2"/>
  <line x1="55" y1="30" x2="52" y2="74" stroke-width="2.5"/>
  <line x1="53" y1="46" x2="80" y2="54" stroke-width="2"/>
  <line x1="80" y1="54" x2="88" y2="68" stroke-width="1.8"/>
  <line x1="53" y1="46" x2="22" y2="76" stroke-width="2.5"/>
  <line x1="22" y1="76" x2="15" y2="90" stroke-width="2"/>
  <rect x="11" y="86" width="7" height="5" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="52" y1="74" x2="38" y2="108" stroke-width="2.5"/>
  <line x1="38" y1="108" x2="30" y2="127" stroke-width="2"/>
  <line x1="30" y1="127" x2="17" y2="131" stroke-width="1.5"/>
  <line x1="52" y1="74" x2="66" y2="108" stroke-width="2.5"/>
  <line x1="66" y1="108" x2="76" y2="126" stroke-width="2"/>
  <line x1="76" y1="126" x2="90" y2="130" stroke-width="1.5"/>
  <path d="M53,46 Q38,60 22,76" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Seiken Jodan Age Uke – rising block
FIGS['seikenjodan2'] = FIGS['seikenjodan2'] || fig(`
  <circle cx="55" cy="24" r="8" stroke-width="2"/>
  <line x1="55" y1="32" x2="52" y2="76" stroke-width="2.5"/>
  <line x1="53" y1="48" x2="28" y2="36" stroke-width="2"/>
  <line x1="28" y1="36" x2="18" y2="26" stroke-width="2.5"/>
  <rect x="14" y="22" width="7" height="5" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="53" y1="48" x2="78" y2="60" stroke-width="2"/>
  <line x1="78" y1="60" x2="84" y2="74" stroke-width="1.8"/>
  <line x1="52" y1="76" x2="38" y2="110" stroke-width="2.5"/>
  <line x1="38" y1="110" x2="30" y2="128" stroke-width="2"/>
  <line x1="30" y1="128" x2="17" y2="131" stroke-width="1.5"/>
  <line x1="52" y1="76" x2="66" y2="110" stroke-width="2.5"/>
  <line x1="66" y1="110" x2="76" y2="127" stroke-width="2"/>
  <line x1="76" y1="127" x2="90" y2="131" stroke-width="1.5"/>
`);

// Shuto Uke – knife hand block
FIGS['shutouke'] = fig(`
  <circle cx="55" cy="22" r="8" stroke-width="2"/>
  <line x1="55" y1="30" x2="54" y2="74" stroke-width="2.5"/>
  <line x1="54" y1="46" x2="28" y2="56" stroke-width="2"/>
  <line x1="28" y1="56" x2="14" y2="52" stroke-width="2.5"/>
  <line x1="14" y1="52" x2="10" y2="44" stroke-width="1.5"/>
  <line x1="14" y1="52" x2="8"  y2="56" stroke-width="1.5"/>
  <line x1="54" y1="46" x2="80" y2="50" stroke-width="2"/>
  <line x1="80" y1="50" x2="88" y2="62" stroke-width="1.8"/>
  <line x1="54" y1="74" x2="40" y2="110" stroke-width="2.5"/>
  <line x1="40" y1="110" x2="36" y2="128" stroke-width="2"/>
  <line x1="36" y1="128" x2="23" y2="131" stroke-width="1.5"/>
  <line x1="54" y1="74" x2="68" y2="106" stroke-width="2.5"/>
  <line x1="68" y1="106" x2="80" y2="122" stroke-width="2.5"/>
  <line x1="80" y1="122" x2="94" y2="126" stroke-width="1.5"/>
`);

// Seiken Chudan Uchi Uke – inside middle block
FIGS['seikenchudanuchiuke'] = fig(`
  <circle cx="55" cy="22" r="8" stroke-width="2"/>
  <line x1="55" y1="30" x2="52" y2="74" stroke-width="2.5"/>
  <line x1="53" y1="46" x2="80" y2="38" stroke-width="2.5"/>
  <line x1="80" y1="38" x2="88" y2="48" stroke-width="2"/>
  <rect x="84" y="44" width="7" height="5" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="53" y1="46" x2="32" y2="60" stroke-width="2"/>
  <line x1="32" y1="60" x2="28" y2="74" stroke-width="1.8"/>
  <line x1="52" y1="74" x2="38" y2="108" stroke-width="2.5"/>
  <line x1="38" y1="108" x2="30" y2="128" stroke-width="2"/>
  <line x1="30" y1="128" x2="17" y2="131" stroke-width="1.5"/>
  <line x1="52" y1="74" x2="66" y2="108" stroke-width="2.5"/>
  <line x1="66" y1="108" x2="76" y2="127" stroke-width="2"/>
  <line x1="76" y1="127" x2="90" y2="131" stroke-width="1.5"/>
`);

// ══ KICKS / KERI WAZA ══════════════════════════════════════════════

// Mae Geri – front kick
FIGS['maegeri'] = fig(`
  <circle cx="55" cy="18" r="8" stroke-width="2"/>
  <line x1="55" y1="26" x2="54" y2="68" stroke-width="2.5"/>
  <line x1="54" y1="42" x2="32" y2="54" stroke-width="2"/>
  <line x1="32" y1="54" x2="26" y2="68" stroke-width="1.8"/>
  <line x1="54" y1="42" x2="76" y2="50" stroke-width="2"/>
  <line x1="76" y1="50" x2="82" y2="64" stroke-width="1.8"/>
  <line x1="54" y1="68" x2="48" y2="100" stroke-width="2.5"/>
  <line x1="48" y1="100" x2="52" y2="128" stroke-width="2"/>
  <line x1="52" y1="128" x2="38" y2="131" stroke-width="1.5"/>
  <line x1="54" y1="68" x2="62" y2="88" stroke-width="2.5"/>
  <line x1="62" y1="88" x2="86" y2="78" stroke-width="2.5"/>
  <line x1="86" y1="78" x2="102" y2="74" stroke-width="2.5"/>
  <ellipse cx="106" cy="72" rx="5" ry="4" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
  <path d="M62,88 Q76,82 86,78" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Mawashi Geri – roundhouse kick
FIGS['mawashigeri'] = fig(`
  <circle cx="52" cy="20" r="8" stroke-width="2"/>
  <line x1="52" y1="28" x2="50" y2="72" stroke-width="2.5"/>
  <line x1="51" y1="44" x2="28" y2="56" stroke-width="2"/>
  <line x1="28" y1="56" x2="22" y2="70" stroke-width="1.8"/>
  <line x1="51" y1="44" x2="74" y2="52" stroke-width="2"/>
  <line x1="74" y1="52" x2="80" y2="66" stroke-width="1.8"/>
  <line x1="50" y1="72" x2="38" y2="104" stroke-width="2.5"/>
  <line x1="38" y1="104" x2="32" y2="128" stroke-width="2"/>
  <line x1="32" y1="128" x2="18" y2="131" stroke-width="1.5"/>
  <line x1="50" y1="72" x2="58" y2="92" stroke-width="2.5"/>
  <line x1="58" y1="92" x2="90" y2="68" stroke-width="2.5"/>
  <line x1="90" y1="68" x2="108" y2="56" stroke-width="2"/>
  <ellipse cx="110" cy="52" rx="5" ry="4" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
  <path d="M58,92 Q76,78 90,68" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Yoko Geri – side kick
FIGS['yokogeri'] = fig(`
  <circle cx="45" cy="22" r="8" stroke-width="2"/>
  <line x1="45" y1="30" x2="44" y2="72" stroke-width="2.5"/>
  <line x1="44" y1="46" x2="22" y2="58" stroke-width="2"/>
  <line x1="22" y1="58" x2="16" y2="72" stroke-width="1.8"/>
  <line x1="44" y1="46" x2="66" y2="52" stroke-width="2"/>
  <line x1="66" y1="52" x2="72" y2="66" stroke-width="1.8"/>
  <line x1="44" y1="72" x2="35" y2="106" stroke-width="2.5"/>
  <line x1="35" y1="106" x2="30" y2="128" stroke-width="2"/>
  <line x1="30" y1="128" x2="16" y2="131" stroke-width="1.5"/>
  <line x1="44" y1="72" x2="52" y2="90" stroke-width="2.5"/>
  <line x1="52" y1="90" x2="88" y2="82" stroke-width="2.5"/>
  <line x1="88" y1="82" x2="108" y2="78" stroke-width="2"/>
  <ellipse cx="112" cy="78" rx="5" ry="4" transform="rotate(-10,112,78)" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
`);

// Ushiro Geri – back kick
FIGS['ushirogeri'] = fig(`
  <circle cx="65" cy="22" r="8" stroke-width="2"/>
  <line x1="65" y1="30" x2="66" y2="72" stroke-width="2.5"/>
  <line x1="65" y1="46" x2="86" y2="56" stroke-width="2"/>
  <line x1="86" y1="56" x2="92" y2="70" stroke-width="1.8"/>
  <line x1="65" y1="46" x2="44" y2="56" stroke-width="2"/>
  <line x1="44" y1="56" x2="38" y2="70" stroke-width="1.8"/>
  <line x1="66" y1="72" x2="74" y2="104" stroke-width="2.5"/>
  <line x1="74" y1="104" x2="80" y2="127" stroke-width="2"/>
  <line x1="80" y1="127" x2="94" y2="130" stroke-width="1.5"/>
  <line x1="66" y1="72" x2="56" y2="92" stroke-width="2.5"/>
  <line x1="56" y1="92" x2="22" y2="84" stroke-width="2.5"/>
  <line x1="22" y1="84" x2="8"  y2="80" stroke-width="2"/>
  <ellipse cx="5" cy="80" rx="5" ry="4" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
  <path d="M56,92 Q38,88 22,84" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Ushiro Mawashi Geri – spinning back roundhouse
FIGS['ushiromawashigeri'] = fig(`
  <circle cx="58" cy="20" r="8" stroke-width="2"/>
  <line x1="58" y1="28" x2="60" y2="70" stroke-width="2.5"/>
  <line x1="59" y1="44" x2="80" y2="52" stroke-width="2"/>
  <line x1="80" y1="52" x2="86" y2="66" stroke-width="1.8"/>
  <line x1="59" y1="44" x2="36" y2="52" stroke-width="2"/>
  <line x1="36" y1="52" x2="30" y2="64" stroke-width="1.8"/>
  <line x1="60" y1="70" x2="72" y2="98" stroke-width="2.5"/>
  <line x1="72" y1="98" x2="78" y2="124" stroke-width="2"/>
  <line x1="78" y1="124" x2="92" y2="128" stroke-width="1.5"/>
  <line x1="60" y1="70" x2="46" y2="86" stroke-width="2.5"/>
  <line x1="46" y1="86" x2="14" y2="62" stroke-width="2.5"/>
  <line x1="14" y1="62" x2="6"  y2="52" stroke-width="2"/>
  <ellipse cx="4" cy="48" rx="5" ry="4" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
  <path d="M60,70 Q52,78 46,86" stroke-width="1" stroke-dasharray="3,2"/>
  <path d="M82,28 Q92,18 96,28" stroke-width="1.5" stroke-dasharray="2,2" fill="none"/>
  <line x1="96" y1="28" x2="94" y2="22" stroke-width="1.5"/>
`);

// Mae Hiza Geri – front knee strike
FIGS['maehizageri'] = fig(`
  <circle cx="55" cy="18" r="8" stroke-width="2"/>
  <line x1="55" y1="26" x2="54" y2="68" stroke-width="2.5"/>
  <line x1="54" y1="42" x2="32" y2="52" stroke-width="2"/>
  <line x1="32" y1="52" x2="26" y2="66" stroke-width="1.8"/>
  <line x1="54" y1="42" x2="76" y2="48" stroke-width="2"/>
  <line x1="76" y1="48" x2="82" y2="62" stroke-width="1.8"/>
  <line x1="54" y1="68" x2="46" y2="96" stroke-width="2.5"/>
  <line x1="46" y1="96" x2="50" y2="128" stroke-width="2"/>
  <line x1="50" y1="128" x2="36" y2="131" stroke-width="1.5"/>
  <line x1="54" y1="68" x2="66" y2="88" stroke-width="2.5"/>
  <line x1="66" y1="88" x2="72" y2="108" stroke-width="2.5"/>
  <ellipse cx="68" cy="82" rx="7" ry="6" stroke-width="2" fill="rgba(201,168,76,0.25)"/>
`);

// Hiza Geri – knee strike (pulling opponent)
FIGS['hizageri'] = fig(`
  <circle cx="60" cy="18" r="8" stroke-width="2"/>
  <line x1="60" y1="26" x2="59" y2="68" stroke-width="2.5"/>
  <line x1="59" y1="42" x2="38" y2="34" stroke-width="2"/>
  <line x1="38" y1="34" x2="28" y2="28" stroke-width="2"/>
  <line x1="59" y1="42" x2="80" y2="38" stroke-width="2"/>
  <line x1="80" y1="38" x2="90" y2="30" stroke-width="2"/>
  <line x1="59" y1="68" x2="46" y2="98" stroke-width="2.5"/>
  <line x1="46" y1="98" x2="44" y2="128" stroke-width="2"/>
  <line x1="44" y1="128" x2="30" y2="131" stroke-width="1.5"/>
  <line x1="59" y1="68" x2="72" y2="90" stroke-width="2.5"/>
  <line x1="72" y1="90" x2="76" y2="112" stroke-width="2.5"/>
  <ellipse cx="70" cy="84" rx="7" ry="6" stroke-width="2" fill="rgba(201,168,76,0.25)"/>
  <circle cx="95" cy="26" r="10" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="95" y="30" font-size="7" fill="#c9a84c" text-anchor="middle">敵</text>
`);

// Kin Geri – groin kick
FIGS['kingeri'] = fig(`
  <circle cx="55" cy="18" r="8" stroke-width="2"/>
  <line x1="55" y1="26" x2="54" y2="68" stroke-width="2.5"/>
  <line x1="54" y1="42" x2="32" y2="54" stroke-width="2"/>
  <line x1="32" y1="54" x2="26" y2="68" stroke-width="1.8"/>
  <line x1="54" y1="42" x2="76" y2="50" stroke-width="2"/>
  <line x1="76" y1="50" x2="82" y2="64" stroke-width="1.8"/>
  <line x1="54" y1="68" x2="42" y2="100" stroke-width="2.5"/>
  <line x1="42" y1="100" x2="38" y2="128" stroke-width="2"/>
  <line x1="38" y1="128" x2="24" y2="131" stroke-width="1.5"/>
  <line x1="54" y1="68" x2="66" y2="88" stroke-width="2.5"/>
  <line x1="66" y1="88" x2="88" y2="72" stroke-width="2.5"/>
  <line x1="88" y1="72" x2="100" y2="64" stroke-width="2"/>
  <ellipse cx="103" cy="60" rx="4" ry="5" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
`);

// Kake Geri – hook kick
FIGS['kakegeri'] = fig(`
  <circle cx="52" cy="20" r="8" stroke-width="2"/>
  <line x1="52" y1="28" x2="50" y2="70" stroke-width="2.5"/>
  <line x1="51" y1="44" x2="28" y2="54" stroke-width="2"/>
  <line x1="28" y1="54" x2="22" y2="68" stroke-width="1.8"/>
  <line x1="51" y1="44" x2="74" y2="50" stroke-width="2"/>
  <line x1="74" y1="50" x2="80" y2="64" stroke-width="1.8"/>
  <line x1="50" y1="70" x2="38" y2="102" stroke-width="2.5"/>
  <line x1="38" y1="102" x2="32" y2="128" stroke-width="2"/>
  <line x1="32" y1="128" x2="18" y2="131" stroke-width="1.5"/>
  <line x1="50" y1="70" x2="62" y2="90" stroke-width="2.5"/>
  <line x1="62" y1="90" x2="96" y2="76" stroke-width="2.5"/>
  <line x1="96" y1="76" x2="108" y2="88" stroke-width="2.5"/>
  <path d="M96,76 Q104,80 108,88" stroke-width="1" stroke-dasharray="3,2"/>
  <ellipse cx="110" cy="90" rx="5" ry="4" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
`);

// Uchimawashi Geri – inside roundhouse
FIGS['uchimawashigeri'] = fig(`
  <circle cx="55" cy="20" r="8" stroke-width="2"/>
  <line x1="55" y1="28" x2="53" y2="70" stroke-width="2.5"/>
  <line x1="54" y1="44" x2="32" y2="54" stroke-width="2"/>
  <line x1="32" y1="54" x2="26" y2="68" stroke-width="1.8"/>
  <line x1="54" y1="44" x2="76" y2="52" stroke-width="2"/>
  <line x1="76" y1="52" x2="82" y2="66" stroke-width="1.8"/>
  <line x1="53" y1="70" x2="40" y2="102" stroke-width="2.5"/>
  <line x1="40" y1="102" x2="34" y2="127" stroke-width="2"/>
  <line x1="34" y1="127" x2="20" y2="131" stroke-width="1.5"/>
  <line x1="53" y1="70" x2="66" y2="90" stroke-width="2.5"/>
  <line x1="66" y1="90" x2="44" y2="62" stroke-width="2.5"/>
  <line x1="44" y1="62" x2="30" y2="50" stroke-width="2"/>
  <ellipse cx="27" cy="46" rx="5" ry="4" stroke-width="1.5" fill="rgba(201,168,76,0.2)"/>
  <path d="M66,90 Q56,72 44,62" stroke-width="1" stroke-dasharray="3,2"/>
`);

// Yakusoku Ippon Kumite – one step sparring (two figures)
FIGS['yakusokuipponkumite'] = fig(`
  <circle cx="30" cy="22" r="6" stroke-width="1.8"/>
  <line x1="30" y1="28" x2="29" y2="64" stroke-width="2"/>
  <line x1="29" y1="40" x2="14" y2="48" stroke-width="1.8"/>
  <line x1="29" y1="40" x2="50" y2="36" stroke-width="2"/>
  <line x1="50" y1="36" x2="60" y2="36" stroke-width="2"/>
  <line x1="29" y1="64" x2="20" y2="90" stroke-width="2"/>
  <line x1="20" y1="90" x2="16" y2="110" stroke-width="1.8"/>
  <line x1="29" y1="64" x2="38" y2="90" stroke-width="2"/>
  <line x1="38" y1="90" x2="42" y2="110" stroke-width="1.8"/>
  <circle cx="90" cy="22" r="6" stroke-width="1.8"/>
  <line x1="90" y1="28" x2="91" y2="64" stroke-width="2"/>
  <line x1="91" y1="40" x2="106" y2="48" stroke-width="1.8"/>
  <line x1="91" y1="40" x2="70" y2="52" stroke-width="2"/>
  <line x1="70" y1="52" x2="60" y2="50" stroke-width="2"/>
  <line x1="91" y1="64" x2="82" y2="90" stroke-width="2"/>
  <line x1="82" y1="90" x2="78" y2="110" stroke-width="1.8"/>
  <line x1="91" y1="64" x2="100" y2="90" stroke-width="2"/>
  <line x1="100" y1="90" x2="104" y2="110" stroke-width="1.8"/>
  <line x1="16" y1="110" x2="10" y2="113" stroke-width="1.5"/>
  <line x1="42" y1="110" x2="52" y2="113" stroke-width="1.5"/>
  <line x1="78" y1="110" x2="68" y2="113" stroke-width="1.5"/>
  <line x1="104" y1="110" x2="110" y2="113" stroke-width="1.5"/>
  <line x1="60" y1="36" x2="60" y2="50" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="60" y="125" font-size="6.5" fill="#c9a84c" text-anchor="middle" font-family="serif">Tori — Uke</text>
`);

// Taikyoku Sono Ichi – kata silhouette (stepping gedan barai)
FIGS['taikyokusono'] = fig(`
  <circle cx="60" cy="18" r="8" stroke-width="2"/>
  <line x1="60" y1="26" x2="58" y2="70" stroke-width="2.5"/>
  <line x1="59" y1="44" x2="30" y2="80" stroke-width="2.5"/>
  <line x1="30" y1="80" x2="22" y2="94" stroke-width="2"/>
  <rect x="18" y="90" width="7" height="5" rx="2" stroke-width="1.5" fill="#c9a84c" stroke="#c9a84c"/>
  <line x1="59" y1="44" x2="80" y2="52" stroke-width="2"/>
  <line x1="80" y1="52" x2="86" y2="64" stroke-width="1.8"/>
  <line x1="58" y1="70" x2="42" y2="104" stroke-width="2.5"/>
  <line x1="42" y1="104" x2="34" y2="128" stroke-width="2"/>
  <line x1="34" y1="128" x2="20" y2="131" stroke-width="1.5"/>
  <line x1="58" y1="70" x2="74" y2="102" stroke-width="2.5"/>
  <line x1="74" y1="102" x2="86" y2="126" stroke-width="2.5"/>
  <line x1="86" y1="126" x2="100" y2="130" stroke-width="1.5"/>
  <text x="60" y="138" font-size="6" fill="#c9a84c" text-anchor="middle" font-family="serif">太極その一</text>
`);

// Pinan Sono Ichi – kata (shuto uke in back stance)
FIGS['pinansonoichi'] = fig(`
  <circle cx="55" cy="20" r="8" stroke-width="2"/>
  <line x1="55" y1="28" x2="54" y2="72" stroke-width="2.5"/>
  <line x1="54" y1="46" x2="26" y2="54" stroke-width="2"/>
  <line x1="26" y1="54" x2="12" y2="50" stroke-width="2.5"/>
  <line x1="12" y1="50" x2="8"  y2="42" stroke-width="1.5"/>
  <line x1="12" y1="50" x2="6"  y2="54" stroke-width="1.5"/>
  <line x1="54" y1="46" x2="78" y2="52" stroke-width="2"/>
  <line x1="78" y1="52" x2="86" y2="64" stroke-width="1.8"/>
  <line x1="54" y1="72" x2="40" y2="106" stroke-width="2.5"/>
  <line x1="40" y1="106" x2="34" y2="127" stroke-width="2"/>
  <line x1="34" y1="127" x2="20" y2="131" stroke-width="1.5"/>
  <line x1="54" y1="72" x2="70" y2="104" stroke-width="2.5"/>
  <line x1="70" y1="104" x2="82" y2="124" stroke-width="2.5"/>
  <line x1="82" y1="124" x2="96" y2="128" stroke-width="1.5"/>
  <text x="60" y="138" font-size="6" fill="#c9a84c" text-anchor="middle" font-family="serif">平安その一</text>
`);

// Generic kata figure
FIGS['kata'] = fig(`
  <circle cx="60" cy="20" r="8" stroke-width="2"/>
  <line x1="60" y1="28" x2="58" y2="72" stroke-width="2.5"/>
  <line x1="59" y1="46" x2="36" y2="38" stroke-width="2"/>
  <line x1="36" y1="38" x2="24" y2="34" stroke-width="2"/>
  <line x1="59" y1="46" x2="82" y2="54" stroke-width="2"/>
  <line x1="82" y1="54" x2="90" y2="64" stroke-width="1.8"/>
  <line x1="58" y1="72" x2="44" y2="106" stroke-width="2.5"/>
  <line x1="44" y1="106" x2="36" y2="128" stroke-width="2"/>
  <line x1="36" y1="128" x2="22" y2="131" stroke-width="1.5"/>
  <line x1="58" y1="72" x2="72" y2="104" stroke-width="2.5"/>
  <line x1="72" y1="104" x2="82" y2="126" stroke-width="2"/>
  <line x1="82" y1="126" x2="96" y2="130" stroke-width="1.5"/>
  <text x="60" y="138" font-size="7" fill="#c9a84c" text-anchor="middle" font-family="serif">型</text>
`);

// ── Figure lookup: maps romaji key to figure ──────────────────────
function getFig(romaji) {
  if (!romaji) return null;
  const k = romaji.toLowerCase().replace(/\s+/g,'').replace(/[ーーっ]/g,'');
  // direct match
  if (FIGS[k]) return FIGS[k];
  // partial matches
  if (k.includes('heiko')) return FIGS['heikodachi'];
  if (k.includes('zenkutsu')) return FIGS['zenkutsudachi'];
  if (k.includes('kokutsu')) return FIGS['kokutsudachi'];
  if (k.includes('kiba')) return FIGS['kibadachi'];
  if (k.includes('sanchin') && k.includes('dachi')) return FIGS['sanchindachi'];
  if (k.includes('yoi')) return FIGS['yoidachi'];
  if (k.includes('maegeri') || k.includes('mae') && k.includes('geri') && !k.includes('hiza') && !k.includes('mawashi')) return FIGS['maegeri'];
  if (k.includes('mawashigeri') || (k.includes('mawashi') && k.includes('geri') && !k.includes('ushiro') && !k.includes('uchi'))) return FIGS['mawashigeri'];
  if (k.includes('yokogeri') || (k.includes('yoko') && k.includes('geri'))) return FIGS['yokogeri'];
  if (k.includes('ushirogeri') || (k.includes('ushiro') && k.includes('geri') && !k.includes('mawashi'))) return FIGS['ushirogeri'];
  if (k.includes('ushiromawashi')) return FIGS['ushiromawashigeri'];
  if (k.includes('maehiza') || (k.includes('mae') && k.includes('hiza'))) return FIGS['maehizageri'];
  if (k.includes('hizageri') || (k.includes('hiza') && k.includes('geri'))) return FIGS['hizageri'];
  if (k.includes('kingeri') || (k.includes('kin') && k.includes('geri'))) return FIGS['kingeri'];
  if (k.includes('kakegeri') || (k.includes('kake') && k.includes('geri'))) return FIGS['kakegeri'];
  if (k.includes('uchimawashi')) return FIGS['uchimawashigeri'];
  if (k.includes('uraken') && k.includes('jodan')) return FIGS['urakenjodan'];
  if (k.includes('uraken')) return FIGS['urakenuchi'];
  if (k.includes('empi')) return FIGS['empiuchi'];
  if (k.includes('kagi')) return FIGS['seikenkagitsuki'];
  if (k.includes('gedanbarai') || (k.includes('gedan') && k.includes('barai'))) return FIGS['gedanbarai'];
  if (k.includes('shuto') && k.includes('uke')) return FIGS['shutouke'];
  if (k.includes('uchi') && k.includes('uke')) return FIGS['seikenchudanuchiuke'];
  if (k.includes('ageuke') || (k.includes('age') && k.includes('uke'))) return FIGS['seikenjodan2'];
  if (k.includes('gyaku')) return FIGS['gyakutsuki'];
  if (k.includes('jodan') && k.includes('tsuki')) return FIGS['seikenjodan'];
  if (k.includes('chudan') && k.includes('tsuki')) return FIGS['seikenchudantsuki'];
  if (k.includes('seiken')) return FIGS['seikenchudantsuki'];
  if (k.includes('kumite')) return FIGS['yakusokuipponkumite'];
  if (k.includes('ippon')) return FIGS['yakusokuipponkumite'];
  if (k.includes('taikyoku')) return FIGS['taikyokusono'];
  if (k.includes('pinan') && k.includes('ichi')) return FIGS['pinansonoichi'];
  if (k.includes('kata') || k.includes('pinan') || k.includes('yantsu') || k.includes('kanku') || k.includes('sanchin') || k.includes('garyu') || k.includes('seipai') || k.includes('bassai') || k.includes('seienchin') || k.includes('naihanchi') || k.includes('sochin') || k.includes('gekisai') || k.includes('tsukino')) return FIGS['kata'];
  if (k.includes('rei')) return FIGS['heikodachi'];
  return null;
}
