const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	corePlugins: {
		container: false,
	},
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {...defaultTheme.screens},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			blue: colors.blue,
			slate: colors.slate,
			primary: {
				50:  'rgb(var(--color-primary-50) / <alpha-value>)',
				100: 'rgb(var(--color-primary-100) / <alpha-value>)',
				200: 'rgb(var(--color-primary-200) / <alpha-value>)',
				300: 'rgb(var(--color-primary-300) / <alpha-value>)',
				400: 'rgb(var(--color-primary-400) / <alpha-value>)',
				500: 'rgb(var(--color-primary-500) / <alpha-value>)',
				600: 'rgb(var(--color-primary-600) / <alpha-value>)',
				700: 'rgb(var(--color-primary-700) / <alpha-value>)',
				800: 'rgb(var(--color-primary-800) / <alpha-value>)',
				900: 'rgb(var(--color-primary-900) / <alpha-value>)',
			},
			secondary: {
				50:  'rgb(var(--color-secondary-50) / <alpha-value>)',
				100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
				200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
				300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
				400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
				500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
				600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
				700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
				800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
				900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
				950: 'rgb(var(--color-secondary-950) / <alpha-value>)',
			},
		},
		fontFamily: {
			sans: 'var(--font-body)',
			body: 'var(--font-body)',
			display: 'var(--font-display)',
			cabinet: 'var(--font-cabinet)',
			mono: 'var(--font-mono)',
		},
		fontSize: {
			xs: 'var(--size-300)',
			sm: 'var(--size-400)',
			base: 'var(--size-500)',
			lg: 'var(--size-600)',
			xl: 'var(--size-700)',
			'2xl': ['var(--size-800)', { lineHeight: '2rem' }],
			'3xl': ['1.5rem', { lineHeight: '2rem' }],
			'4xl': ['2rem', { lineHeight: '2.5rem' }],
			'5xl': ['var(--size-1100)', { lineHeight: '1' }],
			'6xl': ['4rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		},
		extend: {
			borderRadius: {
				'4xl': '2rem',
				'5xl': '3rem',
				'6xl': '5rem',
			},
			colors: {
				white: 'rgb(var(--color-white) / <alpha-value>)',
				black: 'var(--color-black)',
				tan: 'var(--color-tan)',
				dawn: 'var(--color-dawn)',
				dusk: 'var(--color-dusk)',
				midnight: 'var(--color-midnight)',
				red: 'var(--color-red)',
				yellow: 'var(--color-yellow)',
				purple: 'var(--color-purple)',
				pink: 'var(--color-pink)',
				oldpink:'var(--color-oldpink)',
				selva: 'var(--color-selva)',
				woodstock: 'var(--color-woodstock)',
				sunset: 'var(--color-sunset)',
				pop: 'var(--gradient-pop)',
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'xl': 'var(--shadow-xl)',
				'solid': 'var(--shadow-solid)',
			  },
			typography: ({ theme }) => {
				const headings = {
					'h1, h2, h3, h4, h5, h6': {
						fontFamily: 'var(--font-display)',
						fontWeight: 'bold',
						lineHeight: 1.1,
						textAlign: 'inherit',
						fontStretch: 'expanded',
					},
					h1: {
						fontSize: theme('fontSize.3xl'),
					},
					h2: {
						fontSize: theme('fontSize.2xl'),
					},
					h3: {
						fontSize: theme('fontSize.xl'),
					},
					h4: {
						fontSize: theme('fontSize.lg'),
					},
					h5: {
						fontSize: theme('fontSize.sm'),
					},
					h6: {
						fontSize: theme('fontSize.xs'),
					},
				}

				return {
					DEFAULT: {
						css: {
							maxWidth: '75ch',
							fontSize: 'var(--size-500)',
							lineHeight: '1.5',
							// override @tailwindcss/typography colors
							'--tw-prose-body': theme('colors.midnight'),
							'--tw-prose-headings': theme('colors.dusk'),
							// '--tw-prose-links': theme('colors.blue'),
							'--tw-prose-code': theme('colors.purple'),
							'--tw-prose-pre-bg': 'linear-gradient(to bottom,var(--color-midnight),#1f1638)',
							'--tw-prose-pre-code': theme('colors.white'),
							'--tw-prose-bullets': 'rgba(var(--color-midnight-rgb), 0.5)',
							':focus-visible': {
								outline: '2px dashed currentColor',
							},
							...headings,
							a: {
								textDecoration: 'none',
								fontWeight: 400,
								wordBreak: 'break-word',
								'&:hover': {
									textDecoration: 'underline',
								},
								'> code': {
									color: 'var(--tw-prose-code)',
								},
							},
						},
					},
					sm: {
						...headings,
					},
					md: {
						...headings,
					},
					lg: {
						...headings,
					},
					xl: {
						...headings,
					},
				}
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		function ({ addComponents, theme }) {
			addComponents({
				'.container': {
					maxWidth: '40rem',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: theme('spacing.4'),
					paddingRight: theme('spacing.4'),
					'@screen md': { maxWidth: '50rem' },
					'@screen lg': { maxWidth: '62rem' },
					'@screen xl': { maxWidth: '80rem' },
					'@screen 2xl': { maxWidth: '90rem' },
				},
				'.head-md': {
					fontFamily: theme('fontFamily.display'),
					fontSize: theme('fontSize.xl'),
					letterSpacing: -0.5,
					lineHeight: 1.2,
					fontWeight: 'bold',
				},
				'.body-md': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.body'),
					lineHeight: 1.3,
				},
			})
		},
	],
}