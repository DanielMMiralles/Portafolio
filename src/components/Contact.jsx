import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, Github, Linkedin, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const EMAILJS_SERVICE_ID = 'service_o6i3dqk';
const EMAILJS_TEMPLATE_ID = 'template_ag1fdo9';
const EMAILJS_PUBLIC_KEY = 'Dzy9uXyL9kHcErsDG';

const SOCIALS = [
  {
    name: 'Email',
    url: 'mailto:damm172004@gmail.com',
    icon: Mail,
    color: '#EA4335',
    bg: 'rgba(234, 67, 53, 0.14)',
    border: '#EA4335',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+584248677833',
    icon: WhatsAppIcon,
    color: '#25D366',
    bg: 'rgba(37, 211, 102, 0.14)',
    border: '#25D366',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-mata-33112a254/',
    icon: Linkedin,
    color: '#0A66C2',
    bg: 'rgba(10, 102, 194, 0.14)',
    border: '#0A66C2',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/DanielMMiralles',
    icon: Github,
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.4)',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/daniel.a.mm/',
    icon: Instagram,
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.14)',
    border: '#E1306C',
  },
];

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--bg-main)',
  border: '1px solid var(--border-muted)',
  borderRadius: '10px',
  color: 'var(--text-primary)',
  fontFamily: 'inherit',
  fontSize: '0.92rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">// transmisión & contacto</div>
          <h2 className="section-title">Iniciemos un Nuevo Proyecto</h2>
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            Abierto a contrataciones remotas, consultoría técnica y desarrollo de soluciones basadas en IA y arquitecturas modernas.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '2.5rem', alignItems: 'start' }} className="contact-grid">
          {/* Left: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="warm-card"
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <span className="status-dot" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--amber)' }}>
                Disponible
              </span>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Canales Directos
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Puedes escribirme directamente por cualquiera de estos medios o a través del formulario:
            </p>

            {/* Social Icons Grid with App Brand Colors */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="social-icon"
                    style={{
                      width: '48px',
                      height: '48px',
                      transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.borderColor = s.border;
                      e.currentTarget.style.backgroundColor = s.bg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.borderColor = 'var(--border-muted)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={21} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="warm-card"
            style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Enviar Mensaje
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Tu nombre
                </label>
                <input type="text" name="from_name" value={form.name} onChange={handleChange} required placeholder="Nombre o empresa" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--amber)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-muted)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Tu email
                </label>
                <input type="email" name="reply_to" value={form.email} onChange={handleChange} required placeholder="email@ejemplo.com" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--amber)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-muted)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Tu mensaje
                </label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} required placeholder="Detalles de la propuesta o requerimiento..." style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--amber)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-muted)')}
                />
              </div>

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22c55e', fontSize: '0.88rem', background: 'rgba(34, 197, 94, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                  <CheckCircle2 size={16} /> ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.88rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                  <AlertCircle size={16} /> Error al enviar. Por favor contáctame por WhatsApp o email directo.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn-amber"
                style={{ justifyContent: 'center', width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Send size={16} />
                <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;