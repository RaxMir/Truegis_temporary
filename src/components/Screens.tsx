/** Экраны-макеты продуктов (вёрстка, а не картинки): чёткие на любом экране и лёгкие. */
import type { ReactNode } from "react";
import type { Lang } from "../i18n";

const L = <T,>(lang: Lang, v: Record<Lang, T>) => v[lang];

function Phone({ title, logo, children, input }: { title: string; logo: string; children: ReactNode; input?: string }) {
  return (
    <div className="phone" aria-hidden>
      <div className="phone__screen">
        <div className="phone__bar">
          <span>9:41</span>
          <span>5G ▮▮▮</span>
        </div>
        <div className="phone__title">
          <img src={logo} alt="" />
          {title}
        </div>
        <div className="phone__body">{children}</div>
        {input && <div className="ui-input">{input}</div>}
      </div>
    </div>
  );
}

export function AiSearchScreen({ lang }: { lang: Lang }) {
  return (
    <Phone title="TrueGIS AI" logo="/img/truegis-icon.png" input={L(lang, { uz: "Xabar yozing…", ru: "Сообщение…", en: "Message…" })}>
      <div className="ui-bubble">{L(lang, { uz: "Yaqin atrofda arzon va mazali osh qayerda?", ru: "Где рядом вкусный и недорогой плов?", en: "Where can I get good, cheap plov nearby?" })}</div>
      <div className="ui-bubble ui-bubble--in">{L(lang, { uz: "Sizga yaqin 3 ta joy topdim ", ru: "Нашёл 3 места рядом с вами ", en: "I found 3 places near you " })}</div>
      {[
        ["Bek Restorani", "0.6 km", "4.8"],
        ["Fayz Mount", "1.2 km", "4.7"],
        ["Milliy Taomlar", "1.9 km", "4.6"],
      ].map(([n, d, r]) => (
        <div className="ui-card" key={n}>
          <div className="ui-row">
            <span className="ui-value">{n}</span>
            <span className="ui-stars">★ {r}</span>
          </div>
          <div className="ui-row">
            <span className="ui-label">
              <span className="ui-dot" />
              {L(lang, { uz: "Ochiq", ru: "Открыто", en: "Open" })} · {d}
            </span>
            <span className="ui-chip">{L(lang, { uz: "Yo‘l", ru: "Маршрут", en: "Route" })}</span>
          </div>
        </div>
      ))}
    </Phone>
  );
}

export function PlaceScreen({ lang }: { lang: Lang }) {
  return (
    <Phone title="Costa Coffee" logo="/clients/costa.webp">
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Masofa", ru: "Расстояние", en: "Distance" })}</span>
          <span className="ui-value">1.4 km · 6 min</span>
        </div>
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Sizga eng yaqin metro", ru: "Ближайшее метро", en: "Nearest metro" })}</span>
          <span className="ui-value">Amir Temur · 300 m</span>
        </div>
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Ish vaqti", ru: "Часы работы", en: "Hours" })}</span>
          <span className="ui-value ui-green">{L(lang, { uz: "Ochiq · 23:00 gacha", ru: "Открыто · до 23:00", en: "Open · till 23:00" })}</span>
        </div>
      </div>
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-value">Yandex Go</span>
          <span className="ui-value">~14 500 {L(lang, { uz: "so‘m", ru: "сум", en: "UZS" })}</span>
        </div>
        <div className="ui-btn">{L(lang, { uz: "Taksi chaqirish", ru: "Вызвать такси", en: "Order a taxi" })}</div>
      </div>
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-value">{L(lang, { uz: "Sharhlar", ru: "Отзывы", en: "Reviews" })}</span>
          <span className="ui-stars">★★★★★ 4.9</span>
        </div>
        <span className="ui-label">{L(lang, { uz: "«Kofe zo‘r, xizmat tez!» — Dilnoza", ru: "«Отличный кофе, быстрое обслуживание!» — Дилноза", en: "“Great coffee, fast service!” — Dilnoza" })}</span>
      </div>
      <div className="ui-chips">
        <span className="ui-chip">Google Maps</span>
        <span className="ui-chip">Yandex Maps</span>
      </div>
    </Phone>
  );
}

export function BusinessScreen({ lang }: { lang: Lang }) {
  return (
    <Phone title="Irish Pub" logo="/clients/irish.webp">
      <div className="ui-chips">
        <span className="ui-chip">{L(lang, { uz: "Menyu", ru: "Меню", en: "Menu" })}</span>
        <span className="ui-chip">{L(lang, { uz: "Stol band qilish", ru: "Бронь столика", en: "Book a table" })}</span>
        <span className="ui-chip">{L(lang, { uz: "Aksiyalar", ru: "Акции", en: "Deals" })}</span>
      </div>
      {[
        ["Burger Classic", "65 000"],
        ["Pizza Pepperoni", "89 000"],
        ["Lemonade", "25 000"],
      ].map(([n, p]) => (
        <div className="ui-card" key={n}>
          <div className="ui-row">
            <span className="ui-value">{n}</span>
            <span className="ui-chip">+ {p}</span>
          </div>
        </div>
      ))}
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Savat", ru: "Корзина", en: "Cart" })}</span>
          <span className="ui-value">179 000 {L(lang, { uz: "so‘m", ru: "сум", en: "UZS" })}</span>
        </div>
        <div className="ui-btn">{L(lang, { uz: "Buyurtma berish", ru: "Оформить заказ", en: "Place order" })}</div>
      </div>
      <div className="ui-bubble ui-bubble--in">{L(lang, { uz: "AI yordamchi: «Bugun 20:00 ga stol bo‘sh, band qilaymi?»", ru: "AI-помощник: «На 20:00 есть свободный столик, забронировать?»", en: "AI assistant: “A table is free at 8 pm — shall I book it?”" })}</div>
    </Phone>
  );
}

export function BookingScreen({ lang }: { lang: Lang }) {
  return (
    <Phone title="Shox Med Center" logo="/img/shifo24-logo.png">
      <div className="ui-card">
        <div className="ui-row">
          <div className="ui-row" style={{ justifyContent: "flex-start" }}>
            <span className="ui-avatar">AK</span>
            <div>
              <div className="ui-value">{L(lang, { uz: "Dr. Aziza Karimova", ru: "Др. Азиза Каримова", en: "Dr. Aziza Karimova" })}</div>
              <span className="ui-label">{L(lang, { uz: "Kardiolog · 12 yil", ru: "Кардиолог · 12 лет", en: "Cardiologist · 12 yrs" })}</span>
            </div>
          </div>
          <span className="ui-stars">★ 4.9</span>
        </div>
      </div>
      <span className="ui-label">{L(lang, { uz: "Ertaga, 14-noyabr", ru: "Завтра, 14 ноября", en: "Tomorrow, Nov 14" })}</span>
      <div className="ui-slots">
        {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30"].map((t, i) => (
          <span key={t} className={`ui-slot ${i === 4 ? "is-on" : ""} ${i === 1 || i === 6 ? "is-off" : ""}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Qabul narxi", ru: "Стоимость приёма", en: "Visit price" })}</span>
          <span className="ui-value">150 000 {L(lang, { uz: "so‘m", ru: "сум", en: "UZS" })}</span>
        </div>
        <div className="ui-btn">{L(lang, { uz: "11:00 ga yozilish", ru: "Записаться на 11:00", en: "Book 11:00" })}</div>
      </div>
      <div className="ui-bubble ui-bubble--in">{L(lang, { uz: "SMS: Siz 14-noyabr 11:00 ga yozildingiz", ru: "SMS: Вы записаны на 14 ноября, 11:00", en: "SMS: You are booked for Nov 14, 11:00" })}</div>
    </Phone>
  );
}

export function QueueScreen({ lang }: { lang: Lang }) {
  return (
    <Phone title="Shox Med Center" logo="/img/shifo24-logo.png">
      <div className="ui-card" style={{ textAlign: "center", justifyItems: "center", padding: 18 }}>
        <span className="ui-label">{L(lang, { uz: "Sizning navbatingiz", ru: "Ваш номер в очереди", en: "Your queue number" })}</span>
        <span className="ui-big grad-text">№ 17</span>
        <span className="ui-chip">{L(lang, { uz: "Oldingizda 3 kishi · ~20 daqiqa", ru: "Перед вами 3 человека · ~20 мин", en: "3 people ahead · ~20 min" })}</span>
      </div>
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Hozir qabulda", ru: "Сейчас на приёме", en: "Now serving" })}</span>
          <span className="ui-value">№ 14</span>
        </div>
        <div className="ui-row">
          <span className="ui-label">{L(lang, { uz: "Shifokor", ru: "Врач", en: "Doctor" })}</span>
          <span className="ui-value">{L(lang, { uz: "Terapevt, 204-xona", ru: "Терапевт, каб. 204", en: "GP, room 204" })}</span>
        </div>
      </div>
      <div className="ui-bubble ui-bubble--in">{L(lang, { uz: "Navbatingiz yaqinlashganda Telegram orqali chaqiramiz", ru: "Позовём в Telegram, когда подойдёт ваша очередь", en: "We’ll call you in Telegram when it’s your turn" })}</div>
      <div className="ui-card">
        <div className="ui-row">
          <span className="ui-value">{L(lang, { uz: "Tibbiy kartaga ruxsat", ru: "Доступ к медкарте", en: "Medical card access" })}</span>
          <span></span>
        </div>
        <span className="ui-label">{L(lang, { uz: "Shifokor butun kartangizni ko‘rishni so‘ramoqda", ru: "Врач просит доступ ко всей медкарте", en: "The doctor asks to see your full card" })}</span>
        <div className="ui-row" style={{ gap: 6 }}>
          <span className="ui-btn" style={{ flex: 1 }}>
            {L(lang, { uz: "Ruxsat", ru: "Разрешить", en: "Allow" })}
          </span>
          <span className="ui-slot" style={{ flex: 1, padding: 9 }}>
            {L(lang, { uz: "Rad etish", ru: "Отказать", en: "Deny" })}
          </span>
        </div>
      </div>
    </Phone>
  );
}

export function CrmDesk({ lang }: { lang: Lang }) {
  const rows: [string, string, string, string, string][] = [
    ["09:00", L(lang, { uz: "Bemor #1042", ru: "Пациент #1042", en: "Patient #1042" }), L(lang, { uz: "Kardiolog", ru: "Кардиолог", en: "Cardiology" }), "ok", L(lang, { uz: "Keldi", ru: "Пришёл", en: "Arrived" })],
    ["09:30", L(lang, { uz: "Bemor #1043", ru: "Пациент #1043", en: "Patient #1043" }), L(lang, { uz: "Terapevt", ru: "Терапевт", en: "GP" }), "now", L(lang, { uz: "Qabulda", ru: "На приёме", en: "In visit" })],
    ["10:00", L(lang, { uz: "Bemor #1044", ru: "Пациент #1044", en: "Patient #1044" }), L(lang, { uz: "Nevrolog", ru: "Невролог", en: "Neurology" }), "wait", L(lang, { uz: "Navbatda", ru: "В очереди", en: "Waiting" })],
    ["10:30", L(lang, { uz: "Bemor #1045", ru: "Пациент #1045", en: "Patient #1045" }), L(lang, { uz: "Kardiolog", ru: "Кардиолог", en: "Cardiology" }), "wait", L(lang, { uz: "Navbatda", ru: "В очереди", en: "Waiting" })],
  ];
  return (
    <div className="desk" aria-hidden>
      <div className="desk__top">
        <i />
        <i />
        <i />
      </div>
      <div className="desk__body">
        <div className="desk__side">
          <b>{L(lang, { uz: "Bugun", ru: "Сегодня", en: "Today" })}</b>
          <span>{L(lang, { uz: "Yozilishlar", ru: "Записи", en: "Bookings" })}</span>
          <span>{L(lang, { uz: "Shifokorlar", ru: "Врачи", en: "Doctors" })}</span>
          <span>{L(lang, { uz: "Bemorlar", ru: "Пациенты", en: "Patients" })}</span>
          <span>{L(lang, { uz: "Statistika", ru: "Статистика", en: "Analytics" })}</span>
          <span>{L(lang, { uz: "Sozlamalar", ru: "Настройки", en: "Settings" })}</span>
        </div>
        <div className="desk__main">
          <div className="desk__kpis">
            <div className="desk__kpi">
              <span className="muted">{L(lang, { uz: "Yozilishlar", ru: "Записей", en: "Bookings" })}</span>
              <b>48</b>
            </div>
            <div className="desk__kpi">
              <span className="muted">{L(lang, { uz: "Navbatda", ru: "В очереди", en: "In queue" })}</span>
              <b>7</b>
            </div>
            <div className="desk__kpi">
              <span className="muted">{L(lang, { uz: "Tushum", ru: "Выручка", en: "Revenue" })}</span>
              <b>7.2 mln</b>
            </div>
          </div>
          <div className="desk__table">
            <div className="desk__tr">
              <span>{L(lang, { uz: "Vaqt", ru: "Время", en: "Time" })}</span>
              <span>{L(lang, { uz: "Bemor", ru: "Пациент", en: "Patient" })}</span>
              <span>{L(lang, { uz: "Bo‘lim", ru: "Отделение", en: "Department" })}</span>
              <span>{L(lang, { uz: "Holat", ru: "Статус", en: "Status" })}</span>
            </div>
            {rows.map(([t, p, d, k, s]) => (
              <div className="desk__tr" key={t}>
                <span>{t}</span>
                <span>{p}</span>
                <span className="muted">{d}</span>
                <span className={`pill pill--${k}`}>{s}</span>
              </div>
            ))}
          </div>
          <div className="ui-btn" style={{ justifySelf: "start", padding: "8px 16px" }}>
            {L(lang, { uz: "Keyingi bemorni chaqirish", ru: "Вызвать следующего", en: "Call next patient" })}
          </div>
        </div>
      </div>
    </div>
  );
}
