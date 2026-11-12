import type { IconName } from "../components/Icons";
import type { Tr } from "../i18n";

export type EcoNode = { icon: IconName; name: string; text: string; items: string[] };

export type TrueGisText = {
  title: string;
  description: string;
  nav: { ecosystem: string; shifo: string; inside: string; clients: string; contact: string };
  cta: string;
  hero: { kicker: string; h1: string; h1accent: string; text: string; primary: string; secondary: string };
  doing: { title: string; items: { icon: IconName; title: string; text: string }[] };
  eco: { kicker: string; title: string; text: string; core: string; coreText: string; nodes: EcoNode[]; next: { name: string; text: string } };
  shifo: { kicker: string; title: string; text: string; facts: { value: string; label: string }[]; cta: string };
  inside: { kicker: string; title: string; text: string; captions: string[] };
  stats: { value: string; label: string }[];
  clients: string;
  contact: { title: string; text: string };
};

export const TRUEGIS: Tr<TrueGisText> = {
  uz: {
    title: "TrueGis — Telegram ichidagi shahar ekotizimi",
    description: "TrueGis — odamlarni joylar, bizneslar va xizmatlar bilan bog‘laydigan ekotizim: AI yo‘lboshchi, biznes mini ilovalari, botlar va CRM, klinikalar uchun Shifo24.",
    nav: { ecosystem: "Ekotizim", shifo: "Shifo24", inside: "Mahsulot", clients: "Mijozlar", contact: "Aloqa" },
    cta: "Hamkor bo‘lish",
    hero: {
      kicker: "TrueGis ekotizimi",
      h1: "Butun shahar —",
      h1accent: "Telegram ichida.",
      text: "TrueGis odamlarni joylar, bizneslar va xizmatlar bilan bog‘laydi. Bitta botdan boshlangan loyiha bugun qidiruv, savdo va tibbiyot uchun mahsulotlar oilasiga aylandi.",
      primary: "Hamkor bo‘lish",
      secondary: "Botni ochish",
    },
    doing: {
      title: "Biz uch narsani yaxshi qilamiz",
      items: [
        { icon: "search", title: "Topamiz", text: "Odamlar istalgan joyni soniyalar ichida topadi: oddiy so‘z bilan qidiruv, xarita, masofa, taksi narxi va sharhlar." },
        { icon: "store", title: "Bog‘laymiz", text: "Biznes o‘z sahifasi, mini ilovasi va botini oladi — mijoz sizni Telegram’dan chiqmasdan topadi va buyurtma beradi." },
        { icon: "growth", title: "O‘stiramiz", text: "CRM, AI yordamchi va statistika — har bir mijoz saqlanadi, har bir savolga javob beriladi." },
      ],
    },
    eco: {
      kicker: "Ekotizim",
      title: "Bitta yadro. Ko‘p mahsulot.",
      text: "Hamma mahsulotlar bitta platformada ishlaydi: umumiy foydalanuvchilar, xarita, to‘lovlar va AI. Har bir yangi yo‘nalish oldingisining kuchidan foydalanadi.",
      core: "TrueGis",
      coreText: "Platforma: foydalanuvchilar, xarita, AI, to‘lovlar",
      nodes: [
        { icon: "pin", name: "AI yo‘lboshchi", text: "Shahar katalogi Telegram’da", items: ["AI qidiruv", "Xarita va metro", "Taksi narxi", "Sharhlar"] },
        { icon: "store", name: "Biznes ilovalari", text: "Har bir biznes uchun mini ilova", items: ["Menyu va katalog", "Buyurtma", "Bron", "Aksiyalar"] },
        { icon: "bot", name: "Botlar va CRM", text: "Brendli bot va boshqaruv paneli", items: ["O‘z boti", "CRM", "AI yordamchi", "Statistika"] },
        { icon: "heart", name: "Shifo24", text: "Klinikalar uchun to‘liq yechim", items: ["Onlayn yozilish", "Jonli navbat", "Tibbiy karta", "SMS"] },
      ],
      next: { name: "Keyingisi", text: "Yangi yo‘nalishlar tayyorlanmoqda" },
    },
    shifo: {
      kicker: "TrueGis oilasidan · eng yirik loyihalarimizdan biri",
      title: "Shifo24 — klinikalar uchun.",
      text: "Ekotizim tibbiyotga kirdi: bemorlar onlayn yoziladi, navbat telefonda yuradi, klinika esa o‘z brendidagi Telegram botga ega bo‘ladi.",
      facts: [
        { value: "24/7", label: "onlayn yozilish" },
        { value: "−60%", label: "qabulxonaga qo‘ng‘iroq" },
        { value: "1 kun", label: "ishga tushirish" },
      ],
      cta: "Shifo24’ni ko‘rish",
    },
    inside: {
      kicker: "Mahsulot ichida",
      title: "Mijozlaringiz buni har kuni ko‘radi.",
      text: "Ilova o‘rnatish shart emas — hammasi Telegram’ning o‘zida, o‘zbek, rus va ingliz tillarida.",
      captions: ["AI qidiruv", "Joy sahifasi", "Biznes mini ilovasi"],
    },
    stats: [
      { value: "150 000+", label: "foydalanuvchi" },
      { value: "35 000+", label: "joy katalogda" },
      { value: "1 200+", label: "hamkor biznes" },
      { value: "2 mln+", label: "qidiruv har oy" },
    ],
    clients: "Bizga ishonishadi",
    contact: { title: "Keling, tanishamiz.", text: "Raqamingizni qoldiring — 15 daqiqa ichida bog‘lanamiz va TrueGis biznesingizga nima berishini ko‘rsatamiz." },
  },
  ru: {
    title: "TrueGis — экосистема города внутри Telegram",
    description: "TrueGis — экосистема, которая связывает людей с местами, бизнесами и сервисами: AI-гид, мини-приложения для бизнеса, боты и CRM, Shifo24 для клиник.",
    nav: { ecosystem: "Экосистема", shifo: "Shifo24", inside: "Продукт", clients: "Клиенты", contact: "Контакты" },
    cta: "Стать партнёром",
    hero: {
      kicker: "Экосистема TrueGis",
      h1: "Весь город —",
      h1accent: "внутри Telegram.",
      text: "TrueGis связывает людей с местами, бизнесами и сервисами. Проект, начавшийся с одного бота, сегодня — семья продуктов для поиска, продаж и медицины.",
      primary: "Стать партнёром",
      secondary: "Открыть бота",
    },
    doing: {
      title: "Мы хорошо делаем три вещи",
      items: [
        { icon: "search", title: "Находим", text: "Люди находят любое место за секунды: поиск обычными словами, карта, расстояние, цена такси и отзывы." },
        { icon: "store", title: "Связываем", text: "Бизнес получает свою страницу, мини-приложение и бота — клиент находит вас и заказывает, не выходя из Telegram." },
        { icon: "growth", title: "Растим", text: "CRM, AI-помощник и статистика — каждый клиент сохранён, на каждый вопрос есть ответ." },
      ],
    },
    eco: {
      kicker: "Экосистема",
      title: "Одно ядро. Много продуктов.",
      text: "Все продукты работают на одной платформе: общие пользователи, карта, платежи и AI. Каждое новое направление использует силу предыдущих.",
      core: "TrueGis",
      coreText: "Платформа: пользователи, карта, AI, платежи",
      nodes: [
        { icon: "pin", name: "AI-гид", text: "Каталог города в Telegram", items: ["AI-поиск", "Карта и метро", "Цена такси", "Отзывы"] },
        { icon: "store", name: "Приложения бизнеса", text: "Мини-приложение для каждого бизнеса", items: ["Меню и каталог", "Заказы", "Бронь", "Акции"] },
        { icon: "bot", name: "Боты и CRM", text: "Брендированный бот и панель управления", items: ["Свой бот", "CRM", "AI-помощник", "Статистика"] },
        { icon: "heart", name: "Shifo24", text: "Полное решение для клиник", items: ["Онлайн-запись", "Живая очередь", "Медкарта", "SMS"] },
      ],
      next: { name: "Дальше", text: "Готовим новые направления" },
    },
    shifo: {
      kicker: "Из семьи TrueGis · один из наших крупнейших проектов",
      title: "Shifo24 — для клиник.",
      text: "Экосистема пришла в медицину: пациенты записываются онлайн, очередь движется в телефоне, а клиника получает собственного Telegram-бота со своим брендом.",
      facts: [
        { value: "24/7", label: "онлайн-запись" },
        { value: "−60%", label: "звонков в регистратуру" },
        { value: "1 день", label: "на запуск" },
      ],
      cta: "Смотреть Shifo24",
    },
    inside: {
      kicker: "Внутри продукта",
      title: "Это ваши клиенты видят каждый день.",
      text: "Ничего не нужно устанавливать — всё прямо в Telegram, на узбекском, русском и английском.",
      captions: ["AI-поиск", "Страница места", "Мини-приложение бизнеса"],
    },
    stats: [
      { value: "150 000+", label: "пользователей" },
      { value: "35 000+", label: "мест в каталоге" },
      { value: "1 200+", label: "бизнесов-партнёров" },
      { value: "2 млн+", label: "поисков в месяц" },
    ],
    clients: "Нам доверяют",
    contact: { title: "Давайте познакомимся.", text: "Оставьте номер — свяжемся за 15 минут и покажем, что TrueGis даст вашему бизнесу." },
  },
  en: {
    title: "TrueGis — a city ecosystem inside Telegram",
    description: "TrueGis is an ecosystem connecting people with places, businesses and services: an AI guide, business mini apps, bots and CRM, and Shifo24 for clinics.",
    nav: { ecosystem: "Ecosystem", shifo: "Shifo24", inside: "Product", clients: "Clients", contact: "Contact" },
    cta: "Become a partner",
    hero: {
      kicker: "The TrueGis ecosystem",
      h1: "The whole city —",
      h1accent: "inside Telegram.",
      text: "TrueGis connects people with places, businesses and services. What started as a single bot is now a family of products for search, sales and healthcare.",
      primary: "Become a partner",
      secondary: "Open the bot",
    },
    doing: {
      title: "We do three things well",
      items: [
        { icon: "search", title: "We find", text: "People find any place in seconds: plain-language search, maps, distance, taxi prices and reviews." },
        { icon: "store", title: "We connect", text: "Businesses get their own page, mini app and bot — customers find you and order without leaving Telegram." },
        { icon: "growth", title: "We grow", text: "CRM, an AI assistant and analytics — every customer is kept, every question is answered." },
      ],
    },
    eco: {
      kicker: "Ecosystem",
      title: "One core. Many products.",
      text: "Every product runs on one platform: shared users, maps, payments and AI. Each new direction builds on the strength of the ones before it.",
      core: "TrueGis",
      coreText: "Platform: users, maps, AI, payments",
      nodes: [
        { icon: "pin", name: "AI guide", text: "The city catalog in Telegram", items: ["AI search", "Maps and metro", "Taxi prices", "Reviews"] },
        { icon: "store", name: "Business apps", text: "A mini app for every business", items: ["Menu and catalog", "Orders", "Bookings", "Promotions"] },
        { icon: "bot", name: "Bots and CRM", text: "A branded bot and a dashboard", items: ["Own bot", "CRM", "AI assistant", "Analytics"] },
        { icon: "heart", name: "Shifo24", text: "A complete solution for clinics", items: ["Online booking", "Live queue", "Medical card", "SMS"] },
      ],
      next: { name: "Next", text: "New directions in the works" },
    },
    shifo: {
      kicker: "From the TrueGis family · one of our biggest projects",
      title: "Shifo24 — for clinics.",
      text: "The ecosystem has entered healthcare: patients book online, the queue moves on their phone, and every clinic gets its own branded Telegram bot.",
      facts: [
        { value: "24/7", label: "online booking" },
        { value: "−60%", label: "front-desk calls" },
        { value: "1 day", label: "to launch" },
      ],
      cta: "See Shifo24",
    },
    inside: {
      kicker: "Inside the product",
      title: "This is what your customers see every day.",
      text: "Nothing to install — it all lives in Telegram, in Uzbek, Russian and English.",
      captions: ["AI search", "Place page", "Business mini app"],
    },
    stats: [
      { value: "150,000+", label: "users" },
      { value: "35,000+", label: "places in the catalog" },
      { value: "1,200+", label: "partner businesses" },
      { value: "2M+", label: "searches per month" },
    ],
    clients: "Trusted by",
    contact: { title: "Let’s talk.", text: "Leave your number — we’ll call within 15 minutes and show what TrueGis can do for your business." },
  },
};
