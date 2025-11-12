import { Orbitron, Rajdhani, Exo_2 } from 'next/font/google';
import "./globals.css";


const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo-2',
  display: 'swap',
});

export const Metadata = {
  title: "Glitchover",
  description: "Stop watching. Start playing. Glitchover turns live streams into interactive gaming experience! Connect, play, and engage like never before!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${exo2.variable}`}>
      <body>{children}</body>
    </html>
  );
}