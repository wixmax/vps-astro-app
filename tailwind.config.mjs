/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#4f46e5', // Indigo 600
					dark: '#4338ca', // Indigo 700
				},
				secondary: {
					DEFAULT: '#10b981', // Emerald 500
					dark: '#059669', // Emerald 600
				},
				dark: {
					bg: '#0f172a', // Slate 900
					surface: '#1e293b', // Slate 800
					text: '#f8fafc', // Slate 50
					muted: '#94a3b8', // Slate 400
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
