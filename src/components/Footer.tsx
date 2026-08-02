import { LuGithub, LuLinkedin, LuTwitter } from 'react-icons/lu';

const socialLinks = [
  { href: 'https://github.com/indra-182', icon: LuGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mahadiindra182/', icon: LuLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/vwxmz', icon: LuTwitter, label: 'Twitter' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-shell footer__shell">
        <p>© {year} Mahadi Indra Manurung. Built with care.</p>
        <nav className="footer__links" aria-label="Social links">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <Icon aria-hidden="true" size={14} /> <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
