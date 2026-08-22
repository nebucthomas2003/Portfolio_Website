import Reveal from '../components/Reveal';
import { profile } from '../data/content';
import './Contact.css';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    file: 'email.sh',
  },
  {
    label: 'WhatsApp',
    value: profile.whatsappDisplay,
    href: `https://wa.me/${profile.whatsapp.replace('+', '')}`,
    file: 'whatsapp.sh',
  },
  {
    label: 'LinkedIn',
    value: '/in/nebucthomas2003',
    href: profile.linkedin,
    file: 'linkedin.sh',
  },
  {
    label: 'Instagram',
    value: '@nebu.c.thomas',
    href: profile.instagram,
    file: 'instagram.sh',
  },
  {
    label: 'Graphia',
    value: '@nothing.graphia · photography & creative',
    href: profile.instagramGraphia,
    file: 'graphia.sh',
  },
];

export default function Contact() {
  return (
    <div className="page">
      <span className="eyebrow">get in touch</span>
      <h1 className="contact__title">Contact</h1>
      <p className="contact__intro">
        Reach out about <span className="accent-text">roles</span>,{' '}
        <span className="accent-text">collaborations</span>, or just to talk about software and
        coffee. I'm generally quickest to respond over email or WhatsApp.
      </p>

      <div className="contact__grid">
        {channels.map((channel, i) => (
          <Reveal delay={i * 70} key={channel.label}>
            <a
              href={channel.href}
              className="contact__card"
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="mono contact__card-file">
                <span className="path-accent">~/nebu/</span>
                {channel.file}
              </span>
              <span className="contact__card-label">{channel.label}</span>
              <span className="contact__card-value mono">{channel.value}</span>
              <span className="contact__card-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
