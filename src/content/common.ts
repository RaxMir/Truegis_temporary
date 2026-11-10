import type { Tr } from "../i18n";

export const CONTACTS = {
  phone: "+998 (98) 100 36 31",
  phoneHref: "tel:+998981003631",
  bot: "https://t.me/TrueGis_bot",
  channel: "https://t.me/TrueGis",
  sales: "https://t.me/CosinusCEO",
  shifo24: "https://shifo24.uz",
};

export const CLIENTS = [
  { name: "Lukoil", logo: "/clients/lukoil.svg" },
  { name: "Irish Pub Restaurant", logo: "/clients/irish.webp" },
  { name: "Costa Coffee", logo: "/clients/costa.webp" },
  { name: "Fayz Mount Restorani", logo: "/clients/fayz.webp" },
  { name: "Bek Restorani", logo: "/clients/bek.webp" },
  { name: "MED24", logo: "/clients/med24.webp" },
];

export type CommonText = {
  address: string;
  form: {
    title: string;
    text: string;
    name: string;
    phone: string;
    business: string;
    plan: string;
    planAny: string;
    message: string;
    send: string;
    sending: string;
    ok: string;
    err: string;
    privacy: string;
  };
  footer: { products: string; links: string; contact: string; tryBot: string; rights: string };
  perMonth: string;
  faqAsk: string;
  writeTelegram: string;
  menu: string;
};

export const COMMON: Tr<CommonText> = {
  uz: {
    address: "Toshkent, Chulpon MFY, Pahlavon Mahmud ko‘chasi, 2-tor ko‘cha",
    form: {
      title: "Ariza qoldiring",
      text: "Raqamingizni qoldiring — mutaxassisimiz 15 daqiqa ichida bog‘lanib, bepul maslahat beradi.",
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      business: "Biznes yoki klinika nomi",
      plan: "Tarif",
      planAny: "Hali bilmayman",
      message: "Xabar (ixtiyoriy)",
      send: "Yuborish",
      sending: "Yuborilmoqda…",
      ok: "Rahmat! Arizangiz qabul qilindi — tez orada bog‘lanamiz.",
      err: "Yuborib bo‘lmadi. Qayta urinib ko‘ring yoki Telegramga yozing.",
      privacy: "Ma’lumotlaringiz faqat siz bilan bog‘lanish uchun ishlatiladi.",
    },
    footer: { products: "Mahsulotlar", links: "Bo‘limlar", contact: "Aloqa", tryBot: "QR kodni skanerlang va botni sinab ko‘ring", rights: "Cosinus MChJ. Barcha huquqlar himoyalangan." },
    perMonth: "so‘m / oy",
    faqAsk: "Savollaringiz qoldimi? Telegramda yozing — tezda javob beramiz.",
    writeTelegram: "Telegramda yozish",
    menu: "Menyu",
  },
  ru: {
    address: "Ташкент, МСГ Чулпон, ул. Пахлавон Махмуд, 2-й проезд",
    form: {
      title: "Оставьте заявку",
      text: "Оставьте номер — специалист свяжется с вами в течение 15 минут и бесплатно проконсультирует.",
      name: "Ваше имя",
      phone: "Номер телефона",
      business: "Название бизнеса или клиники",
      plan: "Тариф",
      planAny: "Пока не знаю",
      message: "Сообщение (необязательно)",
      send: "Отправить",
      sending: "Отправляем…",
      ok: "Спасибо! Заявка принята — скоро свяжемся с вами.",
      err: "Не удалось отправить. Попробуйте ещё раз или напишите в Telegram.",
      privacy: "Данные используются только для связи с вами.",
    },
    footer: { products: "Продукты", links: "Разделы", contact: "Контакты", tryBot: "Отсканируйте QR-код и попробуйте бота", rights: "ООО Cosinus. Все права защищены." },
    perMonth: "сум / мес",
    faqAsk: "Остались вопросы? Напишите в Telegram — ответим быстро.",
    writeTelegram: "Написать в Telegram",
    menu: "Меню",
  },
  en: {
    address: "Tashkent, Chulpon MFY, Pakhlavon Mahmud st., 2nd passage",
    form: {
      title: "Leave a request",
      text: "Leave your number — a specialist will call you within 15 minutes for a free consultation.",
      name: "Your name",
      phone: "Phone number",
      business: "Business or clinic name",
      plan: "Plan",
      planAny: "Not sure yet",
      message: "Message (optional)",
      send: "Send",
      sending: "Sending…",
      ok: "Thank you! We received your request and will contact you soon.",
      err: "Could not send. Please try again or message us on Telegram.",
      privacy: "Your data is used only to contact you.",
    },
    footer: { products: "Products", links: "Sections", contact: "Contact", tryBot: "Scan the QR code and try our bot", rights: "Cosinus LLC. All rights reserved." },
    perMonth: "UZS / month",
    faqAsk: "Still have questions? Message us on Telegram — we reply fast.",
    writeTelegram: "Write in Telegram",
    menu: "Menu",
  },
};
