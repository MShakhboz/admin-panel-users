/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "futura-pt": ["Futura PT Book", "sans-serif"],
            },
            colors: {
                "cs-black-500": "#424F5E",
            },
            backgroundColor: {
                "cs-white-100": "#F9FAFB",
                "cs-green-400": "#32C076",
            },
        },
    },
    plugins: [],
};
