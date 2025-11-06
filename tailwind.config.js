/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        },
        accent: {
          green: '#006CA6', // Primary color
          hover: '#0075C9', // Hover/Highlight
          border: '#E2E8F0', // Divider & borders
        },
      },
      borderRadius: {
        card: '16px',
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'Noto Sans', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        headline: '700',
        body: '400',
        'body-medium': '500',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
