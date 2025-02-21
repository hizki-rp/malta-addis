import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "../utils/lenis";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

//import from utils ==> for "use client"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="!scroll-smooth">
			<ReactLenis root>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<Nav />
					<main className="relative overflow-hidden">
						{children}
						{/*<WhatsappLive />*/}
					</main>
					<Footer />
				</body>
			</ReactLenis>
		</html>
	);
}
