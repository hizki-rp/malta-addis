"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/malta-logo.png";

const Footer = () => {
	return (
		<footer className="pt-12 bg-gradient-to-r from-indigo-600 to-violet-700 overflow-hidden bg-center bg-no-repeat">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Logo and Description */}
					<div className="flex flex-col items-center md:items-start">
						<Image src={logo} alt="AYATA Logo" width={100} height={40} />
						<p className="mt-4 text-gray-100 text-center md:text-left">
							Malta Addis Travel Consultancy
						</p>
						<p className="mt-4 text-gray-300 text-center md:text-left text-sm">
							 <span className=" text-2xl bg-gradient-to-r from-rose-600 via-amber-500 to-amber-600 block text-transparent bg-clip-text">Address</span> Megenagna, Kenneret Tower 5/512.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="text-gray-100 hover:text-green-600">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-gray-100  hover:text-green-600"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-100  hover:text-green-600"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-gray-100 hover:text-green-600"
								>
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Details */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
						<ul className="space-y-2 text-gray-100">
							<li>
								<strong>Email:</strong> maltaaddisconsultancy@gmail.com
							</li>
							<li>
								<strong>Phone:</strong> +251953------
							</li>
							<li>
								<strong>Address:</strong> Addis Ababa, Megenagna.
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<hr className="my-6 border-gray-100" />

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-100 text-sm">
						&copy; {new Date().getFullYear()} Malta Addis Travel Consultancy.
						All Rights Reserved.
					</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<Link href="https://facebook.com" target="_blank">
							<Image
								src="/facebook.svg"
								alt="Facebook"
								width={24}
								height={24}
								className="hover:opacity-75"
							/>
						</Link>
						<Link href="https://twitter.com" target="_blank">
							<Image
								src="/twitter.svg"
								alt="Twitter"
								width={24}
								height={24}
								className="hover:opacity-75"
							/>
						</Link>
						<Link href="https://instagram.com" target="_blank">
							<Image
								src="/instagram.svg"
								alt="Instagram"
								width={24}
								height={24}
								className="hover:opacity-75"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
