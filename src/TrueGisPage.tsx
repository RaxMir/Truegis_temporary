import { useMemo, useState } from "react";
import { useLang, type Tr } from "./i18n";
import { CONTACTS } from "./content/common";
import { TRUEGIS } from "./content/truegis";
import { Cards, Clients, Faq, Feature, Footer, Header, LeadForm, Plans, Reveal, Stats, Steps, useReveal } from "./components/Layout";
import { AiSearchScreen, BusinessScreen, CrmDesk, PlaceScreen } from "./components/Screens";

const titles = Object.fromEntries(Object.entries(TRUEGIS).map(([k, v]) => [k, v.title])) as Tr<string>;
const descriptions = Object.fromEntries(Object.entries(TRUEGIS).map(([k, v]) => [k, v.description])) as Tr<string>;

export default function TrueGisPage() {
  const { lang, setLang } = useLang(titles, descriptions);
  const t = TRUEGIS[lang];
  const [plan, setPlan] = useState("");
  useReveal();

  const links = useMemo(
    () => [
      { href: "#features", label: t.nav.features },
      { href: "#business", label: t.nav.business },
      { href: "/shifo24/", label: t.nav.shifo },
      { href: "#pricing", label: t.nav.pricing },
      { href: "#faq", label: t.nav.faq },
      { href: "#contact", label: t.nav.contact },
    ],
    [t],
  );
  const visuals = [<PlaceScreen lang={lang} key="p" />, <BusinessScreen lang={lang} key="b" />, <CrmDesk lang={lang} key="c" />];

  return (
    <>
      <Header brand="TrueGis" logo="/img/truegis-icon.png" homeHref="/" links={links} cta={{ href: "#contact", label: t.cta }} lang={lang} setLang={setLang} />
      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__text">
              <span className="eyebrow">
                <span className="dot" />
                {t.hero.eyebrow}
              </span>
              <h1>
                <span className="grad-text">{t.hero.h1a}</span> {t.hero.h1b}
              </h1>
              <p className="lead">{t.hero.text}</p>
              <div className="hero__ctas">
                <a className="btn btn-primary" href="#contact">
                  {t.hero.addBusiness}
                </a>
                <a className="btn btn-ghost" href={CONTACTS.bot} target="_blank" rel="noreferrer">
                  {t.hero.openBot} →
                </a>
              </div>
              <div className="hero__note">
                {t.hero.notes.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
            <div className="hero__visual">
              <div className="glow" />
              <AiSearchScreen lang={lang} />
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <Stats items={t.stats} />
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <h2 className="center" style={{ marginBottom: 32, fontSize: 28 }}>
              {t.clientsTitle}
            </h2>
            <Clients />
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <h2>{t.users.title}</h2>
              <p className="lead">{t.users.text}</p>
            </div>
            <Cards items={t.users.cards} />
          </div>
        </section>

        <section className="section" id="business">
          <div className="container">
            <div className="section-head">
              <h2>{t.business.title}</h2>
              <p className="lead">{t.business.text}</p>
            </div>
            {t.business.blocks.map((b, i) => (
              <Feature key={b.title} title={b.title} text={b.text} points={b.points} visual={visuals[i]} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <h2 className="center" style={{ marginBottom: 36 }}>
              {t.why.title}
            </h2>
            <Cards items={t.why.cards} four />
          </div>
        </section>

        <section className="section" id="shifo24">
          <div className="container">
            <Reveal className="promo">
              <div style={{ display: "grid", gap: 16 }}>
                <span className="promo__brand">
                  <img src="/img/shifo24-logo.png" alt="" width={40} height={40} />
                  Shifo24
                </span>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>{t.promo.title}</h2>
                <p className="muted" style={{ margin: 0 }}>
                  {t.promo.text}
                </p>
                <ul className="checks">
                  {t.promo.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a className="btn btn-primary" href="/shifo24/" style={{ justifySelf: "start" }}>
                  {t.promo.cta} →
                </a>
              </div>
              <div className="theme-shifo" style={{ display: "flex", justifyContent: "center" }}>
                <img src="/img/shifo24-logo.png" alt="Shifo24" width={180} height={163} style={{ filter: "drop-shadow(0 20px 50px rgba(47,181,214,.45))" }} />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <h2 className="center" style={{ marginBottom: 36 }}>
              {t.steps.title}
            </h2>
            <Steps items={t.steps.items} />
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head">
              <h2>{t.pricing.title}</h2>
              <p className="lead">{t.pricing.text}</p>
            </div>
            <Plans items={t.pricing.plans} note={t.pricing.note} onPick={setPlan} />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <Faq title={t.faq.title} items={t.faq.items} lang={lang} />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <LeadForm product="truegis" lang={lang} plans={t.pricing.plans.map((p) => p.name)} plan={plan} setPlan={setPlan} title={t.contact.title} text={t.contact.text} />
          </div>
        </section>
      </main>
      <Footer lang={lang} links={links} />
    </>
  );
}
