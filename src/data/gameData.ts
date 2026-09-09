import type { EraItem, RevolutionEvent, PersonalityFactor, InternalQuality } from '../types/game';

export const ERAS_DATA: EraItem[] = [
  {
    id: 'cognitive',
    order: 1,
    nameKz: 'Когнитивтік',
    iconName: 'LightBulbIcon',
    periodKz: 'Тіл мен ойлау',
    shortDescKz: 'Тіл мен күрделі ойлау жүйесінің қалыптасуы',
  },
  {
    id: 'neolithic',
    order: 2,
    nameKz: 'Неолиттік',
    iconName: 'HomeIcon',
    periodKz: 'Егіншілік пен қоныс',
    shortDescKz: 'Егіншілік пен тұрақты қоныстардың пайда болуы',
  },
  {
    id: 'agrarian',
    order: 3,
    nameKz: 'Аграрлық',
    iconName: 'BuildingLibraryIcon',
    periodKz: 'Мемлекеттер пайда болуы',
    shortDescKz: 'Қалалар мен мемлекеттік жүйенің орнығуы',
  },
  {
    id: 'manufacturing',
    order: 4,
    nameKz: 'Өнеркәсіптік',
    iconName: 'Cog6ToothIcon',
    periodKz: 'Бу машинасы мен өндіріс',
    shortDescKz: 'Бу қозғалтқышы мен алғашқы өндіріс орындары',
  },
  {
    id: 'industrial',
    order: 5,
    nameKz: 'Индустриалды',
    iconName: 'BuildingOffice2Icon',
    periodKz: 'Жаппай өндіріс',
    shortDescKz: 'Конвейерлік жүйе мен фабрикалық жаппай өндіріс',
  },
  {
    id: 'modern',
    order: 6,
    nameKz: 'Қазіргі қоғам',
    iconName: 'GlobeAltIcon',
    periodKz: 'Цифрлық дәуір',
    shortDescKz: 'Интернет, ақпарат және жаһандық цифрлық өркениет',
  },
];

export const REVOLUTION_EVENTS: RevolutionEvent[] = [
  {
    id: 'ev-1',
    textKz: 'Тіл мен күрделі ойлау дамыды',
    correctEra: 'cognitive',
    hintKz: 'Бұл адамның алғашқы когнитивтік төңкерісіне жатады.',
  },
  {
    id: 'ev-2',
    textKz: 'Егіншілік пен тұрақты қоныстар пайда болды',
    correctEra: 'neolithic',
    hintKz: 'Бұл неолиттік төңкеріс пен отырықшы өмір салты.',
  },
  {
    id: 'ev-3',
    textKz: 'Қалалар мен мемлекеттер қалыптасты',
    correctEra: 'agrarian',
    hintKz: 'Бұл мемлекеттер мен алғашқы ірі өркениеттер құрылған аграрлық дәуір.',
  },
  {
    id: 'ev-4',
    textKz: 'Бу машинасы ойлап табылып, өндіріс басталды',
    correctEra: 'manufacturing',
    hintKz: 'Бұл бу машинасы мен алғашқы өнеркәсіптік өндіріс кезеңі.',
  },
  {
    id: 'ev-5',
    textKz: 'Фабрикалар мен жаппай машиналық өндіріс кең тарады',
    correctEra: 'industrial',
    hintKz: 'Бұл конвейер мен индустриалды жаппай өндіріс кезеңі.',
  },
  {
    id: 'ev-6',
    textKz: 'Интернет пен цифрлық технологиялар өмірдің бір бөлігіне айналды',
    correctEra: 'modern',
    hintKz: 'Бұл қазіргі ақпараттық және цифрлық қоғам дәуірі.',
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
