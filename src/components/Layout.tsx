import { useEffect, useRef, useState, type ReactNode } from "react";
import { LANGS, type Lang } from "../i18n";
import { CLIENTS, COMMON, CONTACTS } from "../content/common";
import { Icon, type IconName } from "./Icons";
import { useTheme } from "../theme";

export type NavLink = { href: string; label: string };

/** Плавное появление блоков при прокрутке. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <span className="kicker">{children}</span>;
}

export function Header({ brand, logo, homeHref, links, cta, lang, setLang }: { brand: string; logo: string; homeHref: string; links: NavLink[]; cta: NavLink; lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__row">
        <a className="brand" href={homeHref}>
          <img src={logo} alt="" width={30} height={30} />
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
          <button type="button" className="theme-btn" onClick={toggle} aria-label={theme === "light" ? "Dark mode" : "Light mode"} title={theme === "light" ? "Dark mode" : "Light mode"}>
            <Icon name={theme === "light" ? "moon" : "sun"} size={18} />
          </button>
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button key={l} type="button" className={l === lang ? "is-active" : ""} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="btn btn-primary btn-sm" href={cta.href}>
            {cta.label}
          </a>
          <button type="button" className="burger" aria-label={COMMON[lang].menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
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

export function Clients({ title }: { title: string }) {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="clients">
      <p className="clients__title">{title}</p>
      <div className="marquee">
        <div className="marquee__track">
          {row.map((c, i) => (
            <div className="client" key={i} aria-hidden={i >= CLIENTS.length}>
              <img src={c.logo} alt="" height={36} />
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Число «набегает», когда блок появляется на экране. */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const [text, setText] = useState(value);
  useEffect(() => {
    const m = value.match(/^([^\d]*)([\d\s,.]+)(.*)$/);
    const el = ref.current;
    if (!m || !el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = m;
    if (/\d/.test(post)) return; // «24/7» и т. п. — не считаем
    const sep = num.includes(",") ? "," : num.includes(" ") ? " " : "";
    const target = Number(num.replace(/[\s,]/g, ""));
    if (!Number.isFinite(target) || target < 10) return;
    const fmt = (n: number) => pre + (sep ? Math.round(n).toLocaleString("en-US").replace(/,/g, sep) : String(Math.round(n))) + post;
    // до появления на экране — итоговое число (блок всё равно скрыт анимацией появления)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      setText(fmt(0));
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        setText(fmt(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <b ref={ref}>{text}</b>;
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="stats">
      {items.map((s, i) => (
        <Reveal className="stat" key={s.label} delay={i * 80}>
          <CountUp value={s.value} />
          <span>{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}

export function Statements({ items }: { items: { icon: IconName; title: string; text: string }[] }) {
  return (
    <div className="statements">
      {items.map((s, i) => (
        <Reveal className="statement" key={s.title} delay={i * 100}>
          <span className="statement__num">0{i + 1}</span>
          <span className="statement__icon">
            <Icon name={s.icon} size={28} />
          </span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="steps">
      {items.map((s, i) => (
        <Reveal className="step" key={s.title} delay={i * 100}>
          <span className="step__num">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Три экрана веером: средний впереди, крайние повёрнуты. */
export function Showcase({ screens, captions }: { screens: ReactNode[]; captions: string[] }) {
  return (
    <div className="showcase">
      {screens.map((s, i) => (
        <Reveal className={`showcase__item showcase__item--${i}`} key={i} delay={i * 120}>
          {s}
          <span className="showcase__caption">{captions[i]}</span>
        </Reveal>
      ))}
    </div>
  );
}

const API = ((import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || "https://dev.admin13.uz/v1").replace(/\/$/, "");

export function Contact({ product, lang, title, text }: { product: "truegis" | "shifo24"; lang: Lang; title: string; text: string }) {
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
    } catch {
      setState("err");
    }
  };

  return (
    <div className="contact">
      <Reveal className="contact__info">
        <h2 className="display-2">{title}</h2>
        <p className="lead">{text}</p>
        <div className="contact__lines">
          <a className="contact__line" href={CONTACTS.phoneHref}>
            <Icon name="call" size={20} />
            {CONTACTS.phone}
          </a>
          <a className="contact__line" href={CONTACTS.sales} target="_blank" rel="noreferrer">
            <Icon name="telegram" size={20} />
            Telegram
          </a>
          <span className="contact__line muted">
            <Icon name="location" size={20} />
            {COMMON[lang].address}
          </span>
        </div>
      </Reveal>
      <Reveal className="form-wrap" delay={120}>
        <form className="form" ref={formRef} onSubmit={submit}>
          <label className="field">
            <span>{t.name}</span>
            <input className="input" name="name" required minLength={2} maxLength={80} autoComplete="name" />
          </label>
          <label className="field">
            <span>{t.phone}</span>
            <input className="input" name="phone" required type="tel" inputMode="tel" placeholder="+998 90 123 45 67" maxLength={32} autoComplete="tel" />
          </label>
          <label className="field">
            <span>{t.business}</span>
            <input className="input" name="business" maxLength={120} autoComplete="organization" />
          </label>
          <label className="hp" aria-hidden>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="btn btn-primary btn-lg" type="submit" disabled={state === "sending"}>
            {state === "sending" ? t.sending : t.send}
            <Icon name="arrow" size={18} />
          </button>
          {state === "ok" && <p className="form__msg form__msg--ok">{t.ok}</p>}
          {state === "err" && <p className="form__msg form__msg--err">{error ?? t.err}</p>}
          <p className="form__note">{t.privacy}</p>
        </form>
      </Reveal>
    </div>
  );
}

export function Footer({ lang, links }: { lang: Lang; links: NavLink[] }) {
  const t = COMMON[lang].footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href="/">
              <img src="/img/truegis-icon.png" alt="" width={30} height={30} />
              TrueGis
            </a>
            <p className="muted">{t.about}</p>
            <div className="footer__qr">
              <img src="/img/truegis-qr.svg" alt="QR @TrueGis_bot" width={84} height={84} />
              <span className="muted">{t.tryBot}</span>
            </div>
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
                  t.me/TrueGis
                </a>
              </li>
              <li className="muted">{COMMON[lang].address}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {t.rights}
          </span>
          <span>TrueGis · Shifo24</span>
        </div>
      </div>
    </footer>
  );
}
