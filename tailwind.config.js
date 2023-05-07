/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "576px",
            md: "960px",
            lg: "1400px",
            xl: "1640px",
        },
        extend: {
            colors: {
                night: "#252323",
                eerieBlack: "#1A1F16",
                viridian: "#5B9279",
                celadon: "#80e895",
                platinum: "#EAE6E5",
                cinereous: "#8F8073",
            },
        },
    },
    plugins: [],
};
