import type { IconName } from "../components/Icons";
import type { Tr } from "../i18n";

type Item = { icon: IconName; title: string; text: string };

export type ShifoText = {
  title: string;
  description: string;
  nav: { features: string; how: string; inside: string; contact: string };
  cta: string;
  hero: { kicker: string; h1: string; h1accent: string; text: string; primary: string; secondary: string };
  change: { title: string; items: Item[] };
  features: { kicker: string; title: string; text: string; items: Item[] };
  inside: { kicker: string; title: string; text: string; captions: string[] };
  steps: { title: string; items: { title: string; text: string }[] };
  stats: { value: string; label: string }[];
  truegis: { kicker: string; title: string; text: string; points: Item[]; stats: { value: string; label: string }[]; cta: string; more: string };
  contact: { title: string; text: string; steps: string[] };
};

export const SHIFO: Tr<ShifoText> = {
  uz: {
    title: "Shifo24 — klinikalar uchun onlayn yozilish, jonli navbat va CRM",
    description: "Shifo24 — klinikalar uchun yechim: 24/7 onlayn yozilish, jonli navbat, SMS eslatmalar, elektron tibbiy karta va klinikaning o‘z Telegram boti.",
    nav: { features: "Imkoniyatlar", how: "Ulanish", inside: "Mahsulot", contact: "Aloqa" },
    cta: "Ariza qoldirish",
    hero: {
      kicker: "Klinikalar uchun platforma",
      h1: "Bemorlar o‘zi yoziladi.",
      h1accent: "Navbat o‘zi yuradi.",
      text: "Shifo24 — klinika uchun onlayn yozilish, jonli navbat, SMS eslatmalar, tibbiy karta va klinikangizning o‘z Telegram boti. Hammasi bitta tizimda.",
      primary: "Ariza qoldirish",
      secondary: "Imkoniyatlar",
    },
    change: {
      title: "Klinikada nima o‘zgaradi",
      items: [
        { icon: "call", title: "Telefon tinchiydi", text: "Bemorlar o‘zlari yoziladi — administrator qo‘ng‘iroqlarga emas, bemorlarga vaqt ajratadi." },
        { icon: "ticket", title: "Koridor bo‘shaydi", text: "Jonli navbat telefonda: bemor o‘z vaqtida keladi, shifokor «Keyingisi» tugmasini bosadi." },
        { icon: "message", title: "Bemor qaytib keladi", text: "SMS va Telegram eslatmalar kelmay qolishlarni keskin kamaytiradi." },
      ],
    },
    features: {
      kicker: "Imkoniyatlar",
      title: "Klinikaga kerak bo‘lgan hammasi.",
      text: "Har bir funksiya real klinikalar bilan birga yaratilgan.",
      items: [
        { icon: "calendar", title: "Onlayn yozilish 24/7", text: "Sayt, Telegram bot va mini ilova orqali." },
        { icon: "bot", title: "Klinikaning o‘z boti", text: "Nomingiz va logotipingiz bilan." },
        { icon: "ticket", title: "Jonli navbat", text: "Chipta, kutish vaqti va chaqiruv." },
        { icon: "message", title: "SMS eslatmalar", text: "Har bir yozilish uchun tasdiq va eslatma." },
        { icon: "card", title: "Elektron tibbiy karta", text: "To‘liq karta faqat bemor ruxsati bilan." },
        { icon: "phone", title: "Shifokor kabineti", text: "Bugungi qabullar telefonda." },
        { icon: "chart", title: "CRM va statistika", text: "Xodimlar, bemorlar, jadval, tushum." },
        { icon: "chat", title: "AI yordamchi", text: "Savollarga 24/7 javob. Tashxis qo‘ymaydi." },
        { icon: "shield", title: "Maxfiylik", text: "Bemor telefoni shifokordan yashirin." },
      ],
    },
    inside: {
      kicker: "Mahsulot ichida",
      title: "Bemor, shifokor va administrator — har biri o‘z ekranida.",
      text: "Bemor 30 soniyada yoziladi, navbatini telefonda kuzatadi, klinika esa hammasini bitta panelda ko‘radi.",
      captions: ["Yozilish", "Jonli navbat", "Klinika paneli"],
    },
    steps: {
      title: "Bir kunda ishga tushadi",
      items: [
        { title: "Demo", text: "15 daqiqada tizimni ko‘rsatamiz va klinikangizga moslab beramiz." },
        { title: "Sozlash", text: "Shifokorlar, xizmatlar va jadvalni kiritamiz, klinika botini ulaymiz." },
        { title: "Ishga tushirish", text: "Havolani sayt, Instagram va Telegram’ga qo‘yasiz — yozilishlar darhol keladi." },
      ],
    },
    stats: [
      { value: "300+", label: "klinika va shifokor" },
      { value: "120 000+", label: "onlayn yozilish" },
      { value: "−60%", label: "qabulxonaga qo‘ng‘iroq" },
      { value: "24/7", label: "yozilish" },
    ],
    truegis: {
      kicker: "Qo‘shimcha · TrueGis tizimi",
      title: "TrueGis bilan — yangi bemorlar.",
      text: "TrueGis — shahar bo‘ylab joylarni topish uchun alohida Telegram platformasi. Klinikangizni unga ulang: yaqin atrofda shifokor izlayotgan odamlar sizni topadi va darhol Shifo24 orqali yoziladi.",
      points: [
        { icon: "pin", title: "Xarita va katalogda", text: "Yaqin atrofdagi odamlar klinikangizni xaritada va katalogda ko‘radi." },
        { icon: "search", title: "AI qidiruvda", text: "«Yaqin atrofda yaxshi kardiolog» kabi so‘rovlarda klinikangiz tavsiya qilinadi." },
        { icon: "chat", title: "Sharhlar va reyting", text: "Bemorlar sharhlari yangi bemorlarga ishonch beradi." },
        { icon: "calendar", title: "To‘g‘ridan-to‘g‘ri yozilish", text: "TrueGis’dan kelgan bemor jadvalingizga darhol tushadi." },
      ],
      stats: [
        { value: "150 000+", label: "TrueGis foydalanuvchisi" },
        { value: "2 mln+", label: "qidiruv har oy" },
      ],
      cta: "Ulash haqida so‘rash",
      more: "TrueGis haqida",
    },
    contact: {
      title: "Klinikangizni bugun onlayn qiling.",
      text: "Ariza qoldiring — avval mutaxassisimiz bilan gaplashasiz, keyin klinikangizga mos tarif va paketni birga tanlaymiz.",
      steps: ["Ariza qoldirasiz", "Mutaxassis bilan suhbat va demo", "Tarif va paketni tanlaysiz"],
    },
  },
  ru: {
    title: "Shifo24 — онлайн-запись, живая очередь и CRM для клиник",
    description: "Shifo24 — решение для клиник: онлайн-запись 24/7, живая очередь, SMS-напоминания, электронная медкарта и собственный Telegram-бот клиники.",
    nav: { features: "Возможности", how: "Подключение", inside: "Продукт", contact: "Контакты" },
    cta: "Оставить заявку",
    hero: {
      kicker: "Платформа для клиник",
      h1: "Пациенты записываются сами.",
      h1accent: "Очередь движется сама.",
      text: "Shifo24 — онлайн-запись, живая очередь, SMS-напоминания, медкарта и собственный Telegram-бот вашей клиники. Всё в одной системе.",
      primary: "Оставить заявку",
      secondary: "Возможности",
    },
    change: {
      title: "Что изменится в клинике",
      items: [
        { icon: "call", title: "Телефон затихает", text: "Пациенты записываются сами — администратор занят пациентами, а не звонками." },
        { icon: "ticket", title: "Коридор пустеет", text: "Живая очередь в телефоне: пациент приходит вовремя, врач нажимает «Следующий»." },
        { icon: "message", title: "Пациент возвращается", text: "SMS и напоминания в Telegram резко сокращают неявки." },
      ],
    },
    features: {
      kicker: "Возможности",
      title: "Всё, что нужно клинике.",
      text: "Каждая функция создана вместе с реальными клиниками.",
      items: [
        { icon: "calendar", title: "Онлайн-запись 24/7", text: "Через сайт, Telegram-бота и мини-приложение." },
        { icon: "bot", title: "Свой бот клиники", text: "С вашим названием и логотипом." },
        { icon: "ticket", title: "Живая очередь", text: "Талон, время ожидания и вызов." },
        { icon: "message", title: "SMS-напоминания", text: "Подтверждение и напоминание на каждую запись." },
        { icon: "card", title: "Электронная медкарта", text: "Полная карта — только с согласия пациента." },
        { icon: "phone", title: "Кабинет врача", text: "Приёмы на сегодня в телефоне." },
        { icon: "chart", title: "CRM и статистика", text: "Сотрудники, пациенты, расписание, выручка." },
        { icon: "chat", title: "AI-помощник", text: "Ответы 24/7. Диагнозы не ставит." },
        { icon: "shield", title: "Конфиденциальность", text: "Телефон пациента скрыт от врача." },
      ],
    },
    inside: {
      kicker: "Внутри продукта",
      title: "Пациент, врач и администратор — каждый на своём экране.",
      text: "Пациент записывается за 30 секунд и следит за очередью в телефоне, а клиника видит всё в одной панели.",
      captions: ["Запись", "Живая очередь", "Панель клиники"],
    },
    steps: {
      title: "Запуск за один день",
      items: [
        { title: "Демо", text: "За 15 минут покажем систему и настроим под вашу клинику." },
        { title: "Настройка", text: "Внесём врачей, услуги и расписание, подключим бота клиники." },
        { title: "Запуск", text: "Разместите ссылку на сайте, в Instagram и Telegram — записи пойдут сразу." },
      ],
    },
    stats: [
      { value: "300+", label: "клиник и врачей" },
      { value: "120 000+", label: "онлайн-записей" },
      { value: "−60%", label: "звонков в регистратуру" },
      { value: "24/7", label: "запись" },
    ],
    truegis: {
      kicker: "Дополнительно · система TrueGis",
      title: "С TrueGis — новые пациенты.",
      text: "TrueGis — отдельная Telegram-платформа для поиска мест по городу. Подключите к ней клинику: люди, которые ищут врача рядом, найдут вас и сразу запишутся через Shifo24.",
      points: [
        { icon: "pin", title: "На карте и в каталоге", text: "Люди поблизости видят вашу клинику на карте и в каталоге." },
        { icon: "search", title: "В AI-поиске", text: "На запросы вроде «хороший кардиолог рядом» AI рекомендует вашу клинику." },
        { icon: "chat", title: "Отзывы и рейтинг", text: "Отзывы пациентов вызывают доверие у новых пациентов." },
        { icon: "calendar", title: "Прямая запись", text: "Пациент из TrueGis сразу попадает в ваше расписание." },
      ],
      stats: [
        { value: "150 000+", label: "пользователей TrueGis" },
        { value: "2 млн+", label: "поисков в месяц" },
      ],
      cta: "Узнать о подключении",
      more: "О TrueGis",
    },
    contact: {
      title: "Переведите клинику в онлайн сегодня.",
      text: "Оставьте заявку — сначала поговорите с нашим специалистом, а затем вместе подберём тариф и пакет для вашей клиники.",
      steps: ["Оставляете заявку", "Разговор со специалистом и демо", "Выбираете тариф и пакет"],
    },
  },
  en: {
    title: "Shifo24 — online booking, live queue and CRM for clinics",
    description: "Shifo24 for clinics: 24/7 online booking, a live queue, SMS reminders, electronic medical cards and your clinic’s own Telegram bot.",
    nav: { features: "Features", how: "Setup", inside: "Product", contact: "Contact" },
    cta: "Leave a request",
    hero: {
      kicker: "A platform for clinics",
      h1: "Patients book themselves.",
      h1accent: "The queue moves itself.",
      text: "Shifo24 gives your clinic online booking, a live queue, SMS reminders, medical cards and its own Telegram bot. All in one system.",
      primary: "Leave a request",
      secondary: "Features",
    },
    change: {
      title: "What changes in your clinic",
      items: [
        { icon: "call", title: "The phone goes quiet", text: "Patients book themselves — the front desk spends time on patients, not calls." },
        { icon: "ticket", title: "The hallway clears", text: "A live queue on the phone: patients arrive on time, the doctor taps “Next”." },
        { icon: "message", title: "Patients come back", text: "SMS and Telegram reminders cut no-shows sharply." },
      ],
    },
    features: {
      kicker: "Features",
      title: "Everything a clinic needs.",
      text: "Every feature was built together with real clinics.",
      items: [
        { icon: "calendar", title: "Online booking 24/7", text: "Via website, Telegram bot and mini app." },
        { icon: "bot", title: "Your clinic’s own bot", text: "With your name and logo." },
        { icon: "ticket", title: "Live queue", text: "Ticket, waiting time and call-in." },
        { icon: "message", title: "SMS reminders", text: "Confirmation and reminder for every booking." },
        { icon: "card", title: "Electronic medical card", text: "Full card only with the patient’s consent." },
        { icon: "phone", title: "Doctor’s cabinet", text: "Today’s visits on the phone." },
        { icon: "chart", title: "CRM and analytics", text: "Staff, patients, schedule, revenue." },
        { icon: "chat", title: "AI assistant", text: "Answers 24/7. Never diagnoses." },
        { icon: "shield", title: "Privacy", text: "Patient phone hidden from doctors." },
      ],
    },
    inside: {
      kicker: "Inside the product",
      title: "Patient, doctor and front desk — each on their own screen.",
      text: "Patients book in 30 seconds and follow the queue on their phone, while the clinic sees everything in one dashboard.",
      captions: ["Booking", "Live queue", "Clinic dashboard"],
    },
    steps: {
      title: "Live in one day",
      items: [
        { title: "Demo", text: "In 15 minutes we show the system and tailor it to your clinic." },
        { title: "Setup", text: "We add doctors, services and schedules, and connect the clinic bot." },
        { title: "Launch", text: "Put the link on your website, Instagram and Telegram — bookings start right away." },
      ],
    },
    stats: [
      { value: "300+", label: "clinics and doctors" },
      { value: "120,000+", label: "online bookings" },
      { value: "−60%", label: "front-desk calls" },
      { value: "24/7", label: "booking" },
    ],
    truegis: {
      kicker: "Add-on · the TrueGis system",
      title: "With TrueGis — new patients.",
      text: "TrueGis is a separate Telegram platform for finding places around the city. Connect your clinic to it: people looking for a doctor nearby will find you and book straight through Shifo24.",
      points: [
        { icon: "pin", title: "On the map and in the catalog", text: "People nearby see your clinic on the map and in the catalog." },
        { icon: "search", title: "In AI search", text: "For requests like “a good cardiologist nearby”, the AI recommends your clinic." },
        { icon: "chat", title: "Reviews and ratings", text: "Patient reviews build trust with new patients." },
        { icon: "calendar", title: "Direct booking", text: "A patient from TrueGis lands straight in your schedule." },
      ],
      stats: [
        { value: "150,000+", label: "TrueGis users" },
        { value: "2M+", label: "searches per month" },
      ],
      cta: "Ask about connecting",
      more: "About TrueGis",
    },
    contact: {
      title: "Take your clinic online today.",
      text: "Leave a request — first you talk to our specialist, then together we choose the plan and package that fit your clinic.",
      steps: ["You leave a request", "A call with a specialist and a demo", "You choose a plan and package"],
    },
  },
};
