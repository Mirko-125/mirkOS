import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.image-rendering-pixelated': {
          imageRendering: 'pixelated',
          '-ms-interpolation-mode': 'nearest-neighbor',
        },
        '.image-rendering-crisp': {
          imageRendering: 'crisp-edges',
        },
      });
    }),
  ],
};

export default config;