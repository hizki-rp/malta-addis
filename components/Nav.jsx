// components/Nav.jsx
"use client";

import Link from "next/link";

import React, { useState } from "react";

const Nav = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
			<div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
				<div className="flex items-center justify-between">
					<div className="flex flex-shrink-0">
						<a
							href="/"
							title="Malta Addis"
							className="inline-flex rounded-md focus:outline-none"
						>
							<img
								className="w-auto h-8"
								src="./malta-logo.png" // Make sure the path is correct
								alt="BakerStreet"
							/>
						</a>
					</div>

					<div className="md:hidden">
						<button
							type="button"
							className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
							onClick={toggleMobileMenu}
						>
							{isMobileMenuOpen ? ( // Show X icon when menu is open
								<svg
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12" // X icon path
									/>
								</svg>
							) : (
								// Show hamburger icon when menu is closed
								<svg
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16" // Hamburger icon path
									/>
								</svg>
							)}
						</button>
					</div>

					<div
						className={`md:flex md:items-center md:space-x-10 lg:ml-28 transition-all duration-300 ${
							isMobileMenuOpen
								? "flex flex-col absolute top-full left-0 w-full bg-black py-4 md:py-0 md:bg-transparent"
								: "hidden" // Hide on larger screens and when closed
						}`}
					>
						<Link
							href="/"
							title=""
							className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary md:py-2 px-4 py-2"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary md:py-2 px-4 py-2"
						>
							About
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center justify-center px-5 py-2
							font-sans text-base font-semibold transition-all duration-200
							bg-transparent border-2 rounded-full sm:leading-8 text-white
							border-primary hover:bg-white focus:outline-none focus:ring-2
							focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg
							focus:ring-offset-secondary"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
