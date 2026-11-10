import { useMemo } from "react";
import { useLang, type Tr } from "./i18n";
import { CONTACTS } from "./content/common";
import { TRUEGIS } from "./content/truegis";
import { Clients, Contact, Footer, Header, Kicker, Reveal, Showcase, Statements, Stats, useReveal } from "./components/Layout";
import { Icon } from "./components/Icons";
import { Scene3D } from "./components/Scene3D";
import { AiSearchScreen, BusinessScreen, PlaceScreen } from "./components/Screens";

const titles = Object.fromEntries(Object.entries(TRUEGIS).map(([k, v]) => [k, v.title])) as Tr<string>;
const descriptions = Object.fromEntries(Object.entries(TRUEGIS).map(([k, v]) => [k, v.description])) as Tr<string>;

export default function TrueGisPage() {
  const { lang, setLang } = useLang(titles, descriptions);
  const t = TRUEGIS[lang];
  useReveal();

  const links = useMemo(
    () => [
      { href: "#ecosystem", label: t.nav.ecosystem },
      { href: "#shifo24", label: t.nav.shifo },
      { href: "#inside", label: t.nav.inside },
      { href: "#contact", label: t.nav.contact },
    ],
    [t],
  );

  return (
    <>
      <Header brand="TrueGis" logo="/img/truegis-icon.png" homeHref="/" links={links} cta={{ href: "#contact", label: t.cta }} lang={lang} setLang={setLang} />
      <main>
        <section className="hero">
          <div className="hero__bg" aria-hidden />
          <div className="container hero__grid">
            <div className="hero__text">
              <Kicker>{t.hero.kicker}</Kicker>
              <h1 className="display-1">
                {t.hero.h1}
                <br />
                <span className="accent">{t.hero.h1accent}</span>
              </h1>
              <p className="lead">{t.hero.text}</p>
              <div className="hero__ctas">
                <a className="btn btn-primary btn-lg" href="#contact">
                  {t.hero.primary}
                  <Icon name="arrow" size={18} />
                </a>
                <a className="btn btn-ghost btn-lg" href={CONTACTS.bot} target="_blank" rel="noreferrer">
                  <Icon name="telegram" size={18} />
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <Scene3D scene="truegis" poster="/img/3d-truegis.webp" alt="TrueGis" className="hero__scene" />
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <Clients title={t.clients} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <h2 className="display-2 section-title">{t.doing.title}</h2>
            </Reveal>
            <Statements items={t.doing.items} />
          </div>
        </section>

        <section className="section" id="ecosystem">
          <div className="container">
            <Reveal className="section-head">
              <Kicker>{t.eco.kicker}</Kicker>
              <h2 className="display-2">{t.eco.title}</h2>
              <p className="lead">{t.eco.text}</p>
            </Reveal>
            <div className="eco">
              <Reveal className="eco__core">
                <img src="/img/truegis-icon.png" alt="" width={56} height={56} />
                <div>
                  <b>{t.eco.core}</b>
                  <span>{t.eco.coreText}</span>
                </div>
              </Reveal>
              <div className="eco__rail" aria-hidden />
              <div className="eco__nodes">
                {t.eco.nodes.map((n, i) => {
                  const child = n.icon === "heart";
                  return (
                    <Reveal className={`eco__node ${child ? "eco__node--child" : ""}`} key={n.name} delay={i * 90}>
                      {child && <span className="eco__tag">{t.eco.childTag}</span>}
                      <span className="eco__icon">
                        <Icon name={n.icon} size={24} />
                      </span>
                      <h3>{n.name}</h3>
                      <p>{n.text}</p>
                      <ul>
                        {n.items.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                      {child && (
                        <a className="eco__link" href="/shifo24/">
                          shifo24 <Icon name="arrow" size={16} />
                        </a>
                      )}
                    </Reveal>
                  );
                })}
                <Reveal className="eco__node eco__node--next" delay={400}>
                  <span className="eco__icon">
                    <Icon name="plus" size={24} />
                  </span>
                  <h3>{t.eco.next.name}</h3>
                  <p>{t.eco.next.text}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="shifo24">
          <div className="container">
            <Reveal className="spotlight theme-shifo">
              <div className="spotlight__text">
                <span className="spotlight__brand">
                  <img src="/img/shifo24-logo.png" alt="" width={36} height={33} />
                  Shifo24
                </span>
                <Kicker>{t.shifo.kicker}</Kicker>
                <h2 className="display-2">{t.shifo.title}</h2>
                <p className="lead">{t.shifo.text}</p>
                <div className="spotlight__facts">
                  {t.shifo.facts.map((f) => (
                    <div key={f.label}>
                      <b>{f.value}</b>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
                <a className="btn btn-primary btn-lg" href="/shifo24/">
                  {t.shifo.cta}
                  <Icon name="arrow" size={18} />
                </a>
              </div>
              <Scene3D scene="shifo24" poster="/img/3d-shifo24.webp" alt="Shifo24" className="spotlight__scene" />
            </Reveal>
          </div>
        </section>

        <section className="section" id="inside">
          <div className="container">
            <Reveal className="section-head">
              <Kicker>{t.inside.kicker}</Kicker>
              <h2 className="display-2">{t.inside.title}</h2>
              <p className="lead">{t.inside.text}</p>
            </Reveal>
            <Showcase screens={[<PlaceScreen lang={lang} key="p" />, <AiSearchScreen lang={lang} key="a" />, <BusinessScreen lang={lang} key="b" />]} captions={[t.inside.captions[1], t.inside.captions[0], t.inside.captions[2]]} />
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <Stats items={t.stats} />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <Contact product="truegis" lang={lang} title={t.contact.title} text={t.contact.text} />
          </div>
        </section>
      </main>
      <Footer lang={lang} links={links} />
    </>
  );
}
