/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:       '#0a0a0f',
        surface:  '#111118',
        border:   '#1e1e2e',
        accent:   '#00d4aa',
        accent2:  '#6c63ff',
        textmain: '#e8e8f0',
        muted:    '#6b6b80',
        danger:   '#ff6b6b',
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
