module.exports = {
	corePlugins: {
		container: false,
	},
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: 'var(--font-body)',
			body: 'var(--font-body)',
			display: 'var(--font-display)',
			mono: 'var(--font-mono)',
		},
		fontSize: {
			xs: 'var(--size-300)',
			sm: 'var(--size-400)',
			base: 'var(--size-500)',
			lg: 'var(--size-600)',
			xl: 'var(--size-700)',
			'2xl': 'var(--size-800)',
			'3xl': 'var(--size-900)',
			'4xl': 'var(--size-1000)',
			'5xl': 'var(--size-1500)',
		},
		extend: {
			colors: {
				white: 'var(--color-white)',
				black: 'var(--color-black)',
				transparent: 'transparent',
				tan: 'var(--color-tan)',
				dawn: 'var(--color-dawn)',
				dusk: 'var(--color-dusk)',
				midnight: 'var(--color-midnight)',
				blue: 'var(--color-blue)',
				red: 'var(--color-red)',
				yellow: 'var(--color-yellow)',
				purple: 'var(--color-purple)',
				pink: 'var(--color-pink)',
				oldpink:'var(--color-oldpink)',
				selva: 'var(--color-selva)',
				pop: 'var(--gradient-pop)',
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
							'--tw-prose-links': theme('colors.blue'),
							'--tw-prose-code': theme('colors.purple'),
							'--tw-prose-pre-bg':
								'linear-gradient(to bottom,var(--color-midnight),#1f1638)',
							'--tw-prose-pre-code': theme('colors.white'),
							'--tw-prose-bullets': 'rgba(var(--color-midnight-rgb), 0.5)',
							':focus-visible': {
								outline: '2px dashed var(--color-blue)',
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