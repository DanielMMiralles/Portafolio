import { useRef, useCallback } from 'react';

/**
 * useSplitText — Splits text content into individual character/word spans.
 * Free alternative to GSAP SplitText Club plugin.
 *
 * @param {'chars' | 'words' | 'lines'} mode - split mode
 * @returns { splitRef, getSplitElements }
 */
const useSplitText = (mode = 'chars') => {
  const splitRef = useRef(null);

  const getSplitElements = useCallback(() => {
    const el = splitRef.current;
    if (!el) return [];

    const text = el.textContent || '';
    el.innerHTML = '';
    el.style.overflow = 'hidden';

    if (mode === 'chars') {
      return text.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.overflow = 'hidden';
        el.appendChild(span);
        return span;
      });
    }

    if (mode === 'words') {
      return text.split(' ').map((word, i, arr) => {
        const wrapper = document.createElement('span');
        wrapper.style.display = 'inline-block';
        wrapper.style.overflow = 'hidden';
        wrapper.style.verticalAlign = 'bottom';

        const inner = document.createElement('span');
        inner.textContent = word;
        inner.style.display = 'inline-block';

        wrapper.appendChild(inner);
        el.appendChild(wrapper);
        if (i < arr.length - 1) el.appendChild(document.createTextNode(' '));

        return inner;
      });
    }

    if (mode === 'lines') {
      // Simple line split by wrapping all in a div and measuring
      const words = text.split(' ');
      const spans = words.map((word, i, arr) => {
        const span = document.createElement('span');
        span.textContent = word + (i < arr.length - 1 ? ' ' : '');
        span.style.display = 'inline';
        el.appendChild(span);
        return span;
      });
      return spans;
    }

    return [];
  }, [mode]);

  return { splitRef, getSplitElements };
};

export default useSplitText;
