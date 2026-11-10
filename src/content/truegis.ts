import type { Card, Plan } from "../components/Layout";
import type { Tr } from "../i18n";

/** Тарифы по умолчанию: позже заменим данными с сервера (пакеты из AdminRoot). */
export type TrueGisText = {
  title: string;
  description: string;
  nav: { features: string; business: string; shifo: string; pricing: string; faq: string; contact: string };
  cta: string;
  hero: { eyebrow: string; h1a: string; h1b: string; text: string; openBot: string; addBusiness: string; notes: string[] };
  stats: { value: string; label: string }[];
  clientsTitle: string;
  users: { title: string; text: string; cards: Card[] };
  business: {
    title: string;
    text: string;
    blocks: { title: string; text: string; points: string[] }[];
  };
  why: { title: string; cards: Card[] };
  promo: { title: string; text: string; points: string[]; cta: string };
  steps: { title: string; items: { title: string; text: string }[] };
  pricing: { title: string; text: string; note: string; plans: Plan[] };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: { title: string; text: string };
};

export const TRUEGIS: Tr<TrueGisText> = {
  uz: {
    title: "TrueGis — Telegramdagi AI shahar yo‘lboshchisi va biznesingiz uchun yangi mijozlar",
    description: "TrueGis — Telegram’dagi AI yo‘lboshchi: joylar, xarita, taksi narxi, sharhlar. Biznesingizni qo‘shing — mini ilova, bot, CRM va AI yordamchi bilan yangi mijozlar oqimini oling.",
    nav: { features: "Imkoniyatlar", business: "Biznes uchun", shifo: "Shifo24", pricing: "Tariflar", faq: "Savollar", contact: "Aloqa" },
    cta: "Biznesni qo‘shish",
    hero: {
      eyebrow: "Telegram ichida · AI bilan",
      h1a: "TrueGis:",
      h1b: "biznesingiz o‘sishi uchun hamkor",
      text: "Mijozlaringiz Telegram’ning o‘zida eng yaqin restoran, dorixona, klinika, avtoservis va boshqa joylarni topadi — jumladan, sizning biznesingizni ham. Oddiy so‘z bilan so‘rang, AI javob beradi: masofa, ish vaqti, taksi narxi va sharhlar bir joyda.",
      openBot: "Botni ochish",
      addBusiness: "Biznesni qo‘shish",
      notes: ["Ilova o‘rnatish shart emas", "O‘zbek, rus, ingliz tilida", "24/7 ishlaydi"],
    },
    stats: [
      { value: "150 000+", label: "foydalanuvchi" },
      { value: "35 000+", label: "joy katalogda" },
      { value: "1 200+", label: "hamkor biznes" },
      { value: "2 mln+", label: "qidiruv har oy" },
    ],
    clientsTitle: "Bizga ishonishadi",
    users: {
      title: "Mijozlaringiz uchun — hammasi bitta botda",
      text: "TrueGis odamlarga kerakli joyni bir necha soniyada topishga yordam beradi. Har bir qidiruv — sizning biznesingiz uchun yangi mijoz.",
      cards: [
        { icon: "🤖", title: "AI qidiruv", text: "«Yaqinda arzon osh qayerda?» — oddiy so‘z bilan so‘rang, AI eng mos joylarni topadi.", tag: "Yangi" },
        { icon: "🗺️", title: "Xarita va masofa", text: "Sizgacha bo‘lgan masofa, yo‘l vaqti va eng yaqin metro — foydalanuvchi joylashuvi bo‘yicha." },
        { icon: "🚕", title: "Taksi narxi", text: "Yandex Go narxini oldindan ko‘rsatadi va bir bosishda taksi chaqiradi." },
        { icon: "🕒", title: "Ish vaqti", text: "«Hozir ochiq» belgisi va to‘liq jadval — mijoz yopiq eshik oldiga kelmaydi." },
        { icon: "⭐", title: "Sharhlar va reyting", text: "Haqiqiy sharhlar ishonch uyg‘otadi va yangi mijozlarni olib keladi." },
        { icon: "🛍️", title: "Buyurtma va bron", text: "Menyu, savat, stol yoki qabulga yozilish — Telegram’dan chiqmasdan." },
      ],
    },
    business: {
      title: "Biznesingiz uchun TrueGis",
      text: "Katalogdagi sahifadan tortib o‘z mini ilovangiz, botingiz va CRM’gacha — mijozlarni jalb qilish va ushlab qolish uchun hammasi.",
      blocks: [
        {
          title: "Biznesingiz diqqat markazida",
          text: "Mijoz sizni qidirganda yoki yaqin atrofda joy izlaganda — TrueGis sizni birinchilardan ko‘rsatadi.",
          points: ["Chiroyli sahifa: rasmlar, manzil, ish vaqti, telefon", "Xaritada belgi va yo‘l ko‘rsatish", "Kategoriya va AI tavsiyalarida chiqish", "Mijozlar oqimi 30–40% gacha oshadi"],
        },
        {
          title: "Mini ilova va o‘z botingiz",
          text: "Telegram ichida to‘liq do‘kon yoki bron tizimi — dasturchisiz, bir necha kunda ishga tushadi.",
          points: ["Menyu, katalog, savat va buyurtmalar", "Stol, xizmat yoki qabulga yozilish", "Brendingiz bilan o‘z Telegram botingiz", "Aksiyalar va xabarnomalar mijozlarga"],
        },
        {
          title: "AI yordamchi va CRM",
          text: "AI mijozlaringizga 24/7 javob beradi, siz esa barcha buyurtma va mijozlarni bitta panelda ko‘rasiz.",
          points: ["Savollarga tez javob — kechasi ham", "Buyurtma va mijozlar tarixi", "Statistika: ko‘rishlar, qo‘ng‘iroqlar, yo‘nalishlar", "Xodimlar uchun rollar va kirish huquqlari"],
        },
      ],
    },
    why: {
      title: "Nega aynan TrueGis?",
      cards: [
        { icon: "🎯", title: "Individual yondashuv", text: "Har bir loyihani batafsil muhokama qilamiz va ehtiyojingizga moslaymiz." },
        { icon: "🤝", title: "Shaxsiy yordam", text: "Ulanishdan tortib natijagacha — har bosqichda menejeringiz yoningizda." },
        { icon: "📈", title: "Ko‘proq ko‘rinish", text: "Mijozlarimiz ulanganidan keyin joylari 30–40% ko‘proq ko‘rilayotganini aytishadi." },
        { icon: "🚀", title: "Yangi auditoriya", text: "Telegram’dagi minglab foydalanuvchilar — sotuvlaringiz uchun yangi kanal." },
      ],
    },
    promo: {
      title: "Klinikangiz bormi? Shifo24 bilan tanishing",
      text: "Klinikalar uchun alohida yechim: onlayn yozilish, jonli navbat, SMS eslatmalar, elektron tibbiy karta va klinikaning o‘z Telegram boti.",
      points: ["Bemorlar 24/7 onlayn yoziladi", "Navbat va qabul bir ekranda", "Klinikangiz brendidagi bot"],
      cta: "Shifo24 haqida batafsil",
    },
    steps: {
      title: "Qanday ishlaymiz",
      items: [
        { title: "Tahlil va taklif", text: "Ariza qoldiring — biznesingizni o‘rganib, sizga mos taklif tayyorlaymiz. Maslahat bepul." },
        { title: "Ulash va ishga tushirish", text: "Sahifa, mini ilova va botni sozlaymiz, xodimlaringizni o‘rgatamiz. Odatda 1–3 kun." },
        { title: "Qo‘llab-quvvatlash va o‘sish", text: "Natijalarni kuzatamiz, hisobotlar beramiz va doimiy texnik yordam ko‘rsatamiz." },
      ],
    },
    pricing: {
      title: "Tariflar",
      text: "Kichik kafedan tortib tarmoqqacha — har bir biznes uchun mos tarif.",
      note: "Narxlar QQS’siz ko‘rsatilgan. Yillik to‘lovda — 2 oy sovg‘a.",
      plans: [
        { name: "Start", price: "0", per: "so‘m / oy", text: "Katalogda bepul sahifa", points: ["Sahifa va xaritada belgi", "Ish vaqti va kontaktlar", "Sharhlar"], cta: "Bepul boshlash" },
        { name: "Biznes", price: "290 000", per: "so‘m / oy", text: "O‘sayotgan biznes uchun", points: ["Start’dagi hammasi", "Mini ilova: menyu yoki bron", "Qidiruvda yuqori o‘rin", "Statistika"], cta: "Tanlash" },
        { name: "Pro", price: "590 000", per: "so‘m / oy", text: "Eng ko‘p tanlanadi", hot: "Mashhur", points: ["Biznes’dagi hammasi", "O‘z Telegram botingiz", "AI yordamchi 24/7", "CRM va xodimlar rollari"], cta: "Tanlash" },
        { name: "Korporativ", price: "Kelishiladi", text: "Tarmoq va filiallar uchun", points: ["Pro’dagi hammasi", "Bir nechta filial", "Integratsiyalar va API", "Shaxsiy menejer"], cta: "Bog‘lanish" },
      ],
    },
    faq: {
      title: "Ko‘p beriladigan savollar",
      items: [
        { q: "TrueGis nima?", a: "TrueGis — Telegram’dagi AI yo‘lboshchi: eng yaqin do‘kon, restoran, dorixona, klinika va boshqa joylarni topishga yordam beradi. Bizneslar esa bu yerda yangi mijozlar topadi." },
        { q: "Biznesimni qanday qo‘shaman?", a: "Saytdagi arizani to‘ldiring yoki Telegram’da yozing. Menejerimiz bog‘lanib, sahifangizni 1–3 kunda ishga tushiradi." },
        { q: "Bu menga nima beradi?", a: "Ko‘proq ko‘rinish, yangi mijozlar oqimi, onlayn buyurtma va bron, AI yordamchi va barcha mijozlar bitta panelda." },
        { q: "Dasturchi kerakmi?", a: "Yo‘q. Hammasini o‘zimiz sozlaymiz va xodimlaringizni o‘rgatamiz." },
        { q: "Narxi qancha?", a: "Bepul Start tarifidan boshlash mumkin. Pullik tariflar 290 000 so‘m/oydan. Aniq taklifni biznesingizga qarab tayyorlaymiz." },
        { q: "Yordam qanday ishlaydi?", a: "Telegram, telefon va sayt orqali — har bosqichda texnik yordam, hisobotlar va tavsiyalar." },
      ],
    },
    contact: { title: "Biznesingizni yangi bosqichga olib chiqing", text: "Birinchi qadamga tayyormisiz? Arizani to‘ldiring — mutaxassislarimiz bepul maslahat beradi va TrueGis biznesingizni qanday o‘stirishini ko‘rsatadi." },
  },
  ru: {
    title: "TrueGis — AI-гид по городу в Telegram и новые клиенты для вашего бизнеса",
    description: "TrueGis — AI-гид в Telegram: места, карта, цена такси, отзывы. Подключите бизнес — мини-приложение, бот, CRM и AI-помощник приведут новый поток клиентов.",
    nav: { features: "Возможности", business: "Для бизнеса", shifo: "Shifo24", pricing: "Тарифы", faq: "Вопросы", contact: "Контакты" },
    cta: "Добавить бизнес",
    hero: {
      eyebrow: "Внутри Telegram · с AI",
      h1a: "TrueGis:",
      h1b: "партнёр для роста вашего бизнеса",
      text: "Ваши клиенты прямо в Telegram находят ближайшие рестораны, аптеки, клиники, автосервисы и другие места — включая ваш бизнес. Спросите обычными словами — AI ответит: расстояние, часы работы, цена такси и отзывы в одном месте.",
      openBot: "Открыть бота",
      addBusiness: "Добавить бизнес",
      notes: ["Без установки приложений", "Узбекский, русский, английский", "Работает 24/7"],
    },
    stats: [
      { value: "150 000+", label: "пользователей" },
      { value: "35 000+", label: "мест в каталоге" },
      { value: "1 200+", label: "бизнесов-партнёров" },
      { value: "2 млн+", label: "поисков в месяц" },
    ],
    clientsTitle: "Нам доверяют",
    users: {
      title: "Для ваших клиентов — всё в одном боте",
      text: "TrueGis помогает людям найти нужное место за секунды. Каждый поиск — новый клиент для вашего бизнеса.",
      cards: [
        { icon: "🤖", title: "AI-поиск", text: "«Где рядом недорогой плов?» — спросите обычными словами, AI подберёт лучшие места.", tag: "Новое" },
        { icon: "🗺️", title: "Карта и расстояние", text: "Расстояние, время в пути и ближайшее метро — по геопозиции пользователя." },
        { icon: "🚕", title: "Цена такси", text: "Показывает цену Yandex Go заранее и вызывает такси в одно касание." },
        { icon: "🕒", title: "Часы работы", text: "Метка «Открыто сейчас» и полное расписание — клиент не придёт к закрытой двери." },
        { icon: "⭐", title: "Отзывы и рейтинг", text: "Настоящие отзывы вызывают доверие и приводят новых клиентов." },
        { icon: "🛍️", title: "Заказ и бронь", text: "Меню, корзина, бронь столика или запись на приём — не выходя из Telegram." },
      ],
    },
    business: {
      title: "TrueGis для вашего бизнеса",
      text: "От страницы в каталоге до собственного мини-приложения, бота и CRM — всё, чтобы привлекать и удерживать клиентов.",
      blocks: [
        {
          title: "Ваш бизнес в центре внимания",
          text: "Когда клиент ищет вас или место поблизости — TrueGis показывает вас одним из первых.",
          points: ["Красивая страница: фото, адрес, часы, телефон", "Метка на карте и маршрут", "Показ в категориях и рекомендациях AI", "Поток клиентов растёт до 30–40%"],
        },
        {
          title: "Мини-приложение и свой бот",
          text: "Полноценный магазин или система бронирования внутри Telegram — без программистов, запуск за несколько дней.",
          points: ["Меню, каталог, корзина и заказы", "Бронь столика, услуги или приёма", "Свой Telegram-бот с вашим брендом", "Акции и рассылки клиентам"],
        },
        {
          title: "AI-помощник и CRM",
          text: "AI отвечает вашим клиентам 24/7, а вы видите все заказы и клиентов в одной панели.",
          points: ["Быстрые ответы на вопросы — даже ночью", "История заказов и клиентов", "Статистика: просмотры, звонки, маршруты", "Роли и доступы для сотрудников"],
        },
      ],
    },
    why: {
      title: "Почему TrueGis?",
      cards: [
        { icon: "🎯", title: "Индивидуальный подход", text: "Подробно обсуждаем каждый проект и подстраиваемся под ваши задачи." },
        { icon: "🤝", title: "Персональная поддержка", text: "От подключения до результата — ваш менеджер рядом на каждом этапе." },
        { icon: "📈", title: "Больше узнаваемости", text: "Клиенты отмечают рост просмотров своих мест на 30–40% после подключения." },
        { icon: "🚀", title: "Новая аудитория", text: "Тысячи пользователей Telegram — новый канал продаж для вас." },
      ],
    },
    promo: {
      title: "У вас клиника? Познакомьтесь с Shifo24",
      text: "Отдельное решение для клиник: онлайн-запись, живая очередь, SMS-напоминания, электронная медкарта и собственный Telegram-бот клиники.",
      points: ["Пациенты записываются онлайн 24/7", "Очередь и приём на одном экране", "Бот с брендом вашей клиники"],
      cta: "Подробнее о Shifo24",
    },
    steps: {
      title: "Как мы работаем",
      items: [
        { title: "Анализ и предложение", text: "Оставьте заявку — изучим ваш бизнес и подготовим подходящее предложение. Консультация бесплатно." },
        { title: "Подключение и запуск", text: "Настроим страницу, мини-приложение и бота, обучим сотрудников. Обычно 1–3 дня." },
        { title: "Поддержка и рост", text: "Следим за результатами, присылаем отчёты и оказываем постоянную техподдержку." },
      ],
    },
    pricing: {
      title: "Тарифы",
      text: "От небольшого кафе до сети — тариф для любого бизнеса.",
      note: "Цены указаны без НДС. При оплате за год — 2 месяца в подарок.",
      plans: [
        { name: "Start", price: "0", per: "сум / мес", text: "Бесплатная страница в каталоге", points: ["Страница и метка на карте", "Часы работы и контакты", "Отзывы"], cta: "Начать бесплатно" },
        { name: "Бизнес", price: "290 000", per: "сум / мес", text: "Для растущего бизнеса", points: ["Всё из Start", "Мини-приложение: меню или бронь", "Выше в поиске", "Статистика"], cta: "Выбрать" },
        { name: "Pro", price: "590 000", per: "сум / мес", text: "Выбирают чаще всего", hot: "Популярный", points: ["Всё из Бизнес", "Свой Telegram-бот", "AI-помощник 24/7", "CRM и роли сотрудников"], cta: "Выбрать" },
        { name: "Корпоративный", price: "Договорная", text: "Для сетей и филиалов", points: ["Всё из Pro", "Несколько филиалов", "Интеграции и API", "Персональный менеджер"], cta: "Связаться" },
      ],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        { q: "Что такое TrueGis?", a: "TrueGis — AI-гид в Telegram: помогает найти ближайшие магазины, рестораны, аптеки, клиники и другие места. А бизнесы находят здесь новых клиентов." },
        { q: "Как добавить свой бизнес?", a: "Заполните заявку на сайте или напишите в Telegram. Менеджер свяжется и запустит вашу страницу за 1–3 дня." },
        { q: "Что это мне даст?", a: "Больше узнаваемости, новый поток клиентов, онлайн-заказы и бронь, AI-помощник и все клиенты в одной панели." },
        { q: "Нужен ли программист?", a: "Нет. Мы всё настроим сами и обучим ваших сотрудников." },
        { q: "Сколько это стоит?", a: "Можно начать с бесплатного тарифа Start. Платные тарифы — от 290 000 сум/мес. Точное предложение подготовим под ваш бизнес." },
        { q: "Как работает поддержка?", a: "Через Telegram, телефон и сайт — техподдержка на каждом этапе, отчёты и рекомендации." },
      ],
    },
    contact: { title: "Выведите бизнес на новый уровень", text: "Готовы к первому шагу? Заполните заявку — наши специалисты бесплатно проконсультируют и покажут, как TrueGis поможет вашему бизнесу расти." },
  },
  en: {
    title: "TrueGis — AI city guide in Telegram and new customers for your business",
    description: "TrueGis is an AI guide in Telegram: places, maps, taxi prices, reviews. Add your business — a mini app, bot, CRM and AI assistant bring a new stream of customers.",
    nav: { features: "Features", business: "For business", shifo: "Shifo24", pricing: "Pricing", faq: "FAQ", contact: "Contact" },
    cta: "Add your business",
    hero: {
      eyebrow: "Inside Telegram · powered by AI",
      h1a: "TrueGis:",
      h1b: "your partner for business growth",
      text: "Your customers find the nearest restaurants, pharmacies, clinics, car services and more right inside Telegram — including your business. Ask in plain words and the AI answers: distance, opening hours, taxi price and reviews in one place.",
      openBot: "Open the bot",
      addBusiness: "Add your business",
      notes: ["No app to install", "Uzbek, Russian, English", "Works 24/7"],
    },
    stats: [
      { value: "150,000+", label: "users" },
      { value: "35,000+", label: "places in the catalog" },
      { value: "1,200+", label: "partner businesses" },
      { value: "2M+", label: "searches per month" },
    ],
    clientsTitle: "Trusted by",
    users: {
      title: "For your customers — everything in one bot",
      text: "TrueGis helps people find the right place in seconds. Every search is a new customer for your business.",
      cards: [
        { icon: "🤖", title: "AI search", text: "“Where is good cheap plov nearby?” — ask in plain words and the AI picks the best places.", tag: "New" },
        { icon: "🗺️", title: "Map and distance", text: "Distance, travel time and the nearest metro — based on the user’s location." },
        { icon: "🚕", title: "Taxi price", text: "Shows the Yandex Go price up front and orders a taxi in one tap." },
        { icon: "🕒", title: "Opening hours", text: "An “Open now” badge and the full schedule — no more closed doors." },
        { icon: "⭐", title: "Reviews and ratings", text: "Real reviews build trust and bring new customers." },
        { icon: "🛍️", title: "Orders and bookings", text: "Menu, cart, table or appointment booking — without leaving Telegram." },
      ],
    },
    business: {
      title: "TrueGis for your business",
      text: "From a catalog page to your own mini app, bot and CRM — everything to attract and keep customers.",
      blocks: [
        {
          title: "Your business in the spotlight",
          text: "When customers search for you or for a place nearby, TrueGis shows you among the first.",
          points: ["A great page: photos, address, hours, phone", "A pin on the map and directions", "Featured in categories and AI picks", "Up to 30–40% more customer traffic"],
        },
        {
          title: "Mini app and your own bot",
          text: "A full shop or booking system inside Telegram — no developers, live in a few days.",
          points: ["Menu, catalog, cart and orders", "Table, service or appointment booking", "Your own branded Telegram bot", "Promotions and broadcasts to customers"],
        },
        {
          title: "AI assistant and CRM",
          text: "The AI answers your customers 24/7, and you see every order and customer in one dashboard.",
          points: ["Fast answers — even at night", "Order and customer history", "Analytics: views, calls, directions", "Staff roles and access rights"],
        },
      ],
    },
    why: {
      title: "Why TrueGis?",
      cards: [
        { icon: "🎯", title: "Individual approach", text: "We discuss every project in detail and tailor it to your needs." },
        { icon: "🤝", title: "Personal support", text: "From setup to results — your manager is with you at every step." },
        { icon: "📈", title: "More visibility", text: "Clients report 30–40% more views of their places after joining." },
        { icon: "🚀", title: "New audience", text: "Thousands of Telegram users — a new sales channel for you." },
      ],
    },
    promo: {
      title: "Run a clinic? Meet Shifo24",
      text: "A dedicated solution for clinics: online booking, live queue, SMS reminders, electronic medical cards and the clinic’s own Telegram bot.",
      points: ["Patients book online 24/7", "Queue and visits on one screen", "A bot with your clinic’s brand"],
      cta: "Learn about Shifo24",
    },
    steps: {
      title: "How we work",
      items: [
        { title: "Analysis and offer", text: "Leave a request — we study your business and prepare a tailored offer. The consultation is free." },
        { title: "Setup and launch", text: "We set up your page, mini app and bot, and train your staff. Usually 1–3 days." },
        { title: "Support and growth", text: "We track results, send reports and provide ongoing technical support." },
      ],
    },
    pricing: {
      title: "Pricing",
      text: "From a small café to a chain — a plan for every business.",
      note: "Prices exclude VAT. Pay yearly and get 2 months free.",
      plans: [
        { name: "Start", price: "0", per: "UZS / month", text: "A free catalog page", points: ["Page and map pin", "Hours and contacts", "Reviews"], cta: "Start free" },
        { name: "Business", price: "290,000", per: "UZS / month", text: "For a growing business", points: ["Everything in Start", "Mini app: menu or booking", "Higher in search", "Analytics"], cta: "Choose" },
        { name: "Pro", price: "590,000", per: "UZS / month", text: "Most popular choice", hot: "Popular", points: ["Everything in Business", "Your own Telegram bot", "AI assistant 24/7", "CRM and staff roles"], cta: "Choose" },
        { name: "Enterprise", price: "Custom", text: "For chains and branches", points: ["Everything in Pro", "Multiple branches", "Integrations and API", "Dedicated manager"], cta: "Contact us" },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "What is TrueGis?", a: "TrueGis is an AI guide in Telegram that helps people find the nearest shops, restaurants, pharmacies, clinics and other places. Businesses find new customers here." },
        { q: "How do I add my business?", a: "Fill in the request form or message us on Telegram. A manager will contact you and launch your page in 1–3 days." },
        { q: "What do I get?", a: "More visibility, a new stream of customers, online orders and bookings, an AI assistant and all your customers in one dashboard." },
        { q: "Do I need a developer?", a: "No. We set everything up and train your staff." },
        { q: "How much does it cost?", a: "You can start with the free Start plan. Paid plans start at 290,000 UZS/month. We’ll prepare an exact offer for your business." },
        { q: "How does support work?", a: "Via Telegram, phone and the website — technical support at every step, reports and recommendations." },
      ],
    },
    contact: { title: "Take your business to new heights", text: "Ready for the first step? Fill in the form — our experts will give you a free consultation and show how TrueGis can grow your business." },
  },
};
