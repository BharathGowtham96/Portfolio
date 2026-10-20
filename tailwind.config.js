/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  future: { hoverOnlyWhenSupported: true }, // no sticky hover states on touch devices
  theme: {
    extend: {
      colors: {
        canvas: '#0F172A',
        surface: '#1E293B',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        line: '#2A3A50',
        accent: { DEFAULT: '#38BDF8', soft: '#12324A' },
        gold: '#34D399',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
