import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, Github, Linkedin, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const EMAILJS_SERVICE_ID = 'service_o6i3dqk';
const EMAILJS_TEMPLATE_ID = 'template_x0dldwl';
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
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre o empresa.';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Por favor ingresa un correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Ingresa un formato de correo válido (ej. tu@correo.com).';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Por favor escribe tu mensaje o propuesta.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('sending');

    // Send payload matching all common EmailJS template variables
    const templateParams = {
      name: form.name.trim(),
      from_name: form.name.trim(),
      user_name: form.name.trim(),
      email: form.email.trim(),
      reply_to: form.email.trim(),
      from_email: form.email.trim(),
      user_email: form.email.trim(),
      message: form.message.trim(),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('EmailJS send error:', err);
      // Fallback try with sendForm if needed
      try {
        if (formRef.current) {
          await emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_PUBLIC_KEY
          );
          setStatus('success');
          setForm({ name: '', email: '', message: '' });
          setErrors({});
          return;
        }
      } catch (fallbackErr) {
        console.error('EmailJS fallback error:', fallbackErr);
      }
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

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {/* Hidden fields covering all possible EmailJS template variables */}
              <input type="hidden" name="from_name" value={form.name} />
              <input type="hidden" name="reply_to" value={form.email} />
              <input type="hidden" name="from_email" value={form.email} />

              {/* Input: Nombre */}
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre o empresa"
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? 'rgba(245, 158, 11, 0.6)' : 'var(--border-muted)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--amber)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name ? 'rgba(245, 158, 11, 0.6)' : 'var(--border-muted)';
                    e.target.style.boxShadow = 'none';
                  }}
                />

                {/* Custom Styled Tooltip */}
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'relative',
                        marginTop: '0.4rem',
                        background: 'rgba(28, 25, 23, 0.96)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), 0 0 10px rgba(245, 158, 11, 0.1)',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '7px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--amber)',
                      }}
                    >
                      <AlertCircle size={13} style={{ flexShrink: 0 }} />
                      <span>{errors.name}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input: Email */}
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Tu email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@ejemplo.com"
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? 'rgba(245, 158, 11, 0.6)' : 'var(--border-muted)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--amber)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email ? 'rgba(245, 158, 11, 0.6)' : 'var(--border-muted)';
                    e.target.style.boxShadow = 'none';
                  }}
                />

                {/* Custom Styled Tooltip */}
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'relative',
                        marginTop: '0.4rem',
                        background: 'rgba(28, 25, 23, 0.96)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), 0 0 10px rgba(245, 158, 11, 0.1)',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '7px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--amber)',
                      }}
                    >
                      <AlertCircle size={13} style={{ flexShrink: 0 }} />
                      <span>{errors.email}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input: Mensaje */}
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Tu mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Detalles de la propuesta o requerimiento..."
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    borderColor: errors.message ? 'rgba(245, 158, 11, 0.6)' : 'var(--border-muted)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--amber)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.message ? 'rgba(245, 158, 11, 0.6)' : 'var(--border-muted)';
                    e.target.style.boxShadow = 'none';
                  }}
                />

                {/* Custom Styled Tooltip */}
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'relative',
                        marginTop: '0.4rem',
                        background: 'rgba(28, 25, 23, 0.96)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), 0 0 10px rgba(245, 158, 11, 0.1)',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '7px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--amber)',
                      }}
                    >
                      <AlertCircle size={13} style={{ flexShrink: 0 }} />
                      <span>{errors.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22c55e', fontSize: '0.88rem', background: 'rgba(34, 197, 94, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.25)' }}>
                  <CheckCircle2 size={16} /> ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.88rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
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