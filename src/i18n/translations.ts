export const languages = {
  en: 'EN',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.journey': 'Journey',
    'nav.now': 'Now',
    'nav.writing': 'Writing',
    'nav.projects': 'Projects',
    'nav.life': 'Life',
    'nav.contact': 'Contact',

    // Home
    'home.greeting': "Hi, I'm Tom.",
    'home.tagline': "I build things — products, systems, and a life I actually want to live.",
    'home.tagline2': "This site is where I document the process.",
    'home.subtext': "AI, software, product design, fitness, music, and honest progress — in public.",
    'home.cta.journey': "Start from the beginning",
    'home.cta.now': "What I'm working on now",
    'home.cta.writing': "Read my latest notes",

    // About
    'about.title': "Who I Am",
    'about.subtitle': "Without the boring stuff.",
    'about.section1.title': "The Short Version",
    'about.section1.text': "I'm someone who gets excited by new ideas — especially when they can be turned into something real.",
    'about.section2.title': "Builder, Not Just Thinker",
    'about.section2.text1': "I'm not just a thinker. I'm a builder.",
    'about.section2.text2': "I like completing things. Shipping. Learning by doing.",
    'about.section2.text3': "Talking is cheap — building teaches you what actually matters.",
    'about.section3.title': "Context",
    'about.section3.text1': "UCSD → CMU → Yale → the real world. Background in engineering and AI.",
    'about.section3.text2': "Founded Steplify.ai — a startup that didn't make it, but taught me everything.",
    'about.section3.text3': "Currently working as an AI Product Manager, building systems that matter.",
    'about.section3.text4': "Long-term interest: AI systems, products, and meaningful technology.",

    // Journey
    'journey.title': "How I Got Here",
    'journey.subtitle': "Evolution, not perfection.",

    // Now
    'now.title': "Now",
    'now.subtitle': "What I'm currently focused on.",
    'now.life.title': "Life",
    'now.life.intro': "These aren't hobbies on the side — they're part of how I stay grounded and creative.",
    'now.work.title': "Work",
    'now.work.intro': "Building in public and sharing what I learn along the way.",
    'now.updated': "Last updated",

    // Writing
    'writing.title': "Writing",
    'writing.subtitle': "Thinking in public.",
    'writing.intro': "These are notes, thoughts, progress logs, and ideas I'm still forming. Some will age well. Some won't — that's the point.",
    'writing.read': "Read more →",

    // Projects
    'projects.title': "Projects",
    'projects.subtitle': "Things I've Built",
    'projects.intro': "Not everything works. But everything teaches you something.",
    'projects.read': "Read the full story →",

    // Life
    'life.title': "Life",
    'life.subtitle': "Outside of work.",

    // Contact
    'contact.title': "Contact",
    'contact.subtitle': "Reach out.",
    'contact.text': "If you're building something, thinking deeply about AI, or just want to exchange ideas — feel free to reach out.",
    'contact.filter': "I read everything, but I reply slowly and intentionally.",

    // Footer
    'footer.text': "Built in public by Tom. Progress > Perfection.",
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.journey': '旅程',
    'nav.now': '现在',
    'nav.writing': '写作',
    'nav.projects': '项目',
    'nav.life': '生活',
    'nav.contact': '联系',

    // Home
    'home.greeting': "你好，我是 Tom。",
    'home.tagline': "我做产品、建系统、也在建造一种我真正想要的生活。",
    'home.tagline2': "这个网站记录了这一切的过程。",
    'home.subtext': "AI、软件、产品设计、健身、音乐 —— 公开分享，真实记录。",
    'home.cta.journey': "从头开始了解",
    'home.cta.now': "我现在在做什么",
    'home.cta.writing': "读我的最新笔记",

    // About
    'about.title': "关于我",
    'about.subtitle': "不是那种无聊的简历。",
    'about.section1.title': "简短版",
    'about.section1.text': "我是那种一看到新想法就兴奋的人 —— 尤其是当它能变成真实的东西。",
    'about.section2.title': "建造者，不只是思考者",
    'about.section2.text1': "我不只是一个想法很多的人，我是一个建造者。",
    'about.section2.text2': "我喜欢把事情做完、交付、在实践中学习。",
    'about.section2.text3': "空谈廉价 —— 建造才能教会你什么是真正重要的。",
    'about.section3.title': "背景",
    'about.section3.text1': "UCSD → CMU → Yale → 真实世界。工程与AI背景。",
    'about.section3.text2': "创办了 Steplify.ai —— 一个没成功的创业，但它教会了我一切。",
    'about.section3.text3': "目前担任AI产品经理，构建有意义的系统。",
    'about.section3.text4': "长期兴趣：AI系统、产品与有意义的技术。",

    // Journey
    'journey.title': "我的旅程",
    'journey.subtitle': "进化，而非完美。",

    // Now
    'now.title': "现在",
    'now.subtitle': "我当前专注的事。",
    'now.life.title': "生活",
    'now.life.intro': "这些不是业余爱好 —— 它们是我保持专注和创造力的方式。",
    'now.work.title': "工作",
    'now.work.intro': "公开建造，分享沿途所学。",
    'now.updated': "最后更新",

    // Writing
    'writing.title': "写作",
    'writing.subtitle': "公开思考。",
    'writing.intro': "这些是笔记、想法、进度日志和尚在形成中的想法。有些会经得起时间考验，有些不会 —— 这就是意义所在。",
    'writing.read': "阅读更多 →",

    // Projects
    'projects.title': "项目",
    'projects.subtitle': "我做过的东西",
    'projects.intro': "不是每个项目都成功了。但每一个都教会了我一些东西。",
    'projects.read': "阅读完整故事 →",

    // Life
    'life.title': "生活",
    'life.subtitle': "工作之外。",

    // Contact
    'contact.title': "联系",
    'contact.subtitle': "联系我。",
    'contact.text': "如果你在做一些有意思的事、在深入思考AI，或者只是想交流想法 —— 随时联系我。",
    'contact.filter': "我会读每条消息，但我回复得慢而且有选择性。",

    // Footer
    'footer.text': "Tom 公开构建。进步 > 完美。",
  }
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: keyof typeof translations['en']): string {
  return translations[lang][key] || translations[defaultLang][key] || key;
}

export function getLocalePath(lang: Lang, path: string): string {
  const cleanPath = path.replace(/^\/(en|zh)/, '') || '/';
  if (lang === defaultLang) return cleanPath;
  return `/${lang}${cleanPath}`;
}

