/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // الألوان الأساسية تبقى ثابتة (Neon colors)
                primary: {
                    DEFAULT: '#D9008F', // يجب أن يكون له مفتاح DEFAULT
                },
                secondary: {
                    DEFAULT: '#6C00A2',
                },
                accent: {
                    DEFAULT: '#00F0FF',
                },
                
                // --- نظام ألوان الوضع الفاتح والداكن ---
                
                // الخلفية الأساسية (تغير حسب الوضع)
                'app-bg': {
                    DEFAULT: '#f0f0f5', // Light Mode Default (فاتح جداً)
                    dark: '#1A0B2E',     // Dark Mode (اللون الحالي dark-bg)
                },
                
                // خلفية البطاقات/السطوح (تغير حسب الوضع)
                'app-surface': {
                    DEFAULT: '#ffffff', // Light Mode Default (أبيض)
                    dark: '#2D1B4E',    // Dark Mode (اللون الحالي dark-surface)
                },

                // لون النص (تغير حسب الوضع)
                'app-text': {
                    DEFAULT: '#1a0b2e',  // Light Mode Default (داكن جداً)
                    dark: '#f8fafc',     // Dark Mode (أبيض تقريباً)
                },

                // الألوان المكتومة (Muted)
                'app-muted': {
                    DEFAULT: '#4b5563',  // Light Mode (رمادي داكن)
                    dark: '#94a3b8',     // Dark Mode
                },

            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'], 
            },
            backgroundImage: {
                // ... (بقية الإعدادات كما هي)
                'hero-pattern': "url('/images/hero-bg.jpg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}