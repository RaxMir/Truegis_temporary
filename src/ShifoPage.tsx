import { useMemo, useState } from "react";
import { useLang, type Tr } from "./i18n";
import { SHIFO } from "./content/shifo24";
import { Cards, Faq, Feature, Footer, Header, LeadForm, Plans, Stats, Steps, useReveal } from "./components/Layout";
import { BookingScreen, CrmDesk, QueueScreen } from "./components/Screens";

const titles = Object.fromEntries(Object.entries(SHIFO).map(([k, v]) => [k, v.title])) as Tr<string>;
const descriptions = Object.fromEntries(Object.entries(SHIFO).map(([k, v]) => [k, v.description])) as Tr<string>;

export default function ShifoPage() {
  const { lang, setLang } = useLang(titles, descriptions);
  const t = SHIFO[lang];
  const [plan, setPlan] = useState("");
  useReveal();

  const links = useMemo(
    () => [
      { href: "#features", label: t.nav.features },
      { href: "#patients", label: t.nav.patients },
      { href: "#clinic", label: t.nav.clinic },
      { href: "#pricing", label: t.nav.pricing },
      { href: "#faq", label: t.nav.faq },
      { href: "/", label: t.nav.truegis },
    ],
    [t],
  );
  const visuals = [<BookingScreen lang={lang} key="b" />, <QueueScreen lang={lang} key="q" />, <CrmDesk lang={lang} key="c" />];
  const ids = ["patients", "queue", "clinic"];

  return (
    <div className="theme-shifo">
      <Header brand="Shifo24" logo="/img/shifo24-logo.png" homeHref="/shifo24/" links={links} cta={{ href: "#contact", label: t.cta }} lang={lang} setLang={setLang} />
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
                  {t.hero.primary}
                </a>
                <a className="btn btn-ghost" href="#features">
                  {t.hero.secondary} →
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
              <BookingScreen lang={lang} />
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <Stats items={t.stats} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>{t.pains.title}</h2>
              <p className="lead">{t.pains.text}</p>
            </div>
            <Cards items={t.pains.cards} />
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <h2>{t.features.title}</h2>
              <p className="lead">{t.features.text}</p>
            </div>
            <Cards items={t.features.cards} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            {t.blocks.map((b, i) => (
              <div id={ids[i]} key={b.title}>
                <Feature title={b.title} text={b.text} points={b.points} visual={visuals[i]} reverse={i % 2 === 1} />
              </div>
            ))}
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
            <LeadForm product="shifo24" lang={lang} plans={t.pricing.plans.map((p) => p.name)} plan={plan} setPlan={setPlan} title={t.contact.title} text={t.contact.text} />
          </div>
        </section>
      </main>
      <Footer lang={lang} links={links} />
    </div>
  );
}
