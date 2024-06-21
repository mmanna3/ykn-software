/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            anonymouspro: ['Anonymous Pro', 'arial'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
        extend: { colors: {} },
    },
    plugins: [],
};
