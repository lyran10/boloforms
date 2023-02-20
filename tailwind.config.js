/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'visibility': 'visibility',
        'height': 'height',
        "opacity" : "opacity",
        "width" : "width",
        'spacing': 'margin, padding',
      },
      boxShadow: {
        "custom": '0px 20px 40px 0px rgb(2 30 70 / 10%)'
      },
    },
    backgroundImage : {
      "raman" : "url(/src/components/comment/raman.jpeg)",
      "chatImage" : "url(/src/components/chats/chatImage7.jpg)"
    }
  },
  plugins: [],
}
