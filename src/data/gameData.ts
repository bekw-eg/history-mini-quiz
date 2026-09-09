import type { EraItem, RevolutionEvent, PersonalityFactor, InternalQuality } from '../types/game';

export const ERAS_DATA: EraItem[] = [
  {
    id: 'cognitive',
    order: 1,
    nameKz: 'Когнитивтік',
    iconName: 'LightBulbIcon',
    periodKz: 'Б.з.б. 70 000 жыл бұрын',
    shortDescKz: 'Тіл мен ұжымдық қиялдың дамуы',
  },
  {
    id: 'neolithic',
    order: 2,
    nameKz: 'Неолиттік',
    iconName: 'HomeIcon',
    periodKz: 'Б.з.б. 10 000 жыл бұрын',
    shortDescKz: 'Аңшылықтан егіншілік пен қоныстануға өту',
  },
  {
    id: 'agrarian',
    order: 3,
    nameKz: 'Аграрлық',
    iconName: 'MapIcon',
    periodKz: 'Б.з.б. 4 000 жыл – XVIII ғ.',
    shortDescKz: 'Алғашқы қалалар, жазу, сауда және мемлекеттік құрылым',
  },
  {
    id: 'industrial',
    order: 4,
    nameKz: 'Индустриалды',
    iconName: 'Cog6ToothIcon',
    periodKz: 'XVIII – XX ғасырлар',
    shortDescKz: 'Бу қозғалтқышы, фабрикалар, жаппай өндіріс және урбанизация',
  },
  {
    id: 'modern',
    order: 5,
    nameKz: 'Қазіргі қоғам',
    iconName: 'GlobeAltIcon',
    periodKz: 'XX ғ. соңы – қазіргі күн',
    shortDescKz: 'Ақпараттық дәуір, жаһандану және цифрлық өркениет',
  },
];

export const REVOLUTION_EVENTS: RevolutionEvent[] = [
  {
    id: 'ev-1',
    textKz: 'Тіл мен күрделі ойлау дамыды',
    correctEra: 'cognitive',
    hintKz: 'Бұл өзгеріс адамның алғашқы абстрактілі ойлау дәуіріне жатады.',
  },
  {
    id: 'ev-2',
    textKz: 'Егіншілік пен тұрақты қоныстар пайда болды',
    correctEra: 'neolithic',
    hintKz: 'Бұл өзгеріс адамзаттың отырықшы өмір салтына өткен шағына сәйкес келеді.',
  },
  {
    id: 'ev-3',
    textKz: 'Қалалар мен мемлекеттер қалыптасты',
    correctEra: 'agrarian',
    hintKz: 'Бұл ауыл шаруашылығының өркендеп, үлкен өркениеттер құрылған кезеңі.',
  },
  {
    id: 'ev-4',
    textKz: 'Фабрикалар мен машиналар кең тарады',
    correctEra: 'industrial',
    hintKz: 'Бұл техникалық төңкеріс пен бу машиналарының дәуірі.',
  },
  {
    id: 'ev-5',
    textKz: 'Интернет пен цифрлық технологиялар өмірдің бір бөлігіне айналды',
    correctEra: 'modern',
    hintKz: 'Бұл ақпараттық кеңістік пен желілер дәуірі.',
  },
];

export const PERSONALITY_FACTORS: PersonalityFactor[] = [
  {
    id: 'factor-family',
    nameKz: 'Отбасы',
    isCorrect: true,
    iconName: 'HomeIcon',
    descKz: 'Алғашқы тәрбие мен адамгершілік негіздері',
  },
  {
    id: 'factor-education',
    nameKz: 'Білім',
    isCorrect: true,
    iconName: 'AcademicCapIcon',
    descKz: 'Сыни ойлау, ғылыми таным және кәсіби дағды',
  },
  {
    id: 'factor-society',
    nameKz: 'Қоғам',
    isCorrect: true,
    iconName: 'UserGroupIcon',
    descKz: 'Әлеуметтік орта, қарым-қатынас және нормалар',
  },
  {
    id: 'factor-state',
    nameKz: 'Мемлекет',
    isCorrect: true,
    iconName: 'BuildingLibraryIcon',
    descKz: 'Заң, құқықтық тәртіп және азаматтық жауапкершілік',
  },
  {
    id: 'factor-media',
    nameKz: 'БАҚ / Интернет',
    isCorrect: true,
    iconName: 'DevicePhoneMobileIcon',
    descKz: 'Ақпараттық ағын, медиа және цифрлық кеңістік',
  },
  {
    id: 'factor-values',
    nameKz: 'Құндылықтар',
    isCorrect: true,
    iconName: 'HeartIcon',
    descKz: 'Рухани бағдар, ар-ұждан және мәдени код',
  },
  {
    id: 'factor-weather',
    nameKz: 'Ауа райы',
    isCorrect: false,
    descKz: 'Табиғи климаттық құбылыс',
  },
  {
    id: 'factor-color',
    nameKz: 'Кездейсоқ түс',
    isCorrect: false,
    descKz: 'Кездейсоқ визуалды белгі',
  },
];

export const INTERNAL_QUALITIES: InternalQuality[] = [
  {
    id: 'iq-worldview',
    titleKz: 'Дүниетаным',
    subtitleKz: 'Әлемді түсіну мен өмірлік ұстанымдар жүйесі',
  },
  {
    id: 'iq-moral',
    titleKz: 'Мораль',
    subtitleKz: 'Жақсылық пен жамандықты ажырату қабілеті',
  },
  {
    id: 'iq-value',
    titleKz: 'Құндылық',
    subtitleKz: 'Адам бойындағы ішкі рухани тірек',
  },
  {
    id: 'iq-behavior',
    titleKz: 'Мінез-құлық',
    subtitleKz: 'Қоғам алдындағы саналы әрекет пен жауапкершілік',
  },
];
