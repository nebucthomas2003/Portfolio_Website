import Tag from '../components/Tag';
import Reveal from '../components/Reveal';
import { roadmapProjects } from '../data/content';
import './Projects.css';

export default function Projects() {
  return (
    <div className="page">
      <span className="eyebrow">build log</span>
      <h1 className="proj__title">Projects</h1>
      <p className="proj__intro">
        A running roadmap of what I've shipped, when, and what it took to build.
      </p>

      <div className="proj__timeline">
        <div className="proj__spine" aria-hidden="true" />

        {roadmapProjects.map((project, i) => (
          <Reveal delay={i * 70} key={project.name} className="proj__row">
            <div className="proj__node" aria-hidden="true" />
            <div className="proj__card">
              <div className="proj__card-head">
                <div>
                  <h3>{project.name}</h3>
                  <span className="mono proj__field">{project.field}</span>
                </div>
                <span className="mono proj__date">{project.date}</span>
              </div>

              <p className="proj__summary">{project.summary}</p>

              <div className="proj__tags">
                {project.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj__link mono"
                >
                  {project.linkLabel} ↗
                </a>
              ) : (
                <span className="proj__link proj__link--pending mono">repo not public yet</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
