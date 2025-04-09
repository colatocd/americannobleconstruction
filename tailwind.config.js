/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "primary-color": "#1f2937",  // Dark Gray
          "secondary-color": "#3b82f6", // Blue
          "text-color": "#f8fafc", // Light Text
          "background-color": "#f9fafb", // Soft Background
        },
      },
    },
    plugins: [],
  };
  