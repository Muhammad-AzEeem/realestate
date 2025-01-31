// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/Components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real Estate",
  description: "Buy & Rent Property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider>
          <Head>Real Estate</Head>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}
