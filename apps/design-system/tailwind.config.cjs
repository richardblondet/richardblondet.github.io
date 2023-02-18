const {
    createGlobPatternsForDependencies,
} = require('@nxtensions/astro/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme')
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        join(
            __dirname,
            'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}'
        ),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        fontFamily: {
            sans: [
                'Inter',
                ...defaultTheme.fontFamily.sans
            ],
            mono: [
                'IBM Plex Mono',
                ...defaultTheme.fontFamily.mono
            ]
        },
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        code: {
                            'background-color': theme('colors.stone.200'),
                        }
                    }
                }
            })
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
