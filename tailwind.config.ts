import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        // This links Tailwind's sans stack to your Poppins variable
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  // ... rest of your config
};
export default config;
