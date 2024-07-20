/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/*.{html,js}",
        "./src/pages/*.{html,js}",
    ],
    theme: {
        colors: {
            'black': '#000',
            'white': '#fff',
            'accent': '#FF8461',
            'gray': '#EBEBEB'
        },
        fontFamily: {
            'primary': ['"Montserrat"', 'sans-serif'],
            'secondary': ['"Montserrat Alternates"', 'sans-serif'],
        },
        container: {
            // you can configure the container to be centered
            center: true,
            // or have default horizontal padding
            padding: '20px',
            // default breakpoints but with 40px removed
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1280px',
            },
        },
        screens: {
            'xs': '400px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {},
    },
    plugins: [],
}

