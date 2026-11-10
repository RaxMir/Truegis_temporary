import { useEffect, useRef, useState, type ReactNode } from "react";
import { LANGS, type Lang } from "../i18n";
import { CLIENTS, COMMON, CONTACTS } from "../content/common";

export type NavLink = { href: string; label: string };

/** Плавное появление блоков при прокрутке (один IntersectionObserver на страницу). */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" }) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

export function Header({
  brand,
  logo,
  homeHref,
  links,
  cta,
  lang,
  setLang,
}: {
  brand: string;
  logo: string;
  homeHref: string;
  links: NavLink[];
  cta: NavLink;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__row">
        <a className="brand" href={homeHref}>
          <img src={logo} alt="" width={32} height={32} />
          {brand}
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header__right">
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l} type="button" className={l === lang ? "is-active" : ""} onClick={() => setLang(l)}>
                {l === "uz" ? "UZ" : l === "ru" ? "RU" : "EN"}
              </button>
            ))}
          </div>
          <a className="btn btn-primary btn-sm" href={cta.href}>
            {cta.label}
          </a>
          <button type="button" className="burger" aria-label={COMMON[lang].menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? "is-open" : ""}`} onClick={() => setOpen(false)}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href={cta.href}>
          {cta.label}
        </a>
      </nav>
    </header>
  );
}

export function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {row.map((c, i) => (
          <div className="client" key={i} aria-hidden={i >= CLIENTS.length}>
            <img src={c.logo} alt="" height={40} loading="lazy" />
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="stats">
      {items.map((s) => (
        <Reveal className="stat" key={s.label}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}

export type Card = { icon: string; title: string; text: string; tag?: string };
export function Cards({ items, four }: { items: Card[]; four?: boolean }) {
  return (
    <div className={`cards ${four ? "cards--4" : ""}`}>
      {items.map((c) => (
        <Reveal className="card" key={c.title}>
          <div className="icon" aria-hidden>
            {c.icon}
          </div>
          {c.tag && <span className="tag">{c.tag}</span>}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Feature({ title, text, points, visual, reverse, spark = "✦" }: { title: string; text: string; points: string[]; visual: ReactNode; reverse?: boolean; spark?: string }) {
  return (
    <Reveal className={`feature ${reverse ? "feature--rev" : ""}`}>
      <div className="feature__text">
        <h3>
          <span className="spark accent">{spark}</span>
          <span className="grad-text">{title}</span>
        </h3>
        <p className="lead">{text}</p>
        <ul className="checks">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="feature__visual">
        <div className="glow" />
        {visual}
      </div>
    </Reveal>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="steps">
      {items.map((s) => (
        <Reveal className="step" key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export type Plan = { name: string; price: string; per?: string; text: string; points: string[]; hot?: string; cta: string };
export function Plans({ items, note, onPick }: { items: Plan[]; note: string; onPick: (plan: string) => void }) {
  return (
    <>
      <div className="plans">
        {items.map((p) => (
          <Reveal className={`plan ${p.hot ? "plan--hot" : ""}`} key={p.name}>
            {p.hot && <span className="plan__badge">{p.hot}</span>}
            <h3>{p.name}</h3>
            <div className="plan__price">
              {p.price} {p.per && <small>{p.per}</small>}
            </div>
            <p className="muted" style={{ margin: 0, fontSize: 15 }}>
              {p.text}
            </p>
            <ul>
              {p.points.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <a className={`btn ${p.hot ? "btn-primary" : "btn-ghost"}`} href="#contact" onClick={() => onPick(p.name)}>
              {p.cta}
            </a>
          </Reveal>
        ))}
      </div>
      <p className="plans-note">{note}</p>
    </>
  );
}

export function Faq({ title, items, lang }: { title: string; items: { q: string; a: string }[]; lang: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      <div className="faq__intro">
        <h2>{title}</h2>
        <p className="muted">{COMMON[lang].faqAsk}</p>
        <a className="btn btn-primary" href={CONTACTS.sales} target="_blank" rel="noreferrer">
          {COMMON[lang].writeTelegram}
        </a>
      </div>
      <div>
        {items.map((it, i) => (
          <div className={`faq__item ${open === i ? "is-open" : ""}`} key={it.q}>
            <button type="button" className="faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
              {it.q}
              <i aria-hidden>+</i>
            </button>
            {open === i && <p className="faq__a">{it.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

const API = ((import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || "https://dev.admin13.uz/v1").replace(/\/$/, "");

export function LeadForm({ product, lang, plans, plan, setPlan, title, text }: { product: "truegis" | "shifo24"; lang: Lang; plans: string[]; plan: string; setPlan: (p: string) => void; title: string; text: string }) {
  const t = COMMON[lang].form;
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState("sending");
    setError(null);
    try {
      const res = await fetch(`${API}/common/bot/landing/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json", lang },
        body: JSON.stringify({ ...data, product, lang }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setError(body?.message ?? null);
        setState("err");
        return;
      }
      setState("ok");
      formRef.current?.reset();
      setPlan("");
    } catch {
      setState("err");
    }
  };

  return (
    <div className="contact">
      <div className="contact__info">
        <h2>{title}</h2>
        <p className="lead">{text}</p>
        <a className="contact__line" href={CONTACTS.phoneHref}>
          <span className="icon">📞</span>
          {CONTACTS.phone}
        </a>
        <a className="contact__line" href={CONTACTS.sales} target="_blank" rel="noreferrer">
          <span className="icon">✈️</span>
          Telegram
        </a>
        <div className="contact__line">
          <span className="icon">📍</span>
          <span className="muted">{COMMON[lang].address}</span>
        </div>
      </div>
      <form className="form" ref={formRef} onSubmit={submit}>
        <h3>{t.title}</h3>
        <p className="muted" style={{ margin: 0 }}>
          {t.text}
        </p>
        <div className="form__row">
          <label className="field">
            {t.name}
            <input className="input" name="name" required minLength={2} maxLength={80} autoComplete="name" />
          </label>
          <label className="field">
            {t.phone}
            <input className="input" name="phone" required type="tel" inputMode="tel" placeholder="+998 90 123 45 67" maxLength={32} autoComplete="tel" />
          </label>
        </div>
        <div className="form__row">
          <label className="field">
            {t.business}
            <input className="input" name="business" maxLength={120} autoComplete="organization" />
          </label>
          <label className="field">
            {t.plan}
            <select className="input" name="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
              <option value="">{t.planAny}</option>
              {plans.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="field">
          {t.message}
          <textarea className="input" name="message" maxLength={1000} />
        </label>
        {/* ловушка для ботов: людям не видна */}
        <label className="hp" aria-hidden>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? t.sending : t.send}
        </button>
        {state === "ok" && <p className="form__msg form__msg--ok">{t.ok}</p>}
        {state === "err" && <p className="form__msg form__msg--err">{error ?? t.err}</p>}
        <p className="muted" style={{ margin: 0, fontSize: 13 }}>
          {t.privacy}
        </p>
      </form>
    </div>
  );
}

export function Footer({ lang, links }: { lang: Lang; links: NavLink[] }) {
  const t = COMMON[lang].footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a className="brand" href="/">
              <img src="/img/truegis-icon.png" alt="" width={32} height={32} />
              TrueGis
            </a>
            <p className="muted" style={{ fontSize: 14 }}>
              {t.tryBot}
            </p>
            <img className="footer__qr" src="/img/truegis-qr.svg" alt="QR @TrueGis_bot" width={92} height={92} />
          </div>
          <div>
            <h4>{t.products}</h4>
            <ul>
              <li>
                <a href="/">TrueGis</a>
              </li>
              <li>
                <a href="/shifo24/">Shifo24</a>
              </li>
              <li>
                <a href={CONTACTS.bot} target="_blank" rel="noreferrer">
                  @TrueGis_bot
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.links}</h4>
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.contact}</h4>
            <ul>
              <li>
                <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
              </li>
              <li>
                <a href={CONTACTS.channel} target="_blank" rel="noreferrer">
                  @TrueGis
                </a>
              </li>
              <li>{COMMON[lang].address}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {t.rights}
          </span>
          <span>truegis.uz</span>
        </div>
      </div>
    </footer>
  );
}
