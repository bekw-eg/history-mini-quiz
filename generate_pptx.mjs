import pptxgen from 'pptxgenjs';

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9'; // 13.33 x 7.5 inches
pres.author = 'Civilization Quest';
pres.company = 'University Presentation';
pres.title = 'Адам → Қоғам → Өркениет → Тұлға';

// Common colors
const C_BG = '080B12';
const C_CARD = '0F172A';
const C_GOLD = 'F59E0B';
const C_CYAN = '38BDF8';
const C_EMERALD = '34D399';
const C_PURPLE = 'A78BFA';
const C_TEXT = 'F8FAFC';
const C_MUTED = '94A3B8';

const applySlideBg = (slide) => {
  slide.background = { color: C_BG };
};

const addSlideHeader = (slide, numberStr, titleStr, badgeStr = null) => {
  slide.addText(
    [
      { text: numberStr + '  ', options: { color: C_CYAN, bold: true } },
      { text: titleStr, options: { color: C_TEXT, bold: true } },
    ],
    { x: 0.8, y: 0.5, w: 9.0, h: 0.6, fontSize: 20, fontFace: 'Arial' }
  );

  if (badgeStr) {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.8,
      y: 0.5,
      w: 2.7,
      h: 0.5,
      fill: { color: '1E293B' },
      line: { color: C_GOLD, width: 1 },
      rectRadius: 0.25,
    });
    slide.addText(badgeStr, {
      x: 9.8,
      y: 0.5,
      w: 2.7,
      h: 0.5,
      align: 'center',
      valign: 'middle',
      fontSize: 12,
      bold: true,
      color: C_GOLD,
    });
  }
};

// ==========================================
// SLIDE 1: COVER
// ==========================================
{
  const s1 = pres.addSlide();
  applySlideBg(s1);

  // Top header pill
  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 0.6,
    w: 3.2,
    h: 0.4,
    fill: { color: '1E293B' },
    line: { color: '334155', width: 1 },
    rectRadius: 0.2,
  });
  s1.addText('УНИВЕРСИТЕТТІК ПРЕЗЕНТАЦИЯ', {
    x: 0.8,
    y: 0.6,
    w: 3.2,
    h: 0.4,
    align: 'center',
    valign: 'middle',
    fontSize: 10,
    color: C_MUTED,
    bold: true,
  });

  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 9.3,
    y: 0.6,
    w: 3.2,
    h: 0.4,
    fill: { color: '1E293B' },
    line: { color: C_GOLD, width: 1 },
    rectRadius: 0.2,
  });
  s1.addText('КВЕСТ-ПРЕЗЕНТАЦИЯ', {
    x: 9.3,
    y: 0.6,
    w: 3.2,
    h: 0.4,
    align: 'center',
    valign: 'middle',
    fontSize: 10,
    color: C_GOLD,
    bold: true,
  });

  // Flow tags
  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.8,
    y: 1.6,
    w: 9.7,
    h: 0.55,
    fill: { color: '0F172A' },
    line: { color: '334155', width: 1 },
    rectRadius: 0.25,
  });
  s1.addText('Алғашқы адам  →  Ежелгі өркениет  →  Индустриалды қала  →  Цифрлық тұлға', {
    x: 1.8,
    y: 1.6,
    w: 9.7,
    h: 0.55,
    align: 'center',
    valign: 'middle',
    fontSize: 13,
    color: C_CYAN,
    bold: true,
  });

  // Main title
  s1.addText(
    [
      { text: 'АДАМ ', options: { color: C_TEXT } },
      { text: '→ ', options: { color: C_GOLD } },
      { text: 'ҚОҒАМ ', options: { color: C_TEXT } },
      { text: '→ ', options: { color: C_GOLD } },
      { text: 'ӨРКЕНИЕТ ', options: { color: C_TEXT } },
      { text: '→ ', options: { color: C_CYAN } },
      { text: 'ТҰЛҒА', options: { color: C_PURPLE } },
    ],
    {
      x: 0.8,
      y: 2.6,
      w: 11.7,
      h: 1.2,
      align: 'center',
      valign: 'middle',
      fontSize: 40,
      bold: true,
    }
  );

  // Subtitle
  s1.addText(
    'Адам, қоғам және өркениет эволюциясы. Тұлғаның дүниетанымдық мәдениетін қалыптастыру моделі',
    {
      x: 1.5,
      y: 4.0,
      w: 10.3,
      h: 0.8,
      align: 'center',
      valign: 'middle',
      fontSize: 16,
      color: C_MUTED,
    }
  );

  // Question box
  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.2,
    y: 5.3,
    w: 8.9,
    h: 0.9,
    fill: { color: '1E293B' },
    line: { color: C_CYAN, width: 1.5 },
    rectRadius: 0.2,
  });
  s1.addText('«Бізді кім қалыптастырады: тарих па, қоғам ба, әлде өзіміз бе?»', {
    x: 2.2,
    y: 5.3,
    w: 8.9,
    h: 0.9,
    align: 'center',
    valign: 'middle',
    fontSize: 16,
    color: C_TEXT,
    bold: true,
  });
}

// ==========================================
// SLIDE 2: CULTURE VS CIVILIZATION
// ==========================================
{
  const s2 = pres.addSlide();
  applySlideBg(s2);
  addSlideHeader(s2, '02', 'МӘДЕНИЕТ ЖӘНЕ ӨРКЕНИЕТ');

  // Left card: Мәдениет
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 1.6,
    w: 5.6,
    h: 5.0,
    fill: { color: C_CARD },
    line: { color: C_GOLD, width: 2 },
    rectRadius: 0.2,
  });
  s2.addText('МӘДЕНИЕТ (Рухани сала)', {
    x: 1.2,
    y: 1.9,
    w: 4.8,
    h: 0.6,
    fontSize: 18,
    bold: true,
    color: C_GOLD,
  });
  s2.addText(
    '• Өнер мен эстетика\n• Тіл мен философия\n• Музыка мен әдебиет\n• Білім мен ғылым\n• Ұлттық салт-дәстүр мен құндылықтар',
    {
      x: 1.2,
      y: 2.7,
      w: 4.8,
      h: 3.5,
      fontSize: 16,
      color: C_TEXT,
      lineSpacing: 30,
    }
  );

  // Right card: Өркениет
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.9,
    y: 1.6,
    w: 5.6,
    h: 5.0,
    fill: { color: C_CARD },
    line: { color: C_CYAN, width: 2 },
    rectRadius: 0.2,
  });
  s2.addText('ӨРКЕНИЕТ (Материалдық сала)', {
    x: 7.3,
    y: 1.9,
    w: 4.8,
    h: 0.6,
    fontSize: 18,
    bold: true,
    color: C_CYAN,
  });
  s2.addText(
    '• Қалалар мен заманауи инфрақұрылым\n• Мемлекеттік басқару жүйесі\n• Заң, құқық және қоғамдық тәртіп\n• Технология, өндіріс және машиналар\n• Экономика, сауда және қаржы жүйесі',
    {
      x: 7.3,
      y: 2.7,
      w: 4.8,
      h: 3.5,
      fontSize: 16,
      color: C_TEXT,
      lineSpacing: 30,
    }
  );
}

// ==========================================
// SLIDE 3: HUMAN EVOLUTION TIMELINE (6 ERAS)
// ==========================================
{
  const s3 = pres.addSlide();
  applySlideBg(s3);
  addSlideHeader(s3, '03', 'АДАМЗАТТЫҢ ЭВОЛЮЦИЯ ЖОЛЫ', 'Кілт: Когнитивтік');

  const eras = [
    { title: 'Когнитивтік', sub: 'Тіл мен ойлау', col: C_GOLD },
    { title: 'Неолиттік', sub: 'Егіншілік пен қоныс', col: C_GOLD },
    { title: 'Аграрлық', sub: 'Мемлекеттер пайда болуы', col: C_EMERALD },
    { title: 'Өнеркәсіптік', sub: 'Бу машинасы мен өндіріс', col: C_CYAN },
    { title: 'Индустриалды', sub: 'Жаппай өндіріс', col: C_CYAN },
    { title: 'Қазіргі қоғам', sub: 'Цифрлық дәуір', col: C_PURPLE },
  ];

  // Connecting line
  s3.addShape(pres.shapes.LINE, {
    x: 1.2,
    y: 3.4,
    w: 10.9,
    h: 0,
    line: { color: C_CYAN, width: 3 },
  });

  eras.forEach((era, idx) => {
    const x = 0.8 + idx * 1.95;

    // Node circle
    s3.addShape(pres.shapes.OVAL, {
      x: x + 0.55,
      y: 3.05,
      w: 0.7,
      h: 0.7,
      fill: { color: C_CARD },
      line: { color: era.col, width: 2.5 },
    });
    s3.addText(String(idx + 1), {
      x: x + 0.55,
      y: 3.05,
      w: 0.7,
      h: 0.7,
      align: 'center',
      valign: 'middle',
      fontSize: 14,
      bold: true,
      color: era.col,
    });

    // Label card below
    s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x,
      y: 4.1,
      w: 1.8,
      h: 2.2,
      fill: { color: C_CARD },
      line: { color: '334155', width: 1 },
      rectRadius: 0.15,
    });
    s3.addText(era.title, {
      x: x + 0.05,
      y: 4.25,
      w: 1.7,
      h: 0.6,
      align: 'center',
      fontSize: 13,
      bold: true,
      color: era.col,
    });
    s3.addText(era.sub, {
      x: x + 0.05,
      y: 4.9,
      w: 1.7,
      h: 1.2,
      align: 'center',
      fontSize: 11,
      color: C_MUTED,
    });
  });
}

// ==========================================
// SLIDE 4: COGNITIVE REVOLUTION
// ==========================================
{
  const s4 = pres.addSlide();
  applySlideBg(s4);
  addSlideHeader(s4, '04', 'КОГНИТИВТІК РЕВОЛЮЦИЯ');

  // Banner
  s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.0,
    y: 1.5,
    w: 9.3,
    h: 0.8,
    fill: { color: '1E293B' },
    line: { color: C_GOLD, width: 1.5 },
    rectRadius: 0.2,
  });
  s4.addText('ТІЛ  →  ОЙЛАУ  →  БІРЛЕСУ', {
    x: 2.0,
    y: 1.5,
    w: 9.3,
    h: 0.8,
    align: 'center',
    valign: 'middle',
    fontSize: 20,
    bold: true,
    color: C_GOLD,
  });

  const cards = [
    { title: 'Күрделі тіл', desc: 'Дерексіз ұғымдар мен ойды білдіру қабілеті', col: C_CYAN },
    { title: 'Үңгір суреттері', desc: 'Алғашқы визуальды ақпарат, мәдениет пен өнер', col: C_GOLD },
    { title: 'От айналасы', desc: 'Тәжірибе, салт-жора және аңыздарды жеткізу', col: 'F87171' },
    { title: 'Үлкен топтар', desc: 'Жүзден аса адамның бірігіп қауым құруы', col: C_EMERALD },
  ];

  cards.forEach((c, idx) => {
    const x = 0.8 + idx * 2.95;
    s4.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x,
      y: 2.7,
      w: 2.8,
      h: 2.6,
      fill: { color: C_CARD },
      line: { color: '334155', width: 1 },
      rectRadius: 0.2,
    });
    s4.addText(c.title, {
      x: x + 0.1,
      y: 3.0,
      w: 2.6,
      h: 0.6,
      align: 'center',
      fontSize: 16,
      bold: true,
      color: c.col,
    });
    s4.addText(c.desc, {
      x: x + 0.15,
      y: 3.7,
      w: 2.5,
      h: 1.3,
      align: 'center',
      fontSize: 13,
      color: C_TEXT,
    });
  });

  s4.addText('«Адам басқа тірі ағзалардан ақпаратпен бөлісу арқылы озып шықты.»', {
    x: 1.0,
    y: 5.8,
    w: 11.3,
    h: 0.8,
    align: 'center',
    fontSize: 16,
    color: C_MUTED,
    italic: true,
  });
}

// ==========================================
// SLIDE 5: NEOLITHIC REVOLUTION
// ==========================================
{
  const s5 = pres.addSlide();
  applySlideBg(s5);
  addSlideHeader(s5, '05', 'НЕОЛИТТІК РЕВОЛЮЦИЯ', 'Кілт: Неолиттік');

  // Left card: Аңшы
  s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 1.6,
    w: 5.3,
    h: 4.2,
    fill: { color: C_CARD },
    line: { color: 'EF4444', width: 1.5 },
    rectRadius: 0.2,
  });
  s5.addText('АҢШЫ ЖӘНЕ ТЕРІМШІ', {
    x: 1.1,
    y: 1.9,
    w: 4.7,
    h: 0.6,
    fontSize: 18,
    bold: true,
    color: 'F87171',
    align: 'center',
  });
  s5.addText('• Көшпелі өмір салты\n• Табиғатқа толық тәуелділік\n• Тұрақты азық-түлік қорының болмауы', {
    x: 1.3,
    y: 2.8,
    w: 4.5,
    h: 2.5,
    fontSize: 16,
    color: C_TEXT,
    lineSpacing: 28,
  });

  // Middle arrow
  s5.addShape(pres.shapes.RIGHT_ARROW, {
    x: 6.3,
    y: 3.3,
    w: 0.7,
    h: 0.8,
    fill: { color: C_GOLD },
  });

  // Right card: Диқан
  s5.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.2,
    y: 1.6,
    w: 5.3,
    h: 4.2,
    fill: { color: C_CARD },
    line: { color: C_EMERALD, width: 1.5 },
    rectRadius: 0.2,
  });
  s5.addText('ДИҚАН ЖӘНЕ ОТЫРЫҚШЫ', {
    x: 7.5,
    y: 1.9,
    w: 4.7,
    h: 0.6,
    fontSize: 18,
    bold: true,
    color: C_EMERALD,
    align: 'center',
  });
  s5.addText('• Егіншілік пен мал шаруашылығы\n• Тұрақты қоныстар мен үйлер салу\n• Артық азық-түлік қоры мен сауданың пайда болуы', {
    x: 7.7,
    y: 2.8,
    w: 4.5,
    h: 2.5,
    fontSize: 16,
    color: C_TEXT,
    lineSpacing: 28,
  });

  s5.addText('«Адам табиғатқа бейімделуден оны өзіне ыңғайлап өзгертуге өтті.»', {
    x: 1.0,
    y: 6.2,
    w: 11.3,
    h: 0.6,
    align: 'center',
    fontSize: 16,
    color: C_GOLD,
    bold: true,
  });
}

// ==========================================
// SLIDE 6: AGRARIAN CIVILIZATIONS
// ==========================================
{
  const s6 = pres.addSlide();
  applySlideBg(s6);
  addSlideHeader(s6, '06', 'АГРАРЛЫҚ ӨРКЕНИЕТТЕР');

  const civs = [
    { title: 'Египет', desc: 'Пирамидалар, монументалды сәулет, мемлекеттік иерархия', col: C_GOLD },
    { title: 'Месопотамия', desc: 'Шынауи жазу (клинопись), алғашқы заңдар жинағы', col: C_CYAN },
    { title: 'Үндістан (Хараппа)', desc: 'Жоспарланған қалалар, су құбыры жүйесі', col: C_EMERALD },
    { title: 'Қытай', desc: 'Орталықтандырылған империя, Ұлы Қорған құрылысы', col: 'F43F5E' },
  ];

  // First 4 cards in 4 columns
  civs.forEach((c, idx) => {
    const x = 0.8 + idx * 2.95;
    s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x,
      y: 1.6,
      w: 2.8,
      h: 2.4,
      fill: { color: C_CARD },
      line: { color: c.col, width: 1.5 },
      rectRadius: 0.15,
    });
    s6.addText(c.title, {
      x: x + 0.1,
      y: 1.8,
      w: 2.6,
      h: 0.5,
      fontSize: 16,
      bold: true,
      color: c.col,
    });
    s6.addText(c.desc, {
      x: x + 0.1,
      y: 2.4,
      w: 2.6,
      h: 1.4,
      fontSize: 13,
      color: C_TEXT,
    });
  });

  // 5th big card below
  s6.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 4.3,
    w: 11.7,
    h: 2.0,
    fill: { color: C_CARD },
    line: { color: C_PURPLE, width: 1.5 },
    rectRadius: 0.2,
  });
  s6.addText('Грекия мен Рим өркениеттері', {
    x: 1.2,
    y: 4.6,
    w: 10.9,
    h: 0.5,
    fontSize: 18,
    bold: true,
    color: C_PURPLE,
  });
  s6.addText('Демократия, азаматтық құқық, философия және қазіргі құқықтық мемлекеттің рухани-заңдық негіздері қаланды.', {
    x: 1.2,
    y: 5.2,
    w: 10.9,
    h: 0.8,
    fontSize: 15,
    color: C_TEXT,
  });
}

// ==========================================
// SLIDE 7: INDUSTRIAL REVOLUTION
// ==========================================
{
  const s7 = pres.addSlide();
  applySlideBg(s7);
  addSlideHeader(s7, '07', 'ӨНЕРКӘСІПТІК РЕВОЛЮЦИЯ');

  s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 1.6,
    w: 5.6,
    h: 4.0,
    fill: { color: C_CARD },
    line: { color: C_GOLD, width: 1.5 },
    rectRadius: 0.2,
  });
  s7.addText('ДӘСТҮРЛІ КЕЗЕҢ', {
    x: 1.2,
    y: 2.0,
    w: 4.8,
    h: 0.6,
    align: 'center',
    fontSize: 20,
    bold: true,
    color: C_GOLD,
  });
  s7.addText('• Ауылдық өмір салты\n• Ат көлігі мен қарапайым арба\n• Қол еңбегі мен шеберханалар\n• Табиғат ырғағымен өмір сүру', {
    x: 1.4,
    y: 2.8,
    w: 4.4,
    h: 2.5,
    fontSize: 16,
    color: C_TEXT,
    lineSpacing: 28,
  });

  s7.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.9,
    y: 1.6,
    w: 5.6,
    h: 4.0,
    fill: { color: C_CARD },
    line: { color: C_CYAN, width: 1.5 },
    rectRadius: 0.2,
  });
  s7.addText('ИНДУСТРИАЛДЫ ДӘУІР', {
    x: 7.3,
    y: 2.0,
    w: 4.8,
    h: 0.6,
    align: 'center',
    fontSize: 20,
    bold: true,
    color: C_CYAN,
  });
  s7.addText('• Фабрикалар мен ірі зауыттар\n• Теміржол, бу пойыздары мен кемелер\n• Жаппай машиналық өндіріс\n• Қалалардың күрт өсуі (урбанизация)', {
    x: 7.5,
    y: 2.8,
    w: 4.4,
    h: 2.5,
    fontSize: 16,
    color: C_TEXT,
    lineSpacing: 28,
  });

  s7.addText('«Машина тек өндірісті емес, адамның өмір салты мен уақытты қабылдауын өзгертті.»', {
    x: 1.0,
    y: 6.0,
    w: 11.3,
    h: 0.8,
    align: 'center',
    fontSize: 16,
    color: C_CYAN,
    bold: true,
  });
}

// ==========================================
// SLIDE 8: ANCIENT VS MODERN SOCIETY
// ==========================================
{
  const s8 = pres.addSlide();
  applySlideBg(s8);
  addSlideHeader(s8, '08', 'ЕЖЕЛГІ ҚОҒАМ VS ҚАЗІРГІ ҚОҒАМ', 'Кілт: Өркениет');

  const rows = [
    { label: 'Көлік', oldVal: 'Ат арба мен жаяу жүру', newVal: 'Ұшақ пен электромобиль' },
    { label: 'Ақпарат', oldVal: 'Пергамент хат пен шапқыншы', newVal: 'Смартфон, Ғаламтор және ЖИ' },
    { label: 'Жарық', oldVal: 'Майшам мен ашық от', newVal: 'Электр мен жасыл энергия' },
    { label: 'Еңбек', oldVal: 'Ауыр қол еңбегі', newVal: 'Автоматтандыру мен роботтар' },
  ];

  rows.forEach((r, idx) => {
    const y = 1.6 + idx * 1.15;
    s8.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8,
      y: y,
      w: 11.7,
      h: 0.95,
      fill: { color: C_CARD },
      line: { color: '334155', width: 1 },
      rectRadius: 0.15,
    });

    s8.addText(r.label + ':', {
      x: 1.2,
      y: y,
      w: 1.8,
      h: 0.95,
      valign: 'middle',
      fontSize: 15,
      bold: true,
      color: C_MUTED,
    });

    s8.addText(r.oldVal, {
      x: 3.1,
      y: y,
      w: 3.8,
      h: 0.95,
      valign: 'middle',
      fontSize: 15,
      color: C_GOLD,
    });

    s8.addText('↔', {
      x: 7.0,
      y: y,
      w: 0.8,
      h: 0.95,
      align: 'center',
      valign: 'middle',
      fontSize: 16,
      color: C_MUTED,
    });

    s8.addText(r.newVal, {
      x: 7.9,
      y: y,
      w: 4.2,
      h: 0.95,
      valign: 'middle',
      fontSize: 15,
      color: C_CYAN,
      bold: true,
    });
  });

  s8.addText('«Қоғам мен технология өзгерген сайын адамның ойлау түйсігі де өзгереді.»', {
    x: 1.0,
    y: 6.4,
    w: 11.3,
    h: 0.6,
    align: 'center',
    fontSize: 15,
    color: C_MUTED,
    italic: true,
  });
}

// ==========================================
// SLIDE 9: PIVOT SLIDE
// ==========================================
{
  const s9 = pres.addSlide();
  applySlideBg(s9);

  // Big center transition card
  s9.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5,
    y: 1.2,
    w: 10.3,
    h: 5.2,
    fill: { color: '0F172A' },
    line: { color: C_PURPLE, width: 2 },
    rectRadius: 0.3,
  });

  // Top icon silhouette
  s9.addShape(pres.shapes.OVAL, {
    x: 5.7,
    y: 1.6,
    w: 1.9,
    h: 1.9,
    fill: { color: '1E293B' },
    line: { color: C_CYAN, width: 2 },
  });
  s9.addText('АДАМ', {
    x: 5.7,
    y: 1.6,
    w: 1.9,
    h: 1.9,
    align: 'center',
    valign: 'middle',
    fontSize: 18,
    bold: true,
    color: C_CYAN,
  });

  // Surrounding factors pill
  s9.addText('Отбасы  •  Білім  •  Қоғам  •  Мемлекет  •  БАҚ / Интернет', {
    x: 2.0,
    y: 3.8,
    w: 9.3,
    h: 0.5,
    align: 'center',
    fontSize: 14,
    color: C_MUTED,
    bold: true,
  });

  // Grand central question
  s9.addText('«Өркениет пен технология өзгерді.\nАл АДАМНЫҢ ӨЗІ қалай қалыптасады?»', {
    x: 2.0,
    y: 4.5,
    w: 9.3,
    h: 1.4,
    align: 'center',
    fontSize: 26,
    bold: true,
    color: C_GOLD,
  });
}

// ==========================================
// SLIDE 10: VALUES SYSTEM
// ==========================================
{
  const s10 = pres.addSlide();
  applySlideBg(s10);
  addSlideHeader(s10, '10', 'ТҰЛҒАНЫҢ ҚҰНДЫЛЫҚТАР СЕКТОРЫ', 'Кілт: Құндылық');

  // Center persona card
  s10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2,
    y: 2.5,
    w: 2.9,
    h: 2.2,
    fill: { color: '1E293B' },
    line: { color: C_CYAN, width: 2 },
    rectRadius: 0.25,
  });
  s10.addText('ТҰЛҒА\n(Ішкі рухани тірек)', {
    x: 5.2,
    y: 2.5,
    w: 2.9,
    h: 2.2,
    align: 'center',
    valign: 'middle',
    fontSize: 18,
    bold: true,
    color: C_TEXT,
  });

  // 6 value boxes around
  const values = [
    { name: 'Адамгершілік', x: 1.2, y: 1.8, col: 'F43F5E' },
    { name: 'Әділеттілік', x: 8.8, y: 1.8, col: C_CYAN },
    { name: 'Құрмет пен Ар-ұждан', x: 1.2, y: 3.3, col: C_EMERALD },
    { name: 'Жауапкершілік', x: 8.8, y: 3.3, col: C_GOLD },
    { name: 'Еркіндік', x: 1.2, y: 4.8, col: C_PURPLE },
    { name: 'Отбасы қадірі', x: 8.8, y: 4.8, col: 'EC4899' },
  ];

  values.forEach((v) => {
    s10.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: v.x,
      y: v.y,
      w: 3.3,
      h: 1.1,
      fill: { color: C_CARD },
      line: { color: v.col, width: 1.5 },
      rectRadius: 0.15,
    });
    s10.addText(v.name, {
      x: v.x,
      y: v.y,
      w: 3.3,
      h: 1.1,
      align: 'center',
      valign: 'middle',
      fontSize: 16,
      bold: true,
      color: C_TEXT,
    });
  });

  s10.addText('«Құндылықтар — адамның кез келген шешім қабылдауына бағыт беретін ішкі компасы.»', {
    x: 1.0,
    y: 6.3,
    w: 11.3,
    h: 0.6,
    align: 'center',
    fontSize: 15,
    color: C_GOLD,
    bold: true,
  });
}

// ==========================================
// SLIDE 11: WHO FORMS PERSONALITY?
// ==========================================
{
  const s11 = pres.addSlide();
  applySlideBg(s11);
  addSlideHeader(s11, '11', 'ТҰЛҒАНЫ КІМ ҚАЛЫПТАСТЫРАДЫ?', 'Кілттер: Отбасы, Білім');

  const factors = [
    { title: '1. ОТБАСЫ', desc: 'Алғашқы тәрбие, эмоционалды қауіпсіздік және базалық құндылықтар негізі', col: 'EC4899' },
    { title: '2. БІЛІМ', desc: 'Жүйелі білім, сын тұрғысынан ойлау қабілеті мен кәсіби дағдылар', col: C_CYAN },
    { title: '3. ҚОҒАМ', desc: 'Әлеуметтік орта, достық, қоғамдық нормалар мен дәстүрлер', col: C_EMERALD },
    { title: '4. МЕМЛЕКЕТ', desc: 'Заңдар, азаматтық жауапкершілік және құқықтық мәдениет', col: C_GOLD },
  ];

  // First 4 factors in 2x2 grid
  factors.forEach((f, idx) => {
    const x = idx % 2 === 0 ? 0.8 : 6.9;
    const y = idx < 2 ? 1.6 : 3.2;
    s11.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x,
      y: y,
      w: 5.6,
      h: 1.35,
      fill: { color: C_CARD },
      line: { color: f.col, width: 1.5 },
      rectRadius: 0.15,
    });
    s11.addText(f.title, {
      x: x + 0.3,
      y: y + 0.15,
      w: 5.0,
      h: 0.4,
      fontSize: 15,
      bold: true,
      color: f.col,
    });
    s11.addText(f.desc, {
      x: x + 0.3,
      y: y + 0.55,
      w: 5.0,
      h: 0.7,
      fontSize: 13,
      color: C_TEXT,
    });
  });

  // 5th wide factor
  s11.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8,
    y: 4.8,
    w: 11.7,
    h: 1.4,
    fill: { color: C_CARD },
    line: { color: C_PURPLE, width: 1.5 },
    rectRadius: 0.15,
  });
  s11.addText('5. БАҚ ЖӘНЕ ИНТЕРНЕТ', {
    x: 1.2,
    y: 5.0,
    w: 10.9,
    h: 0.4,
    fontSize: 15,
    bold: true,
    color: C_PURPLE,
  });
  s11.addText('Ақпараттық ағын, медиасауаттылық, әлеуметтік желілер және жаһандық дүниетаным кеңістігі.', {
    x: 1.2,
    y: 5.45,
    w: 10.9,
    h: 0.6,
    fontSize: 13,
    color: C_TEXT,
  });
}

// ==========================================
// SLIDE 12: FORMATION MODEL OF WORLDVIEW
// ==========================================
{
  const s12 = pres.addSlide();
  applySlideBg(s12);
  addSlideHeader(s12, '12', 'ТҰЛҒАНЫҢ ҚАЛЫПТАСУ МОДЕЛІ');

  // Top inputs
  s12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.8,
    y: 1.4,
    w: 9.7,
    h: 0.6,
    fill: { color: C_CARD },
    line: { color: '334155', width: 1 },
    rectRadius: 0.2,
  });
  s12.addText('Отбасы  +  Білім  +  Қоғам  +  Мемлекет  +  БАҚ', {
    x: 1.8,
    y: 1.4,
    w: 9.7,
    h: 0.6,
    align: 'center',
    valign: 'middle',
    fontSize: 14,
    bold: true,
    color: C_MUTED,
  });

  // Arrow down 1
  s12.addText('↓', {
    x: 6.0,
    y: 2.05,
    w: 1.3,
    h: 0.4,
    align: 'center',
    fontSize: 20,
    color: C_CYAN,
    bold: true,
  });

  // Middle center: ТҰЛҒА
  s12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.2,
    y: 2.5,
    w: 6.9,
    h: 0.85,
    fill: { color: '1E293B' },
    line: { color: C_CYAN, width: 2 },
    rectRadius: 0.2,
  });
  s12.addText('ТҰЛҒА (Ішкі Таңдау мен Рефлексия)', {
    x: 3.2,
    y: 2.5,
    w: 6.9,
    h: 0.85,
    align: 'center',
    valign: 'middle',
    fontSize: 18,
    bold: true,
    color: C_TEXT,
  });

  // Arrow down 2
  s12.addText('↓', {
    x: 6.0,
    y: 3.45,
    w: 1.3,
    h: 0.4,
    align: 'center',
    fontSize: 20,
    color: C_CYAN,
    bold: true,
  });

  // Bottom 4 qualities
  const qualities = [
    { title: 'ДҮНИЕТАНЫМ', desc: 'Өмірлік көзқарас жүйесі', col: C_GOLD },
    { title: 'МОРАЛЬ', desc: 'Жақсылық пен жамандықты айыру', col: C_CYAN },
    { title: 'ҚҰНДЫЛЫҚ', desc: 'Негізгі рухани тірек', col: C_EMERALD },
    { title: 'МІНЕЗ-ҚҰЛЫҚ', desc: 'Саналы нақты іс-әрекет', col: C_PURPLE },
  ];

  qualities.forEach((q, idx) => {
    const x = 0.8 + idx * 2.95;
    s12.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x,
      y: 3.9,
      w: 2.8,
      h: 2.1,
      fill: { color: C_CARD },
      line: { color: q.col, width: 1.5 },
      rectRadius: 0.15,
    });
    s12.addText(q.title, {
      x: x + 0.1,
      y: 4.15,
      w: 2.6,
      h: 0.5,
      align: 'center',
      fontSize: 15,
      bold: true,
      color: q.col,
    });
    s12.addText(q.desc, {
      x: x + 0.1,
      y: 4.75,
      w: 2.6,
      h: 1.0,
      align: 'center',
      fontSize: 12,
      color: C_TEXT,
    });
  });

  s12.addText('«Тұлға сыртқы ортадан әсер алады, бірақ өз таңдауын өзі жасайды.»', {
    x: 1.0,
    y: 6.3,
    w: 11.3,
    h: 0.6,
    align: 'center',
    fontSize: 16,
    color: C_GOLD,
    bold: true,
  });
}

// ==========================================
// SLIDE 13: FINAL QUEST & QR CODE
// ==========================================
{
  const s13 = pres.addSlide();
  applySlideBg(s13);
  addSlideHeader(s13, '13', 'QR • ИНТЕРАКТИВТІ КВЕСТ');

  // Center QR Card
  s13.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.1,
    y: 1.5,
    w: 5.1,
    h: 5.3,
    fill: { color: C_CARD },
    line: { color: C_CYAN, width: 2 },
    rectRadius: 0.25,
  });

  // White background for QR code
  s13.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.8,
    y: 1.8,
    w: 3.7,
    h: 3.7,
    fill: { color: 'FFFFFF' },
    line: { color: 'E2E8F0', width: 1 },
    rectRadius: 0.15,
  });

  // Add QR code image
  s13.addImage({
    path: 'qr.png',
    x: 4.95,
    y: 1.95,
    w: 3.4,
    h: 3.4,
  });

  // Instruction caption
  s13.addText('Камераны бағыттап, квест-ойынға өтіңіз', {
    x: 4.2,
    y: 5.7,
    w: 4.9,
    h: 0.45,
    align: 'center',
    fontSize: 16,
    bold: true,
    color: C_TEXT,
  });

  s13.addText('Интерактивті веб-платформа & хронология ойыны', {
    x: 4.2,
    y: 6.15,
    w: 4.9,
    h: 0.4,
    align: 'center',
    fontSize: 12,
    color: C_MUTED,
  });
}

// Generate the PowerPoint file
const outputFileName = 'Civilization_Quest_Presentation.pptx';
await pres.writeFile({ fileName: outputFileName });
console.log(`PowerPoint presentation saved as: ${outputFileName}`);
