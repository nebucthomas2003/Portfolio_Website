import Button from '../components/Button';
import Tag from '../components/Tag';
import Reveal from '../components/Reveal';
import { profile, skills, homeHighlights, identityQuote } from '../data/content';
import './Home.css';

export default function Home() {
  return (
    <div className="page home">
      <span className="eyebrow">{profile.role.toLowerCase()} · {profile.location.toLowerCase()}</span>

      <div className="home__hero">
        <div className="home__hero-text">
          <h1 className="home__name">
            Nebu Chirackal <span className="home__name-accent">Thomas</span>
          </h1>
          <p className="home__tagline mono">
            <span className="path-accent">$</span>{' '}
            <span className="typed">whoami</span>
            <span className="cursor">_</span>
          </p>
          <p className="home__bio">
            I'm a <span className="accent-text">software developer</span> from Pathanamthitta,
            Kerala, India, building web applications and exploring{' '}
            <span className="accent-text">applied ML</span>. I recently completed my B.E. in
            Computer Science and Engineering with First Class Distinction, and I'm currently
            pursuing an <span className="accent-text">MSc in Germany</span> for Winter 2026/27,
            while exploring full-stack and ML/AI roles across India and Europe in parallel.
          </p>

          <div className="home__actions">
            <Button href={`mailto:${profile.email}`} variant="primary">
              Hire me
            </Button>
            <Button href={profile.resumePath} download>
              Download résumé
            </Button>
            <Button href={profile.github} external>
              GitHub
            </Button>
            <Button href={profile.linkedin} external>
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="home__photo-frame">
          <div className="home__photo-bounce">
            <img
              src={profile.photoPath}
              alt={profile.name}
              className="home__photo"
              onError={(e) => {
                (e.currentTarget.parentElement?.parentElement as HTMLElement).classList.add(
                  'home__photo-frame--empty',
                );
              }}
            />
          </div>
          <span className="home__photo-caption mono">./photo.jpg</span>
        </div>
      </div>

      <hr className="divider" />

      <section>
        <span className="section-label">
          <span className="path-accent">~/nebu/</span>whoami.md
        </span>
        <Reveal>
          <p className="home__quote">
            <span className="home__quote-mark">“</span>
            {identityQuote}
            <span className="home__quote-mark home__quote-mark--end">”</span>
          </p>
        </Reveal>
      </section>

      <hr className="divider" />

      <Reveal>
        <section>
          <span className="section-label">
            <span className="path-accent">~/nebu/</span>skills.json
          </span>
          <div className="marquee">
            <div className="marquee__track">
              {[...skills, ...skills].map((skill, i) => (
                <Tag key={`${skill}-${i}`}>{skill}</Tag>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <hr className="divider" />

      <section>
        <span className="section-label">
          <span className="path-accent">~/nebu/</span>status.log
        </span>
        <div className="home__highlights">
          {homeHighlights.map((item, i) => (
            <Reveal delay={i * 90} key={`${item.label}-${i}`}>
              <div className="home__highlight">
                <span className="home__highlight-label mono">{item.label}</span>
                <p className="home__highlight-value">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
