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
                "cs-gray-400": "#9494A0",
                "cs-gray-300": "#EFEFF6",
                "cs-vivid-blue-300": "#5A57FF",
                "cs-gray-350": "#C1C1CB",
            },
            backgroundColor: {
                "cs-white-100": "#F9FAFB",
                "cs-green-400": "#32C076",
                "cs-gray-200": "#EBEBF0",
                "cs-gray-300": "#EFEFF6",
            },
        },
    },
    plugins: [],
};
