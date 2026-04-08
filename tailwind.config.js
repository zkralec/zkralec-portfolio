/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        canvas: '#f7faff',
        mist: '#edf3fb',
        ink: '#0f172a',
        line: '#d9e5f3',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59, 130, 246, 0.14), 0 18px 60px rgba(37, 99, 235, 0.14)',
        panel: '0 24px 60px rgba(15, 23, 42, 0.08)',
        float: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'page-glow':
          'radial-gradient(circle at top, rgba(59, 130, 246, 0.10), transparent 28%), radial-gradient(circle at 82% 18%, rgba(96, 165, 250, 0.09), transparent 18%), linear-gradient(180deg, #fbfdff 0%, #f6f9fe 46%, #f2f6fc 100%)',
      },
    },
  },
  plugins: [],
};
