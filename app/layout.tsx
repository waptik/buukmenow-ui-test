import "./globals.css";
import type { Metadata } from "next";
import { Inter,  } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-column justify-center min-h-[1000px] bg-gray-100 w-full">
          <div className="overflow-hidden w-[1440px] h-full border">
            {children}
            <div className="absolute top-[884px] left-[1085px] bg-[#d9d9d9] w-0.5 h-0.5 rounded-1" />
          </div>
        </div>
      </body>
    </html>
  );
}