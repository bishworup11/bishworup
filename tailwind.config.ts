import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        head: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['EB Garamond', 'Georgia', 'serif'],
      },
      colors: {
        purple: 'oklch(65% 0.22 285)',
        blue: 'oklch(65% 0.22 240)',
        teal: 'oklch(65% 0.22 190)',
      },
      borderRadius: {
        card: '16px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite alternate',
        spin: 'spin 25s linear infinite',
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse 0.8s ease-in-out infinite alternate',
        fadeUp: 'fadeUp 0.7s var(--ease) forwards',
        scrollLine: 'scrollLine 2s ease-out forwards',
      },
      keyframes: {
        drift: {
          from: { transform: 'translate(0, 0) scale(1)' },
          to: { transform: 'translate(40px, 30px) scale(1.1)' },
        },
        blink: { '50%': { opacity: '0' } },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: { to: { transform: 'scaleX(1)' } },
      },
    },
  },
  plugins: [],
} satisfies Config
