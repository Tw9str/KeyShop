import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Social from "@/components/Social";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "Key Shop",
  description:
    "A Key Store Where You Can Buy All Software, Gaming and Web Keys Codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Social />
      </body>
    </html>
  );
}
