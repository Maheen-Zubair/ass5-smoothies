import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green:"#64852f",
        greenHover :"#3f531e",
        pink: "#da7980",      
        pinkHover:" #873137",
        purple:" #7d4796",        
        purpleHover: "#462853",              
        bludge:" #c88c65",       
        bludgeHover: "#7a563e", 
        orange:"#c16105",   
        orangeHover :"#944a05",
        darkGreen:"#453403",
        darkGreenHover: "#392b03",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;