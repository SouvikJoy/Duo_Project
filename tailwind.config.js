import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'media', // or 'media'
  theme: {
    extend: {
      screens: {
        screens: {
          light: { raw: '(prefers-color-scheme: light)' },
          dark: { raw: '(prefers-color-scheme: dark)' }
        }
      },
      colors: {
        color_header: 'hsla(206, 10%, 14%, 1.0)',
        dark_body: 'hsla(0, 0%, 0%, 0.7)'
      },
      fontFamily: {
        uirounded: ['SF Pro Rounded', 'sans-serif']
      }
    }
  },
  shortcuts: {

  },
  plugins: []
});
