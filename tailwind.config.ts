import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ['class'],
  content: ['./{src,public}/**/*.{ts,tsx,mdx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // For "glowing images" blog post
        glow: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(0.98)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant(
        'non-rehype-code',
        '& code:not([data-rehype-pretty-code-figure] *)',
      );

      addVariant(
        'rehype-code-title',
        '& figcaption[data-rehype-pretty-code-title]',
      );

      addVariant(
        'rehype-code-with-title',
        '& figcaption[data-rehype-pretty-code-title] + pre',
      );
    }),
    plugin(({ matchUtilities, theme }) => {
      const cssVariableKey = '--fixed-line-height';

      matchUtilities(
        {
          'fixed-leading': (value: string) => {
            let lineHeight = value;

            // Some `lineHeight` values does not end with `rem` like `normal: 1.5`.
            // To handle these values, we add `em` at the end of them
            // to calculate `lineHeight * fontSize` value of the current element.
            if (!lineHeight.endsWith('rem')) {
              lineHeight = `${lineHeight}em`;
            }

            return {
              [cssVariableKey]: lineHeight,
              lineHeight,
            };
          },
        },
        {
          values: theme('lineHeight'),
        },
      );

      matchUtilities(
        {
          'fixed-line-clamp': (val) => {
            return {
              minHeight: `calc(var(${cssVariableKey}) * ${val})`,
              // For line clamp
              overflow: 'hidden',
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': `${val}`,
            };
          },
        },
        {
          values: {
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
          },
        },
      );
    }),
  ],
} satisfies Config;

export default config;
