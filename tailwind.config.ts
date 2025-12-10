import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#36ffbf",
        background: "#ffffff",
        foreground: "#0f172a",
        primary: {
          DEFAULT: "#36ffbf",
          foreground: "#0f172a",
          glow: "#36ffbf",
        },
        secondary: {
          DEFAULT: "#f0fdfa",
          foreground: "#0f172a",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f8fafc",
        },
        muted: {
          DEFAULT: "#f0fdfa",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#ccfdf7",
          foreground: "#0f172a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        sidebar: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
          primary: "#36ffbf",
          "primary-foreground": "#0f172a",
          accent: "#ccfdf7",
          "accent-foreground": "#0f172a",
          border: "#e2e8f0",
          ring: "#36ffbf",
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #36ff9b, #36ffbf)',
        'gradient-hero': 'linear-gradient(to bottom right, #36ffbf1a, transparent, #f0fdfa1a)',
      },
      boxShadow: {
        'glow': '0 0 30px #36ffbf4d',
        'elegant': '0 10px 40px #36ffbf26',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "glow": {
          "0%": {
            boxShadow: "0 0 20px #36ffbf80"
          },
          "100%": {
            boxShadow: "0 0 40px #36ffbfcc"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
