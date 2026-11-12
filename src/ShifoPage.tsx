import { useMemo } from "react";
import { useLang, type Tr } from "./i18n";
import { SHIFO } from "./content/shifo24";
import { Contact, Footer, Header, Kicker, Reveal, Showcase, Statements, Stats, Steps, useReveal } from "./components/Layout";
import { Icon } from "./components/Icons";
import { Scene3D } from "./components/Scene3D";
import { BookingScreen, CrmDesk, QueueScreen } from "./components/Screens";

const titles = Object.fromEntries(Object.entries(SHIFO).map(([k, v]) => [k, v.title])) as Tr<string>;
const descriptions = Object.fromEntries(Object.entries(SHIFO).map(([k, v]) => [k, v.description])) as Tr<string>;

export default function ShifoPage() {
  const { lang, setLang } = useLang(titles, descriptions);
  const t = SHIFO[lang];
  useReveal();

  const links = useMemo(
    () => [
      { href: "#features", label: t.nav.features },
      { href: "#inside", label: t.nav.inside },
      { href: "#how", label: t.nav.how },
      { href: "#contact", label: t.nav.contact },
    ],
    [t],
  );

  return (
    <div className="theme-shifo">
      <Header brand="Shifo24" logo="/img/shifo24-logo.png" homeHref="/shifo24/" links={links} cta={{ href: "#contact", label: t.cta }} lang={lang} setLang={setLang} />
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
                <a className="btn btn-ghost btn-lg" href="#features">
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <Scene3D scene="shifo24" poster="/img/3d-shifo24.webp" alt="Shifo24" className="hero__scene" />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <h2 className="display-2 section-title">{t.change.title}</h2>
            </Reveal>
            <Statements items={t.change.items} />
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <Reveal className="section-head">
              <Kicker>{t.features.kicker}</Kicker>
              <h2 className="display-2">{t.features.title}</h2>
              <p className="lead">{t.features.text}</p>
            </Reveal>
            <div className="features">
              {t.features.items.map((f, i) => (
                <Reveal className="feature-item" key={f.title} delay={(i % 3) * 80}>
                  <span className="feature-item__icon">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="inside">
          <div className="container">
            <Reveal className="section-head">
              <Kicker>{t.inside.kicker}</Kicker>
              <h2 className="display-2">{t.inside.title}</h2>
              <p className="lead">{t.inside.text}</p>
            </Reveal>
            <Showcase screens={[<BookingScreen lang={lang} key="b" />, <CrmDesk lang={lang} key="c" />, <QueueScreen lang={lang} key="q" />]} captions={[t.inside.captions[0], t.inside.captions[2], t.inside.captions[1]]} />
          </div>
        </section>

        {/* TrueGis — отдельная система в своих (синих) цветах: как она приводит клинике новых пациентов */}
        <section className="section" id="truegis">
          <div className="container">
            <Reveal className="tg-panel theme-truegis">
              <div className="tg-panel__text">
                <span className="tg-panel__brand">
                  <img src="/img/truegis-icon.png" alt="" width={36} height={36} />
                  TrueGis
                </span>
                <Kicker>{t.truegis.kicker}</Kicker>
                <h2 className="display-2">{t.truegis.title}</h2>
                <p className="lead">{t.truegis.text}</p>
                <div className="tg-panel__points">
                  {t.truegis.points.map((p) => (
                    <div className="tg-point" key={p.title}>
                      <span className="tg-point__icon">
                        <Icon name={p.icon} size={20} />
                      </span>
                      <div>
                        <h3>{p.title}</h3>
                        <p>{p.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tg-panel__stats">
                  {t.truegis.stats.map((x) => (
                    <div key={x.label}>
                      <b>{x.value}</b>
                      <span>{x.label}</span>
                    </div>
                  ))}
                </div>
                <div className="tg-panel__ctas">
                  <a className="btn btn-primary btn-lg" href="#contact">
                    {t.truegis.cta}
                    <Icon name="arrow" size={18} />
                  </a>
                  <a className="tg-panel__more" href="/">
                    {t.truegis.more}
                    <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
              <Scene3D scene="truegis" poster="/img/3d-truegis.webp" posterLight="/img/3d-truegis-light.webp" alt="TrueGis" className="tg-panel__scene" />
            </Reveal>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <Reveal>
              <h2 className="display-2 section-title">{t.steps.title}</h2>
            </Reveal>
            <Steps items={t.steps.items} />
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <Stats items={t.stats} />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <Contact product="shifo24" lang={lang} title={t.contact.title} text={t.contact.text} steps={t.contact.steps} />
          </div>
        </section>
      </main>
      <Footer lang={lang} links={links} brand="shifo24" />
    </div>
  );
}
