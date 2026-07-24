import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Linkedin, Github, Mail, Phone, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionHeader } from './ScrollReveal';

/* ─── Replace these with your real EmailJS IDs ─── */
const EMAILJS_SERVICE_ID  = 'service_o6i3dqk';
const EMAILJS_TEMPLATE_ID = 'template_ag1fdo9';
const EMAILJS_PUBLIC_KEY  = 'Dzy9uXyL9kHcErsDG';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/daniel-mata-33112a254/',
    icon: <Linkedin size={20} />,
    color: '#0A66C2',
    glow: 'rgba(10,102,194,0.3)',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/DanielMMiralles',
    icon: <Github size={20} />,
    color: '#EAE2B7',
    glow: 'rgba(234,226,183,0.2)',
  },
  {
    name: 'Email',
    url: 'mailto:damm172004@gmail.com',
    icon: <Mail size={20} />,
    color: 'var(--ember-crimson)',
    glow: 'var(--glow-red)',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+584248677833',
    icon: <Phone size={20} />,
    color: '#25D366',
    glow: 'rgba(37,211,102,0.25)',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/daniel.a.mm/',
    icon: <Instagram size={20} />,
    color: '#E1306C',
    glow: 'rgba(225,48,108,0.25)',
  },
];

/* ── Social Icon ─────────────────────────────── */
const SocialIcon = ({ item, index }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={item.name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
    whileHover={{ y: -5, boxShadow: `0 8px 20px ${item.glow}` }}
    whileTap={{ scale: 0.92 }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      padding: '1rem 1.25rem',
      borderRadius: '14px',
      background: 'var(--ember-card)',
      border: '1px solid var(--border-subtle)',
      color: item.color,
      textDecoration: 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      cursor: 'none',
      minWidth: '80px',
    }}
  >
    {item.icon}
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.65rem',
      color: 'var(--ember-muted)',
      letterSpacing: '0.04em',
    }}>{item.name}</span>
  </motion.a>
);

/* ── Floating Label Input ────────────────────── */
const FloatInput = ({ id, label, type = 'text', value, onChange, required, multiline = false }) => {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;

  const baseStyle = {
    width: '100%',
    background: 'rgba(31,8,8,0.8)',
    border: `1px solid ${focused ? 'var(--ember-crimson)' : 'var(--border-subtle)'}`,
    borderRadius: '10px',
    padding: multiline ? '1.5rem 1rem 0.75rem' : '1.5rem 1rem 0.5rem',
    color: 'var(--ember-ash)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    resize: multiline ? 'vertical' : 'none',
    minHeight: multiline ? '130px' : 'auto',
    boxShadow: focused ? '0 0 0 3px var(--glow-red)' : 'none',
    transition: 'border-color 0.25s, box-shadow 0.25s',
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <label
        htmlFor={id}
        style={{
          position: 'absolute',
          left: '1rem',
          top: raised ? '0.45rem' : '50%',
          transform: multiline ? (raised ? 'none' : 'translateY(80%)') : (raised ? 'none' : 'translateY(-50%)'),
          fontFamily: 'var(--font-body)',
          fontSize: raised ? '0.68rem' : '0.9rem',
          color: focused ? 'var(--ember-orange)' : 'var(--ember-muted)',
          pointerEvents: 'none',
          transition: 'all 0.2s',
          letterSpacing: raised ? '0.05em' : 0,
          fontWeight: raised ? 500 : 400,
          zIndex: 1,
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={baseStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={baseStyle}
        />
      )}
    </div>
  );
};

/* ── Contact ─────────────────────────────────── */
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 1.5rem',
        background: '#0A0000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Mesh bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(193,18,31,0.08) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          eyebrow="✦ Trabajemos juntos ✦"
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente o buscas incorporar a un desarrollador a tu equipo? Hablemos."
        />

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(247,127,0,0.08)',
            border: '1px solid rgba(247,127,0,0.3)',
            borderRadius: '999px',
            padding: '0.5rem 1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--ember-amber)',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--ember-orange)',
              animation: 'available-pulse 2s infinite',
            }} />
            Disponible para nuevos proyectos y oportunidades
          </div>
        </motion.div>

        {/* 2-col layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--ember-ash)',
              marginBottom: '1.5rem',
            }}>Envíame un mensaje</h3>

            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <FloatInput id="name"    label="Tu nombre"   value={form.name}    onChange={handleChange('name')}    required name="from_name" />
              <FloatInput id="email"   label="Tu email"    type="email"  value={form.email}   onChange={handleChange('email')}   required name="reply_to" />
              <FloatInput id="message" label="Tu mensaje"  value={form.message} onChange={handleChange('message')}  required multiline name="message" />

              {/* Status messages */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'var(--ember-amber)', fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                  background: 'rgba(252,191,73,0.08)', border: '1px solid rgba(252,191,73,0.3)',
                  borderRadius: '8px', padding: '0.75rem 1rem',
                }}>
                  <CheckCircle size={16} /> ¡Mensaje enviado! Te responderé pronto.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'var(--ember-crimson)', fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                  background: 'rgba(193,18,31,0.08)', border: '1px solid rgba(193,18,31,0.3)',
                  borderRadius: '8px', padding: '0.75rem 1rem',
                }}>
                  <AlertCircle size={16} /> Error al enviar. Configura EmailJS o contáctame directamente.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSending}
                className="btn-ember"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  fontSize: '0.95rem', opacity: isSending ? 0.7 : 1,
                }}
                whileHover={!isSending ? { scale: 1.03, y: -2 } : {}}
                whileTap={!isSending ? { scale: 0.97 } : {}}
              >
                <Send size={16} />
                {isSending ? 'Enviando...' : 'Enviar mensaje'}
              </motion.button>
            </form>
          </motion.div>

          {/* Right — Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--ember-ash)',
              marginBottom: '0.75rem',
            }}>¿Hablamos?</h3>
            <p style={{
              color: 'var(--ember-muted)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              Estoy abierto a colaboraciones, proyectos freelance y oportunidades laborales. 
              No dudes en escribirme — habitualmente respondo en menos de 24 horas.
            </p>

            {/* Social icons grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {socialLinks.map((item, i) => (
                <SocialIcon key={item.name} item={item} index={i} />
              ))}
            </div>

            {/* Direct email */}
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: 'var(--ember-card)',
              border: '1px solid var(--border-ember)',
              borderRadius: '12px',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ember-muted)', marginBottom: '4px', letterSpacing: '0.05em' }}>EMAIL DIRECTO</p>
              <a
                href="mailto:damm172004@gmail.com"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  color: 'var(--ember-orange)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                damm172004@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;