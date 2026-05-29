const TECHNIQUE_IMAGE_GROUPS = {
  dachi: [
    'kosa-dachi',
    'kiba-dachi',
    'fudo-dachi',
    'neko-ashi-dachi',
    'musubi-dachi',
    'heisoku-dachi',
    'kokutsu-dachi',
    'hachi-ji-dachi',
    're-no-ji-dachi',
    'zenkutsu-dachi',
    'hangetsu-dachi',
    'sanchin-dachi',
  ],
  'uke-waza': [
    'manji-uke',
    'age-uke',
    'soto-uke',
    'gedan-barai',
    'kakiwake-uke',
    'gedan-nagashi-uke',
    'shuto-uke',
    'juji-uke',
    'te-nagashi-uke',
    'uchi-uke',
    'morote-uke',
  ],
  'te-waza': [
    'tettsui-uchi',
    'morote-zuki',
    'tate-zuki',
    'age-empi-uchi',
    'hasami-zuki',
    'yoko-empi-uchi',
    'yama-zuki',
    'teisho-uchi',
    'shuto-uchi',
    'uraken-uchi',
    'otoshi-empi-uchi',
    'kagi-zuki',
    'kizami-zuki',
    'ura-zuki',
    'oi-zuki',
    'haito-uchi',
    'awase-zuki',
    'mawashi-empi-uchi',
    'gyaku-zuki',
  ],
  'keri-waza': [
    'ura-mawashi-geri',
    'ushiro-geri',
    'mawashi-geri',
    'yoko-geri-kekomi',
    'mawashi-hiza-geri',
    'yoko-geri-keage',
    'mae-geri',
    'mae-hiza-geri',
  ],
};

const TECHNIQUE_IMAGE_PATHS = Object.entries(TECHNIQUE_IMAGE_GROUPS)
  .reduce((paths, [group, keys]) => {
    keys.forEach(key => {
      paths[key] = `img/${group}/${key}.png`;
    });
    return paths;
  }, {});

const TECHNIQUE_IMAGE_ALIASES = {
  'heiko-dachi': 'hachi-ji-dachi',
  'yoi-dachi': 'hachi-ji-dachi',
  'shotei-uchi': 'teisho-uchi',
  'sanchin-dachi-fig': 'sanchin-dachi',
  'shuto-uke-fig': 'shuto-uke',
  'tobi-mae-geri': 'mae-geri',
  'tobi-geri': 'mae-geri',
  'uchimawashi-geri': 'yoko-geri-keage',
  'enkei-gyaku-tsuki': 'gyaku-zuki',
};

function normalizeTechniqueKey(key) {
  return String(key || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function getTechniqueImage(key) {
  const normalizedKey = normalizeTechniqueKey(key);
  const imageKey = TECHNIQUE_IMAGE_PATHS[normalizedKey]
    ? normalizedKey
    : TECHNIQUE_IMAGE_ALIASES[normalizedKey];

  return imageKey ? TECHNIQUE_IMAGE_PATHS[imageKey] : null;
}

function getTechniqueFig(key, alt = '') {
  const img = getTechniqueImage(key);
  if (!img) return null;

  const safeAlt = String(alt || key || 'Technique image')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `<img src="${img}" class="tech-fig" alt="${safeAlt}" loading="lazy" decoding="async">`;
}
