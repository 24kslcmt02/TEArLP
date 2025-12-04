import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
                display: ['Roboto', 'sans-serif'],
            },
            colors: {
                main: '#1e293b', // Slate 800 - Sophisticated Charcoal/Navy
                accent: '#2563eb', // Blue 600 - Trustworthy Blue
                background: '#f5f5f5', // Light Gray
                surface: '#ffffff',
            }
        }
    },
    plugins: []
}
