/** @type {import('tailwindcss').Config} */
module.exports = {
    // Prefix for all css classes. (e.g. tw-text)
    prefix: "leaftech-",
    // Dark mode class.
    darkMode: "class",
    // Purgecss config.
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    // Theme config.
    theme: {
        extend: {},
    },
    // Plugins.
    plugins: [require("flowbite/plugin")],
};
