import type { GlossaryItem } from '../types/game';

export const GLOSSARY_DATA: GlossaryItem[] = [
  // 1. Өркениет және тарих
  {
    id: 'term-cognitive',
    termKz: 'Когнитивтік төңкеріс',
    category: 'civilization',
    iconName: 'LightBulbIcon',
    simpleExplanationKz:
      'Адамдар жай ғана дыбыс шығаруды қойып, сөйлесуді, бір-біріне ертегі айтып, үлкен істерді бірге жоспарлауды үйренген сәт. Мысалы, «анау ағаштың артында арыстан бар, бірігіп қашайық немесе қорғанайық» деп келісе алды.',
    academicExplanationKz:
      'Б.з.б. 70 мың жыл бұрынғы күрделі тіл мен дерексіз ойлау қабілетінің пайда болуы.',
  },
  {
    id: 'term-neolithic',
    termKz: 'Неолиттік төңкеріс',
    category: 'civilization',
    iconName: 'HomeIcon',
    simpleExplanationKz:
      'Орманда тамақ іздеп тоқтаусыз жүгіруді қойып, үй салып, бақшаға дән егіп, сиыр мен қой асырап, бір жерде тыныш өмір сүре бастаған кез.',
    academicExplanationKz:
      'Аңшылық пен терімшіліктен егіншілік пен отырықшы өмір салтына түбегейлі көшу.',
  },
  {
    id: 'term-agrarian',
    termKz: 'Аграрлық қоғам',
    category: 'civilization',
    iconName: 'BuildingLibraryIcon',
    simpleExplanationKz:
      'Адамдар бірігіп үлкен ауылдар мен қалалар салып, кімнің бастық болатынын, кім нан пісіретінін заңмен келісіп, алғашқы патшалықтар құрған уақыт.',
    academicExplanationKz:
      'Жер өңдеуге, алғашқы қалалар мен мемлекеттік құрылымға негізделген дәстүрлі өркениет.',
  },
  {
    id: 'term-manufacturing',
    termKz: 'Өнеркәсіптік төңкеріс',
    category: 'civilization',
    iconName: 'Cog6ToothIcon',
    simpleExplanationKz:
      'Қолмен ұзақ жасайтын ауыр жұмыстарды бумен жүретін алып темір көмекшілерге — машиналарға тапсырған кез. Олар шаршамай, заттарды тез жасады.',
    academicExplanationKz:
      'XVIII–XIX ғасырлардағы қол еңбегінен бу қозғалтқышы мен алғашқы машиналарға көшу.',
  },
  {
    id: 'term-industrial',
    termKz: 'Индустриалды қоғам',
    category: 'civilization',
    iconName: 'BuildingOffice2Icon',
    simpleExplanationKz:
      'Үлкен фабрикалар пайда болып, ойыншықтар, киімдер мен көліктерді мың-мыңдап, бірдей етіп өте тез жасап шығаратын зауыттар заманы.',
    academicExplanationKz:
      'Жаппай машиналық өндіріске, зауыттарға және урбанизацияға негізделген қоғам.',
  },
  {
    id: 'term-modern',
    termKz: 'Қазіргі цифрлық қоғам',
    category: 'civilization',
    iconName: 'GlobeAltIcon',
    simpleExplanationKz:
      'Бүкіл әлем бір кішкентай смартфонның ішіне сыйып кеткен уақыт. Жердің арғы бетіндегі досыңмен көзді ашып-жұмғанша видео арқылы сөйлесе бересің.',
    academicExplanationKz:
      'Интернет, ақпараттық технологиялар және жаһандану дәуірі.',
  },
  {
    id: 'term-culture',
    termKz: 'Мәдениет',
    category: 'civilization',
    iconName: 'SparklesIcon',
    simpleExplanationKz:
      'Адамның жүрегіндегі және жанындағы әдемілік: біздің әндеріміз, салған суреттеріміз, жақсы әдеттеріміз бен анамыз айтып беретін ертегілер.',
    academicExplanationKz:
      'Адамзаттың рухани жетістіктері: өнер, тіл, дәстүр және моральдық құндылықтар жиынтығы.',
  },
  {
    id: 'term-civilization',
    termKz: 'Өркениет',
    category: 'civilization',
    iconName: 'BuildingLibraryIcon',
    simpleExplanationKz:
      'Адамдардың өмір сүруі үшін өз қолдарымен жасаған ыңғайлы әлемі: кең көшелер, жылы үйлер, мектептер, ауруханалар және барлығы бағынатын тәртіп ережелері.',
    academicExplanationKz:
      'Қоғам дамуының материалдық, техникалық және мемлекеттік-құқықтық деңгейі.',
  },

  // 2. Тұлға және дүниетаным
  {
    id: 'term-personality',
    termKz: 'Тұлға (Личность)',
    category: 'personality',
    iconName: 'UserIcon',
    simpleExplanationKz:
      'Жай ғана адам емес, өз басымен ойланып шешім қабылдайтын, жақсы мен жаманды айыра алатын және «мен істедім» деп өз сөзіне жауап беретін нағыз азамат.',
    academicExplanationKz:
      'Қоғамдық қатынастар барысында саналы таңдау жасай алатын дара әлеуметтік субъект.',
  },
  {
    id: 'term-worldview',
    termKz: 'Дүниетаным',
    category: 'personality',
    iconName: 'LightBulbIcon',
    simpleExplanationKz:
      'Сенің әлемге қарап тұрған көзілдірігің. Сен үшін бұл өмір қандай, жақсылық деген не және адамдармен өзіңді қалай ұстауың керек екенін түсінуің.',
    academicExplanationKz:
      'Адамның қоршаған ортаға, қоғамға және өзіне деген көзқарастары мен ұстанымдарының тұтас жүйесі.',
  },
  {
    id: 'term-values',
    termKz: 'Құндылықтар',
    category: 'personality',
    iconName: 'HeartIcon',
    simpleExplanationKz:
      'Сенің жүрегіңдегі ең қымбат қазыналар: достарға адал болу, ата-ананы сыйлау, ешкімді алдамау және қиналған адамға көмектесу.',
    academicExplanationKz:
      'Адамның өміріндегі шешімдерін бағыттайтын рухани, адамгершілік және әлеуметтік бағдарлар.',
  },
  {
    id: 'term-moral',
    termKz: 'Мораль',
    category: 'personality',
    iconName: 'CheckCircleIcon',
    simpleExplanationKz:
      'Сенің ішіңдегі көрінбейтін бағдаршам: бірдеңе істер алдында «мынауың — жақсы, ал мынауың — обал, ренжітіп аласың» деп дұрыс жолды көрсетіп тұратын ар-ұждан.',
    academicExplanationKz:
      'Қоғамдағы жақсылық пен жамандық, әділдік пен парыз туралы жазылмаған адамгершілік ережелері.',
  },
];
