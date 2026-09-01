import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const FOOTER_SOCIALS = [
  {
    href: 'https://github.com/DanielMMiralles',
    icon: <Github size={18} />,
    label: 'GitHub',
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.4)',
  },
  {
    href: 'https://www.linkedin.com/in/daniel-mata-33112a254/',
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    color: '#0A66C2',
    bg: 'rgba(10, 102, 194, 0.14)',
    border: '#0A66C2',
  },
  {
    href: 'https://wa.me/+584248677833',
    icon: <WhatsAppIcon size={18} />,
    label: 'WhatsApp',
    color: '#25D366',
    bg: 'rgba(37, 211, 102, 0.14)',
    border: '#25D366',
  },
  {
    href: 'mailto:damm172004@gmail.com',
    icon: <Mail size={18} />,
    label: 'Email',
    color: '#EA4335',
    bg: 'rgba(234, 67, 53, 0.14)',
    border: '#EA4335',
  },
  {
    href: 'https://www.instagram.com/daniel.a.mm/',
    icon: <Instagram size={18} />,
    label: 'Instagram',
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.14)',
    border: '#E1306C',
  },
];

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0 2.5rem', borderTop: '1px solid var(--border-muted)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.85rem', color: 'var(--amber)' }}>D4MM</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Daniel M. Miralles</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Ingeniero de Sistemas · © {new Date().getFullYear()}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {FOOTER_SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="social-icon"
              style={{
                width: '36px',
                height: '36px',
                transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = s.color;
                e.currentTarget.style.borderColor = s.border;
                e.currentTarget.style.backgroundColor = s.bg;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border-muted)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {s.icon}
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="social-icon"
            style={{ width: '36px', height: '36px', marginLeft: '0.5rem' }}
            title="Volver arriba"
            aria-label="Volver arriba"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
