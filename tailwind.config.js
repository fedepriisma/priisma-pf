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
			sky: colors.sky,
			slate: colors.slate,
			amber: colors.amber,
			primary: {
				50:  'rgb(var(--color-primary-50) / <alpha-value>)',
				100: 'rgb(var(--color-primary-100) / <alpha-value>)',
				200: 'rgb(var(--color-primary-200) / <alpha-value>)',
				300: 'rgb(var(--color-primary-300) / <alpha-value>)',
				400: 'rgb(var(--color-primary-400) / <alpha-value>)',
				DEFAULT: 'var(--color-blue-craftr)',
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
			xs: 'var(--font-size-xs)',
			sm: 'var(--font-size-sm)',
			base: 'var(--font-size-base)',
			md: 'var(--font-size-md)',
			lg: 'var(--font-size-lg)',
			xl: 'var(--font-size-xl)',
			'2xl': 'var(--font-size-2xl)',
			'3xl': 'var(--font-size-3xl)',
			'4xl': 'var(--font-size-4xl)',
			'5xl': 'var(--font-size-5xl)',
			'6xl': 'var(--font-size-6xl)',
			'7xl': 'var(--font-size-7xl)',
			'8xl': 'var(--font-size-8xl)',
			'9xl': 'var(--font-size-9xl)',
		},
		extend: {
			borderRadius: {
				'4xl': '2rem',
				'5xl': '3rem',
				'6xl': '5rem',
			},
			colors: {
				white: 'rgb(var(--color-white) / <alpha-value>)',
				tan: 'var(--color-tan)',
				dawn: 'var(--color-dawn)',
				dusk: 'var(--color-dusk)',
				midnight: 'var(--color-midnight)',
				red: 'var(--color-red)',
				yellow: 'var(--color-yellow)',
				purple: 'var(--color-purple)',
				pink: 'var(--color-pink)',
				oldpink: 'rgb(var(--color-oldpink) / <alpha-value>)',
				selva: 'rgb(var(--color-selva) / <alpha-value>)',
				woodstock: 'var(--color-woodstock)',
				sunset: 'var(--color-sunset)',
				pop: 'var(--gradient-pop)',
				'yellow-lemon': 'var(--color-yellow-lemon)',
				'dark-coal': 'var(--color-dark-coal)',
				'blue-craftr': 'var(--color-blue-craftr)',
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
							fontSize: 'var(--font-size-base)',
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