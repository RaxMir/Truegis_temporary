import type { Card, Plan } from "../components/Layout";
import type { Tr } from "../i18n";

export type ShifoText = {
  title: string;
  description: string;
  nav: { features: string; patients: string; clinic: string; pricing: string; faq: string; contact: string; truegis: string };
  cta: string;
  hero: { eyebrow: string; h1a: string; h1b: string; text: string; primary: string; secondary: string; notes: string[] };
  stats: { value: string; label: string }[];
  pains: { title: string; text: string; cards: Card[] };
  features: { title: string; text: string; cards: Card[] };
  blocks: { title: string; text: string; points: string[] }[];
  steps: { title: string; items: { title: string; text: string }[] };
  pricing: { title: string; text: string; note: string; plans: Plan[] };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: { title: string; text: string };
};

export const SHIFO: Tr<ShifoText> = {
  uz: {
    title: "Shifo24 — klinikalar uchun onlayn yozilish, jonli navbat va CRM",
    description: "Shifo24: bemorlar 24/7 onlayn yoziladi, jonli navbat, SMS eslatmalar, elektron tibbiy karta va klinikangizning o‘z Telegram boti. 14 kun bepul.",
    nav: { features: "Imkoniyatlar", patients: "Bemorlar uchun", clinic: "Klinika uchun", pricing: "Tariflar", faq: "Savollar", contact: "Aloqa", truegis: "TrueGis" },
    cta: "Bepul sinab ko‘rish",
    hero: {
      eyebrow: "Klinikalar uchun · TrueGis jamoasidan",
      h1a: "Shifo24:",
      h1b: "bemorlar o‘zi yoziladi, navbat o‘zi yuradi",
      text: "Onlayn yozilish, jonli navbat, SMS eslatmalar, elektron tibbiy karta va klinikangizning o‘z Telegram boti — bitta tizimda. Qabulxona yengillashadi, bemorlar mamnun, shifokor esa davolash bilan band.",
      primary: "14 kun bepul sinash",
      secondary: "Imkoniyatlarni ko‘rish",
      notes: ["O‘rnatish shart emas", "1 kunda ishga tushadi", "Ma’lumotlar himoyalangan"],
    },
    stats: [
      { value: "300+", label: "klinika va shifokor" },
      { value: "120 000+", label: "onlayn yozilish" },
      { value: "−60%", label: "qabulxonaga qo‘ng‘iroqlar" },
      { value: "24/7", label: "yozilish va AI javob" },
    ],
    pains: {
      title: "Tanish muammolarmi?",
      text: "Shifo24 klinikalarning kundalik og‘riqlarini hal qilish uchun yaratilgan.",
      cards: [
        { icon: "📞", title: "Telefon tinmaydi", text: "Administrator kun bo‘yi qo‘ng‘iroqqa javob beradi, bemorlar esa liniya band bo‘lgani uchun boshqa klinikaga ketadi." },
        { icon: "⏳", title: "Koridorda navbat", text: "Kim kimdan keyin — noma’lum, bemorlar asabiy, shifokor vaqti behuda ketadi." },
        { icon: "🚫", title: "Kelmay qolishlar", text: "Yozilgan bemor kelmaydi — bo‘sh vaqt va yo‘qotilgan daromad." },
      ],
    },
    features: {
      title: "Klinikangiz uchun hammasi bir joyda",
      text: "Har bir funksiya real klinikalar bilan birga ishlab chiqilgan.",
      cards: [
        { icon: "🗓️", title: "Onlayn yozilish 24/7", text: "Sayt, Telegram bot va mini ilova orqali — bemor bo‘sh vaqtni o‘zi tanlaydi." },
        { icon: "🤖", title: "Klinikaning o‘z boti", text: "Nomingiz va logotipingiz bilan Telegram bot: yozilish, navbat va xabarnomalar." },
        { icon: "🎟️", title: "Jonli navbat", text: "Bemor chipta oladi va navbatini telefonda kuzatadi. Shifokor «Keyingisini chaqirish» tugmasini bosadi." },
        { icon: "💬", title: "SMS va eslatmalar", text: "Har bir yozilish uchun SMS va Telegram xabar — kelmay qolishlar keskin kamayadi." },
        { icon: "🩺", title: "Elektron tibbiy karta", text: "Tashxislar va tavsiyalar bir joyda. To‘liq karta faqat bemor ruxsati bilan ochiladi." },
        { icon: "📱", title: "Shifokor kabineti", text: "Bugungi qabullar, joriy bemor va navbat — telefonda qulay." },
        { icon: "📊", title: "CRM va statistika", text: "Xodimlar, bemorlar, jadval, tushum — rahbar uchun aniq raqamlar." },
        { icon: "🧠", title: "AI yordamchi", text: "Bemorlarning savollariga 24/7 javob beradi va to‘g‘ri shifokorga yo‘naltiradi. Tashxis qo‘ymaydi." },
        { icon: "🔒", title: "Maxfiylik", text: "Bemor telefoni shifokordan yashirin, kirish huquqlari rollar bo‘yicha." },
      ],
    },
    blocks: [
      {
        title: "Bemor uchun: 30 soniyada yozilish",
        text: "Bemor shifokorni, kunni va bo‘sh vaqtni tanlaydi — tasdiq SMS va Telegram orqali darhol keladi.",
        points: ["Shifokorlar, narxlar va reyting ochiq", "Faqat haqiqatan bo‘sh vaqtlar ko‘rinadi", "Bekor qilish va ko‘chirish — bir bosishda", "Eslatma qabuldan oldin keladi"],
      },
      {
        title: "Jonli navbat va tibbiy karta",
        text: "Navbat bilan ishlaydigan shifokorlar uchun: bemor chipta oladi, o‘z raqamini kuzatadi va o‘z vaqtida chaqiriladi.",
        points: ["Navbat raqami va kutish vaqti telefonda", "Shifokor «Keyingisini chaqirish» bilan boshqaradi", "To‘liq tibbiy kartaga kirish — bemor ruxsati bilan", "Ruxsat faqat bugungi qabul uchun"],
      },
      {
        title: "Klinika uchun: hammasi bitta panelda",
        text: "Administrator, shifokor va rahbar — har biri o‘z ekranida. Qog‘oz jurnal va Excel endi kerak emas.",
        points: ["Bugungi yozilishlar va navbat holati", "Shifokorlar jadvali va xodimlar rollari", "Bemorlar bazasi va tashriflar tarixi", "Tushum va yuklama statistikasi"],
      },
    ],
    steps: {
      title: "Qanday ulanadi",
      items: [
        { title: "Ariza va demo", text: "Ariza qoldiring — 15 daqiqalik demo ko‘rsatamiz va klinikangizga mos sozlashni taklif qilamiz." },
        { title: "1 kunda ishga tushirish", text: "Shifokorlar, xizmatlar va jadvalni kiritamiz, klinika botini ulaymiz, xodimlarni o‘rgatamiz." },
        { title: "Bemorlar yozila boshlaydi", text: "Havolani saytingiz, Instagram va Telegram’ga qo‘ying — yozilishlar darhol keladi." },
      ],
    },
    pricing: {
      title: "Tariflar",
      text: "Bitta shifokordan tortib klinikalar tarmog‘igacha. Birinchi 14 kun — bepul.",
      note: "Narxlar QQS’siz. SMS paketlari alohida. Yillik to‘lovda — 2 oy sovg‘a.",
      plans: [
        { name: "Shifokor", price: "149 000", per: "so‘m / oy", text: "Xususiy amaliyot uchun", points: ["1 shifokor", "Onlayn yozilish 24/7", "SMS eslatmalar", "Shifokor kabineti"], cta: "Tanlash" },
        { name: "Klinika", price: "490 000", per: "so‘m / oy", text: "Kichik va o‘rta klinikalar", hot: "Mashhur", points: ["10 tagacha shifokor", "Klinikaning o‘z Telegram boti", "Jonli navbat", "Elektron tibbiy karta", "CRM va statistika"], cta: "14 kun bepul" },
        { name: "Klinika Pro", price: "990 000", per: "so‘m / oy", text: "Katta klinikalar uchun", points: ["Cheksiz shifokorlar", "AI yordamchi 24/7", "Kengaytirilgan hisobotlar", "Ustuvor yordam"], cta: "Tanlash" },
        { name: "Tarmoq", price: "Kelishiladi", text: "Filiallar tarmog‘i", points: ["Klinika Pro’dagi hammasi", "Bir nechta filial", "Integratsiyalar", "Shaxsiy menejer"], cta: "Bog‘lanish" },
      ],
    },
    faq: {
      title: "Ko‘p beriladigan savollar",
      items: [
        { q: "Ulash qancha vaqt oladi?", a: "Odatda 1 kun: shifokorlar, xizmatlar va jadvalni o‘zimiz kiritamiz va xodimlaringizni o‘rgatamiz." },
        { q: "Bemorlar ilova o‘rnatishi kerakmi?", a: "Yo‘q. Bemorlar saytdan yoki Telegram orqali yoziladi — hech narsa o‘rnatish shart emas." },
        { q: "Klinikaning o‘z boti qanday ishlaydi?", a: "Klinikangiz nomi va logotipi bilan alohida Telegram bot yaratamiz: unda yozilish, navbat, eslatmalar va bemor xabarlari." },
        { q: "Bemor ma’lumotlari xavfsizmi?", a: "Ha. Kirish huquqlari rollar bo‘yicha, bemor telefoni shifokordan yashirin, to‘liq tibbiy karta faqat bemor ruxsati bilan ochiladi." },
        { q: "AI tashxis qo‘yadimi?", a: "Yo‘q. AI faqat savollarga javob beradi, yozilishga yordam beradi va to‘g‘ri mutaxassisga yo‘naltiradi." },
        { q: "Bepul sinab ko‘rsa bo‘ladimi?", a: "Ha, 14 kun bepul. Karta ma’lumotlari talab qilinmaydi." },
      ],
    },
    contact: { title: "Klinikangizni bugun raqamlashtiring", text: "Ariza qoldiring — 15 daqiqalik demo ko‘rsatamiz va 14 kunlik bepul sinovni ochamiz." },
  },
  ru: {
    title: "Shifo24 — онлайн-запись, живая очередь и CRM для клиник",
    description: "Shifo24: пациенты записываются онлайн 24/7, живая очередь, SMS-напоминания, электронная медкарта и собственный Telegram-бот клиники. 14 дней бесплатно.",
    nav: { features: "Возможности", patients: "Пациентам", clinic: "Клинике", pricing: "Тарифы", faq: "Вопросы", contact: "Контакты", truegis: "TrueGis" },
    cta: "Попробовать бесплатно",
    hero: {
      eyebrow: "Для клиник · от команды TrueGis",
      h1a: "Shifo24:",
      h1b: "пациенты записываются сами, очередь движется сама",
      text: "Онлайн-запись, живая очередь, SMS-напоминания, электронная медкарта и собственный Telegram-бот клиники — в одной системе. Регистратуре легче, пациенты довольны, а врач занят лечением.",
      primary: "14 дней бесплатно",
      secondary: "Смотреть возможности",
      notes: ["Без установки", "Запуск за 1 день", "Данные защищены"],
    },
    stats: [
      { value: "300+", label: "клиник и врачей" },
      { value: "120 000+", label: "онлайн-записей" },
      { value: "−60%", label: "звонков в регистратуру" },
      { value: "24/7", label: "запись и ответы AI" },
    ],
    pains: {
      title: "Знакомые проблемы?",
      text: "Shifo24 создан, чтобы решить ежедневные боли клиник.",
      cards: [
        { icon: "📞", title: "Телефон разрывается", text: "Администратор весь день на звонках, а пациенты уходят в другую клинику, потому что линия занята." },
        { icon: "⏳", title: "Очередь в коридоре", text: "Непонятно, кто за кем, пациенты нервничают, время врача уходит впустую." },
        { icon: "🚫", title: "Неявки", text: "Записанный пациент не приходит — пустое окно и потерянная выручка." },
      ],
    },
    features: {
      title: "Всё для клиники в одном месте",
      text: "Каждая функция создана вместе с реальными клиниками.",
      cards: [
        { icon: "🗓️", title: "Онлайн-запись 24/7", text: "Через сайт, Telegram-бота и мини-приложение — пациент сам выбирает свободное время." },
        { icon: "🤖", title: "Свой бот клиники", text: "Telegram-бот с вашим названием и логотипом: запись, очередь и уведомления." },
        { icon: "🎟️", title: "Живая очередь", text: "Пациент берёт талон и следит за очередью в телефоне. Врач нажимает «Вызвать следующего»." },
        { icon: "💬", title: "SMS и напоминания", text: "SMS и сообщение в Telegram на каждую запись — неявок становится резко меньше." },
        { icon: "🩺", title: "Электронная медкарта", text: "Диагнозы и рекомендации в одном месте. Полная карта открывается только с согласия пациента." },
        { icon: "📱", title: "Кабинет врача", text: "Приёмы на сегодня, текущий пациент и очередь — удобно с телефона." },
        { icon: "📊", title: "CRM и статистика", text: "Сотрудники, пациенты, расписание, выручка — точные цифры для руководителя." },
        { icon: "🧠", title: "AI-помощник", text: "Отвечает пациентам 24/7 и направляет к нужному врачу. Диагнозы не ставит." },
        { icon: "🔒", title: "Конфиденциальность", text: "Телефон пациента скрыт от врача, доступы — по ролям." },
      ],
    },
    blocks: [
      {
        title: "Пациенту: запись за 30 секунд",
        text: "Пациент выбирает врача, день и свободное время — подтверждение сразу приходит по SMS и в Telegram.",
        points: ["Врачи, цены и рейтинг — открыто", "Видны только реально свободные окна", "Отмена и перенос — в одно касание", "Напоминание перед приёмом"],
      },
      {
        title: "Живая очередь и медкарта",
        text: "Для врачей, которые работают по очереди: пациент берёт талон, следит за номером и приходит вовремя.",
        points: ["Номер в очереди и время ожидания в телефоне", "Врач управляет кнопкой «Вызвать следующего»", "Доступ к полной медкарте — с согласия пациента", "Доступ только на сегодняшний приём"],
      },
      {
        title: "Клинике: всё в одной панели",
        text: "Администратор, врач и руководитель — каждый на своём экране. Бумажный журнал и Excel больше не нужны.",
        points: ["Записи на сегодня и статус очереди", "Расписание врачей и роли сотрудников", "База пациентов и история визитов", "Статистика выручки и загрузки"],
      },
    ],
    steps: {
      title: "Как подключиться",
      items: [
        { title: "Заявка и демо", text: "Оставьте заявку — покажем 15-минутное демо и предложим настройку под вашу клинику." },
        { title: "Запуск за 1 день", text: "Внесём врачей, услуги и расписание, подключим бота клиники и обучим сотрудников." },
        { title: "Пациенты записываются", text: "Разместите ссылку на сайте, в Instagram и Telegram — записи начнут приходить сразу." },
      ],
    },
    pricing: {
      title: "Тарифы",
      text: "От одного врача до сети клиник. Первые 14 дней — бесплатно.",
      note: "Цены без НДС. SMS-пакеты отдельно. При оплате за год — 2 месяца в подарок.",
      plans: [
        { name: "Врач", price: "149 000", per: "сум / мес", text: "Для частной практики", points: ["1 врач", "Онлайн-запись 24/7", "SMS-напоминания", "Кабинет врача"], cta: "Выбрать" },
        { name: "Клиника", price: "490 000", per: "сум / мес", text: "Малые и средние клиники", hot: "Популярный", points: ["До 10 врачей", "Свой Telegram-бот клиники", "Живая очередь", "Электронная медкарта", "CRM и статистика"], cta: "14 дней бесплатно" },
        { name: "Клиника Pro", price: "990 000", per: "сум / мес", text: "Для крупных клиник", points: ["Без ограничения врачей", "AI-помощник 24/7", "Расширенные отчёты", "Приоритетная поддержка"], cta: "Выбрать" },
        { name: "Сеть", price: "Договорная", text: "Сеть филиалов", points: ["Всё из Клиника Pro", "Несколько филиалов", "Интеграции", "Персональный менеджер"], cta: "Связаться" },
      ],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        { q: "Сколько занимает подключение?", a: "Обычно 1 день: мы сами внесём врачей, услуги и расписание и обучим ваших сотрудников." },
        { q: "Пациентам нужно ставить приложение?", a: "Нет. Пациенты записываются на сайте или через Telegram — ничего устанавливать не нужно." },
        { q: "Как работает собственный бот клиники?", a: "Создаём отдельного Telegram-бота с названием и логотипом вашей клиники: в нём запись, очередь, напоминания и сообщения пациентам." },
        { q: "Данные пациентов в безопасности?", a: "Да. Доступы по ролям, телефон пациента скрыт от врача, полная медкарта открывается только с согласия пациента." },
        { q: "AI ставит диагнозы?", a: "Нет. AI только отвечает на вопросы, помогает записаться и направляет к нужному специалисту." },
        { q: "Можно попробовать бесплатно?", a: "Да, 14 дней бесплатно. Данные карты не нужны." },
      ],
    },
    contact: { title: "Переведите клинику в онлайн уже сегодня", text: "Оставьте заявку — покажем 15-минутное демо и откроем 14-дневный бесплатный период." },
  },
  en: {
    title: "Shifo24 — online booking, live queue and CRM for clinics",
    description: "Shifo24: patients book online 24/7, live queue, SMS reminders, electronic medical cards and your clinic’s own Telegram bot. 14 days free.",
    nav: { features: "Features", patients: "For patients", clinic: "For clinics", pricing: "Pricing", faq: "FAQ", contact: "Contact", truegis: "TrueGis" },
    cta: "Try it free",
    hero: {
      eyebrow: "For clinics · by the TrueGis team",
      h1a: "Shifo24:",
      h1b: "patients book themselves, the queue moves itself",
      text: "Online booking, a live queue, SMS reminders, electronic medical cards and your clinic’s own Telegram bot — in one system. The front desk breathes easier, patients are happy, and doctors focus on treatment.",
      primary: "Try 14 days free",
      secondary: "See features",
      notes: ["Nothing to install", "Live in 1 day", "Data protected"],
    },
    stats: [
      { value: "300+", label: "clinics and doctors" },
      { value: "120,000+", label: "online bookings" },
      { value: "−60%", label: "calls to the front desk" },
      { value: "24/7", label: "booking and AI answers" },
    ],
    pains: {
      title: "Sound familiar?",
      text: "Shifo24 was built to fix the daily pains of clinics.",
      cards: [
        { icon: "📞", title: "The phone never stops", text: "The front desk spends all day on calls, and patients go elsewhere because the line is busy." },
        { icon: "⏳", title: "A crowded hallway", text: "Nobody knows who is next, patients get nervous and the doctor’s time is wasted." },
        { icon: "🚫", title: "No-shows", text: "A booked patient doesn’t come — an empty slot and lost revenue." },
      ],
    },
    features: {
      title: "Everything your clinic needs, in one place",
      text: "Every feature was built together with real clinics.",
      cards: [
        { icon: "🗓️", title: "Online booking 24/7", text: "Via website, Telegram bot and mini app — patients pick a free slot themselves." },
        { icon: "🤖", title: "Your clinic’s own bot", text: "A Telegram bot with your name and logo: booking, queue and notifications." },
        { icon: "🎟️", title: "Live queue", text: "Patients take a ticket and follow the queue on their phone. The doctor taps “Call next”." },
        { icon: "💬", title: "SMS and reminders", text: "An SMS and a Telegram message for every booking — far fewer no-shows." },
        { icon: "🩺", title: "Electronic medical card", text: "Diagnoses and recommendations in one place. The full card opens only with the patient’s consent." },
        { icon: "📱", title: "Doctor’s cabinet", text: "Today’s visits, the current patient and the queue — easy on a phone." },
        { icon: "📊", title: "CRM and analytics", text: "Staff, patients, schedule, revenue — clear numbers for management." },
        { icon: "🧠", title: "AI assistant", text: "Answers patients 24/7 and sends them to the right doctor. Never diagnoses." },
        { icon: "🔒", title: "Privacy", text: "Patient phone numbers are hidden from doctors, access is role-based." },
      ],
    },
    blocks: [
      {
        title: "For patients: booked in 30 seconds",
        text: "The patient picks a doctor, a day and a free slot — confirmation arrives instantly by SMS and Telegram.",
        points: ["Doctors, prices and ratings in the open", "Only truly free slots are shown", "Cancel or reschedule in one tap", "A reminder before the visit"],
      },
      {
        title: "Live queue and medical card",
        text: "For doctors who work by queue: the patient takes a ticket, follows their number and arrives on time.",
        points: ["Queue number and waiting time on the phone", "The doctor runs it with “Call next”", "Full medical card access — with the patient’s consent", "Access only for today’s visit"],
      },
      {
        title: "For the clinic: one dashboard",
        text: "Front desk, doctors and management — each on their own screen. No more paper logs or Excel.",
        points: ["Today’s bookings and queue status", "Doctor schedules and staff roles", "Patient base and visit history", "Revenue and workload analytics"],
      },
    ],
    steps: {
      title: "How to get started",
      items: [
        { title: "Request and demo", text: "Leave a request — we’ll show a 15-minute demo and suggest a setup for your clinic." },
        { title: "Live in 1 day", text: "We add doctors, services and schedules, connect the clinic bot and train your staff." },
        { title: "Patients start booking", text: "Put the link on your website, Instagram and Telegram — bookings start right away." },
      ],
    },
    pricing: {
      title: "Pricing",
      text: "From a single doctor to a chain of clinics. The first 14 days are free.",
      note: "Prices exclude VAT. SMS packs are separate. Pay yearly and get 2 months free.",
      plans: [
        { name: "Doctor", price: "149,000", per: "UZS / month", text: "For private practice", points: ["1 doctor", "Online booking 24/7", "SMS reminders", "Doctor’s cabinet"], cta: "Choose" },
        { name: "Clinic", price: "490,000", per: "UZS / month", text: "Small and mid-size clinics", hot: "Popular", points: ["Up to 10 doctors", "Your clinic’s own Telegram bot", "Live queue", "Electronic medical card", "CRM and analytics"], cta: "14 days free" },
        { name: "Clinic Pro", price: "990,000", per: "UZS / month", text: "For large clinics", points: ["Unlimited doctors", "AI assistant 24/7", "Advanced reports", "Priority support"], cta: "Choose" },
        { name: "Network", price: "Custom", text: "A chain of branches", points: ["Everything in Clinic Pro", "Multiple branches", "Integrations", "Dedicated manager"], cta: "Contact us" },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How long does setup take?", a: "Usually 1 day: we add your doctors, services and schedules ourselves and train your staff." },
        { q: "Do patients need to install an app?", a: "No. Patients book on the website or via Telegram — nothing to install." },
        { q: "How does the clinic’s own bot work?", a: "We create a separate Telegram bot with your clinic’s name and logo: booking, queue, reminders and patient messages." },
        { q: "Is patient data safe?", a: "Yes. Access is role-based, patient phone numbers are hidden from doctors, and the full medical card opens only with the patient’s consent." },
        { q: "Does the AI diagnose?", a: "No. The AI only answers questions, helps with booking and directs patients to the right specialist." },
        { q: "Can I try it for free?", a: "Yes, 14 days free. No card details required." },
      ],
    },
    contact: { title: "Take your clinic online today", text: "Leave a request — we’ll show a 15-minute demo and open your 14-day free trial." },
  },
};
