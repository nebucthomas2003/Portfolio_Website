import Tag from '../components/Tag';
import Reveal from '../components/Reveal';
import {
  education,
  experience,
  leadership,
  certifications,
  publications,
  languages,
} from '../data/content';
import './Experience.css';

export default function Experience() {
  return (
    <div className="page">
      <span className="eyebrow">full details</span>
      <h1 className="exp__title">Experience</h1>

      <section className="exp__section">
        <span className="section-label">
          <span className="path-accent">~/nebu/</span>experience.log
        </span>
        <div className="exp__timeline">
          {experience.map((role, i) => (
            <Reveal delay={i * 90} key={role.org}>
              <div className="exp__card">
                <div className="exp__entry-head">
                  <div>
                    <h3>{role.title}</h3>
                    <p className="exp__entry-org accent-text">{role.org}</p>
                  </div>
                  <span className="mono exp__entry-period">
                    {role.period}
                    {role.duration ? ` · ${role.duration}` : ''}
                  </span>
                </div>

                {role.problem && (
                  <div className="exp__block">
                    <span className="exp__block-label mono">problem</span>
                    <p>{role.problem}</p>
                  </div>
                )}
                {role.solution && (
                  <div className="exp__block">
                    <span className="exp__block-label mono">approach</span>
                    <p>{role.solution}</p>
                  </div>
                )}
                {role.role && (
                  <div className="exp__block">
                    <span className="exp__block-label mono">what I did</span>
                    <p>{role.role}</p>
                  </div>
                )}
                {role.learned && (
                  <div className="exp__block">
                    <span className="exp__block-label mono">learned</span>
                    <p>{role.learned}</p>
                  </div>
                )}
                {role.outcome && (
                  <div className="exp__block">
                    <span className="exp__block-label mono">outcome</span>
                    <p>{role.outcome}</p>
                  </div>
                )}

                <div className="exp__entry-tags">
                  {role.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>

                {role.link && (
                  <a href={role.link} target="_blank" rel="noopener noreferrer" className="exp__link mono">
                    {role.linkLabel} ↗
                  </a>
                )}

                {role.certificatePath && (
                  <div className="exp__certificate">
                    <span className="exp__block-label mono">certificate</span>
                    <img
                      src={role.certificatePath}
                      alt={`${role.org} certificate`}
                      className="exp__certificate-img"
                      onError={(e) => {
                        (e.currentTarget.parentElement as HTMLElement).classList.add(
                          'exp__certificate--empty',
                        );
                      }}
                    />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <Reveal>
        <section className="exp__section">
          <span className="section-label">
            <span className="path-accent">~/nebu/</span>education.md
          </span>
          <div className="exp__edu">
            <h3>{education.degree}</h3>
            <p className="exp__edu-institution">{education.institution}</p>
            <p className="exp__edu-detail mono">
              <span className="accent-text">{education.detail}</span> · {education.period}
            </p>
            <div className="exp__edu-roles">
              {education.roles.map((role) => (
                <span
                  key={role.title}
                  className={role.special ? 'exp__edu-role exp__edu-role--special' : 'exp__edu-role mono'}
                >
                  {role.title}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <hr className="divider" />

      <Reveal>
        <section className="exp__section">
          <span className="section-label">
            <span className="path-accent">~/nebu/</span>leadership.md
          </span>
          <ul className="exp__list">
            {leadership.map((item) => (
              <li key={item.title}>
                <span className="exp__list-title">{item.title}</span>
                <span className="exp__list-detail">{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <hr className="divider" />

      <div className="exp__grid">
        <Reveal>
          <section>
            <span className="section-label">
              <span className="path-accent">~/nebu/</span>certifications.md
            </span>
            <ul className="exp__list exp__list--simple">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={90}>
          <section>
            <span className="section-label">
              <span className="path-accent">~/nebu/</span>languages.md
            </span>
            <ul className="exp__list exp__list--simple">
              {languages.map((lang) => (
                <li key={lang.name}>
                  {lang.name} <span className="mono exp__lang-level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <hr className="divider" />

      <Reveal>
        <section className="exp__section">
          <span className="section-label">
            <span className="path-accent">~/nebu/</span>publications.md
          </span>
          {publications.map((pub) => (
            <div className="exp__pub" key={pub.doi}>
              <p className="exp__pub-title">{pub.title}</p>
              <p className="exp__pub-detail">{pub.detail}</p>
              <p className="mono exp__pub-meta">
                <span className="accent-text">{pub.venue}</span> · DOI: {pub.doi}
              </p>
              <a href={pub.doiLink} target="_blank" rel="noopener noreferrer" className="exp__link mono">
                View paper ↗
              </a>
            </div>
          ))}
        </section>
      </Reveal>
    </div>
  );
}
