import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/anomalyco', icon: FaGithub, label: 'GitHub' },
  { href: 'https://twitter.com/anomalyco', icon: FaXTwitter, label: 'Twitter' },
  { href: 'https://linkedin.com/in/anomalyco', icon: FaLinkedinIn, label: 'LinkedIn' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full px-6 py-8"
      style={{
        background: 'var(--neo-bg)',
        borderTop: '3px solid #000',
        boxShadow: '0 -3px 0px 0px #000',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm font-bold uppercase" style={{ color: 'var(--neo-text)' }}>
          &copy; {year} Indra. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="neo-btn"
              style={{ padding: '8px', background: 'var(--neo-bg)' }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
