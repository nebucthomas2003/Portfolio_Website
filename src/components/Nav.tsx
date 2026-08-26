import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Nav.css';

const links = [
  { to: '/', label: 'home' },
  { to: '/experience', label: 'experience' },
  { to: '/projects', label: 'projects' },
  { to: '/contact', label: 'contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [typeof window !== 'undefined' ? window.location.hash : '']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`top-nav ${scrolled ? 'top-nav--scrolled' : ''}`}>
      <div className="top-nav__inner">
        <NavLink to="/" className="top-nav__brand" onClick={() => setOpen(false)}>
          <span className="top-nav__brand-signature">Portfolio</span>
          <span className="top-nav__brand-sub mono"> By Nebu Chirackal Thomas</span>
        </NavLink>

        <ul className="top-nav__list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `top-nav__link mono ${isActive ? 'top-nav__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle mono"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-toggle__bar ${open ? 'nav-toggle__bar--open' : ''}`} />
        </button>
      </div>

      <div className={`top-nav__mobile ${open ? 'top-nav__mobile--open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `top-nav__mobile-link mono ${isActive ? 'top-nav__mobile-link--active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
