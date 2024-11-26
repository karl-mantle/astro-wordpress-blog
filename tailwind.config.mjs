/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'black': '#000000',
			'white': '#ffffff',
			'theme': {
				50: '#fafafa',
				100: '#f5f5f5', // dark:focus/hover/active text
				200: '#e5e5e5', // dark:normal text / background
				300: '#d4d4d4', // accent
				400: '#a3a3a3',
				500: '#737373',
				600: '#525252',
				700: '#404040', // dark:accent
				800: '#262626', // normal text / dark:background
				900: '#171717', // focus/hover/active text
				950: '#0a0a0a',
			},
		},
		extend: {
			typography: ({ theme }) => ({
				theme: {
					css: {
						'--tw-prose-body': theme('colors.theme[800]'),
						'--tw-prose-headings': theme('colors.theme[900]'),
						'--tw-prose-lead': theme('colors.theme[700]'),
						'--tw-prose-links': theme('colors.theme[800]'),
						'--tw-prose-bold': theme('colors.theme[900]'),
						'--tw-prose-counters': theme('colors.theme[600]'),
						'--tw-prose-bullets': theme('colors.theme[400]'),
						'--tw-prose-hr': theme('colors.theme[300]'),
						'--tw-prose-quotes': theme('colors.theme[900]'),
						'--tw-prose-quote-borders': theme('colors.theme[300]'),
						'--tw-prose-captions': theme('colors.theme[700]'),
						'--tw-prose-code': theme('colors.theme[900]'),
						'--tw-prose-pre-code': theme('colors.theme[100]'),
						'--tw-prose-pre-bg': theme('colors.theme[900]'),
						'--tw-prose-th-borders': theme('colors.theme[300]'),
						'--tw-prose-td-borders': theme('colors.theme[200]'),
						'--tw-prose-invert-body': theme('colors.theme[200]'),
						'--tw-prose-invert-headings': theme('colors.theme[100]'),
						'--tw-prose-invert-lead': theme('colors.theme[300]'),
						'--tw-prose-invert-links': theme('colors.theme[200]'),
						'--tw-prose-invert-bold': theme('colors.theme[200]'),
						'--tw-prose-invert-counters': theme('colors.theme[400]'),
						'--tw-prose-invert-bullets': theme('colors.theme[600]'),
						'--tw-prose-invert-hr': theme('colors.theme[700]'),
						'--tw-prose-invert-quotes': theme('colors.theme[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.theme[700]'),
						'--tw-prose-invert-captions': theme('colors.theme[400]'),
						'--tw-prose-invert-code': theme('colors.theme[100]'),
						'--tw-prose-invert-pre-code': theme('colors.theme[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.theme[600]'),
						'--tw-prose-invert-td-borders': theme('colors.theme[700]'),
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
