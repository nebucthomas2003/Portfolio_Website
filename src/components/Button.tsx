import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  download?: boolean;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = 'ghost',
  download = false,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn btn--${variant}`}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
