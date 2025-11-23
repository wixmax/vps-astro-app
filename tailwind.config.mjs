/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#D9008F', // Neon Pink
					dark: '#b00074',
				},
				secondary: {
					DEFAULT: '#6C00A2', // Deep Purple
					dark: '#4a0070',
				},
				accent: {
					DEFAULT: '#00F0FF', // Neon Cyan
				},
				dark: {
					bg: '#1A0B2E', // Very dark purple background
					surface: '#2D1B4E', // Slightly lighter purple for cards
					text: '#f8fafc',
					muted: '#94a3b8',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Orbitron', 'sans-serif'], // Assuming a sci-fi/gaming font might be good, but sticking to sans for now if not imported
			},
			backgroundImage: {
				'hero-pattern': "url('/images/hero-bg.jpg')", // Placeholder if we had one, but we'll use gradients
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		},
	},
	plugins: [],
}
