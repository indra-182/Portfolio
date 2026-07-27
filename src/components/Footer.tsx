import { LuGithub, LuTwitter, LuLinkedin } from 'react-icons/lu';

const socialLinks = [
  { href: 'https://github.com/indra-182', icon: LuGithub, label: 'GitHub' },
  { href: 'https://twitter.com/vwxmz', icon: LuTwitter, label: 'Twitter' },
  {
    href: 'https://www.linkedin.com/in/mahadiindra182/',
    icon: LuLinkedin,
    label: 'LinkedIn',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-(--container) flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-tertiary">&copy; {year} Indra. All rights reserved.</p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded border border-border text-text-tertiary transition-colors hover:border-text-secondary hover:bg-surface-hover hover:text-text"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
