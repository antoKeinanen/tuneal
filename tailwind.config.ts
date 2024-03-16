import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...fontFamily.sans],
      },
      animation: {
        "slow-spin": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
