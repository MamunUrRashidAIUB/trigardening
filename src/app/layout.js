import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent FontAwesome from adding its CSS automatically (Next.js handles CSS imports)
config.autoAddCss = false





export const metadata = {
  title: "EcoPlant | Home of Green Living",
  description: "Buy eco-friendly plants and read nature blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        <Navbar />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
