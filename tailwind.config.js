/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:       'var(--color-bg)',
        surface:  'var(--color-surface)',
        border:   'var(--color-border)',
        accent:   'var(--color-accent)',
        accent2:  'var(--color-accent2)',
        textmain: 'var(--color-textmain)',
        muted:    'var(--color-muted)',
        danger:   'var(--color-danger)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
