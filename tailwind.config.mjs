/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'sans-serif'],
				heading: ['Outfit', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			colors: {
				slate: {
					950: '#020617', // Ensure this matches user request if not default
				},
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
		},
	},
	plugins: [],
}
