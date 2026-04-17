import type { Config } from "tailwindcss";

// Colores y rutas que Tailwind usará dentro del proyecto.
// Si se agregan nuevos componentes, Tailwind podrá leer sus clases aquí.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fffaf3",
        blush: "#f7cdd8",
        roseDust: "#d98aa0",
        sage: "#9caf88",
        goldSoft: "#c4a05f",
        wine: "#7a2941",
        cocoa: "#5d453a",
      },
      boxShadow: {
        floral: "0 24px 80px rgba(122, 41, 65, 0.16)",
        soft: "0 18px 48px rgba(93, 69, 58, 0.12)",
      },
      backgroundImage: {
        "premium-glow": "radial-gradient(circle at top left, rgba(247,205,216,0.55), transparent 32%), radial-gradient(circle at bottom right, rgba(196,160,95,0.22), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;
