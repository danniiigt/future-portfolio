/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c",
        "primary-light": "#f9a825",
        "primary-dark": "#c43e00",

        background: "#171717",
        "background-light": "#262626",
        "background-dark": "#0a0a0a",
        "background-opposite": "#f5f5f5",

        text: "#9ca3af",
        "text-light": "#e5e7eb",
        "text-dark": "#6b7280",
        "text-opposite": "#171717",

        border: "rgba(60,63,68,.5)",
        "border-light": "rgba(60,63,68)",
        "border-extra-light": "rgba(70,73,78)",
      },
    },
  },
  plugins: [],
};
