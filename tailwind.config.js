/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'my-avatar': "url('https://i.pravatar.cc/150?img=40')",
        'chatbot-avatar': "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}