module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  mode: "jit",
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        darkBlue:"#424874",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        fill: {
          1: "rgba(255, 255, 255, 0.10)",
        },
        bankGradient: "#0179FE",
        indigo: {
          500: "#6172F3",
          700: "#3538CD",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          600: "#039855",
          700: "#027A48",
          900: "#054F31",
        },
        pink: {
          25: "#FEF6FB",
          100: "#FCE7F6",
          500: "#EE46BC",
          600: "#DD2590",
          700: "#C11574",
          900: "#851651",
        },
        blue: {
          25: "#F5FAFF",
          100: "#D1E9FF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          900: "#194185",
        },
        sky: {
          1: "#F3F9FF",
        },
        black: {
          DEFAULT: "#000000",
          1: "#00214F",
          2: "#344054",
        },
        gray: {
          25: "#FCFCFD",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(135deg, #0179FE 0%, #4893FF 50%, #6366F1 100%)",
        "brand-gradient": "linear-gradient(135deg, #3A3D97 0%, #5B5FC7 50%, #0179FE 100%)",
        "auth-gradient": "linear-gradient(160deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 100%)",
        "dashboard-gradient": "radial-gradient(ellipse at top right, #EEF2FF 0%, #F8FAFC 45%, #F1F5F9 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        chart:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        profile:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        creditCard: "0 20px 40px -12px rgba(1, 121, 254, 0.35)",
        card: "0 1px 3px rgba(16, 24, 40, 0.06), 0 8px 24px rgba(16, 24, 40, 0.06)",
        elevated: "0 20px 50px -12px rgba(58, 61, 151, 0.25)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: "var(--font-inter)",
        "ibm-plex-serif": "var(--font-ibm-plex-serif)",
      },
      fontSize: {
        "10": ["10px", { lineHeight: "14px" }],
        "12": ["12px", { lineHeight: "16px" }],
        "13": ["13px", { lineHeight: "18px" }],
        "14": ["14px", { lineHeight: "20px" }],
        "15": ["15px", { lineHeight: "22px" }],
        "16": ["16px", { lineHeight: "24px" }],
        "18": ["18px", { lineHeight: "22px" }],
        "20": ["20px", { lineHeight: "24px" }],
        "24": ["24px", { lineHeight: "30px" }],
        "26": ["26px", { lineHeight: "32px" }],
        "30": ["30px", { lineHeight: "38px" }],
        "32": ["32px", { lineHeight: "40px" }],
        "36": ["36px", { lineHeight: "44px" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "glow-drift": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.45",
          },
          "33%": {
            transform: "translate(36px, -28px) scale(1.06)",
            opacity: "0.7",
          },
          "66%": {
            transform: "translate(-24px, 22px) scale(0.94)",
            opacity: "0.5",
          },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        "auth-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        marquee: "marquee 45s linear infinite",
        "glow-drift": "glow-drift 10s ease-in-out infinite",
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
        "auth-float": "auth-float 5s ease-in-out infinite",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      "2xl": "1400px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
