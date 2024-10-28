const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit: "var(--font-outfit)", // Reference CSS variable for Outfit
        aclonica: "var(--font-aclonica)", // Reference CSS variable for Aclonica
        geistSans: "var(--font-geist-sans)", // Local font GeistSans
        geistMono: "var(--font-geist-mono)", // Local font GeistMono
      },
    },
  },
  plugins: [],
};
export default config;


