/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://res.cloudinary.com/enchanting/q_90,f_auto,c_lfill,w_800,h_400,x_w_mul_0.38,y_h_mul_0.41,g_xy_center/enchanting-web/2024/04/Kilchurn-castle-on-Loch-Awe-Scotland-1.jpg')",
      },
    },
  },
  plugins: [],
};
