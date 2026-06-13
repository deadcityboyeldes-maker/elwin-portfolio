/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.css";
import {
  Creepster,
  Chelsea_Market,
  Cormorant,
  Russo_One,
} from "next/font/google";
import { AudioProvider } from "../components/audio/AudioContext";
import MusicToggle from "../components/ui/MusicToggle";
import { LocaleProvider } from "../context/LocaleContext";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
});
const chelsea = Chelsea_Market({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chelsea",
});
const cormorant = Cormorant({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
});

export const metadata = {
  title: "elwin Portfolio",
  description: "Futuristic Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${creepster.variable} ${chelsea.variable} ${cormorant.variable} ${russoOne.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Estedad:wght@400;700;900&family=Handjet:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        <LocaleProvider>
          <AudioProvider>
            {children}
            <MusicToggle />
          </AudioProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
