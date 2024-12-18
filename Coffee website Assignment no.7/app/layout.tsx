import { Outfit, Aclonica, Orelega_One as OrelegaOne } from "next/font/google"; // Import Google Fonts
import localFont from "next/font/local";
import "./globals.css";

// Load Outfit font from Google Fonts
const outfitFont = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: "--font-outfit",
});

// Load Aclonica font from Google Fonts
const aclonicaFont = Aclonica({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-aclonica",
});

// Load Orelega One font from Google Fonts
const orelegaOneFont = OrelegaOne({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-orelega-one",
});

// Load local fonts (example of local font usage)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.variable} ${aclonicaFont.variable} ${orelegaOneFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
