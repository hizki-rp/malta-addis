// components/Hero.jsx
"use client"; // Important for client components

import React from "react";

const Hero = () => {
	return (
		<div className="relative pt-48 pb-12 bg-white xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
			<div className="absolute inset-0">
				<img className="object-cover w-full h-full " src="./bg6.jpg" alt="" />
			</div>

			<div className=" relative">
				<div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
					<div className="w-full lg:w-2/3 xl:w-1/2">
						<h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
							Expert Visa & Travel
						</h1>
						<p className="mt-6 tracking-tighter text-black">
							<span className="font-sans font-normal text-3xl">
								Guidance <span>You Can Trust</span>
							</span>
							<br />

							<span className="font-serif italic font-normal text-8xl text-black">
								<span className="bg-gradient-to-r from-rose-600 via-amber-500 to-amber-600 inline-block text-transparent bg-clip-text text-8xl">
									Malta
								</span>{" "}
								<span className="bg-gradient-to-r from-gray-500 via-gray-900 to-black inline-block text-transparent bg-clip-text">
									Addis
								</span>
							</span>
							<br />
							<span className="font-serif italic font-normal text-6xl text-black">
								Travel Consultancy
							</span>
						</p>
						<p className="mt-12 font-sans text-base font-normal leading-7 text-black text-opacity-70">
							Is your trusted partner for all visa and travel needs in Ethiopia.
							We offer comprehensive services for work visas, travel visas, and
							student visas, connecting you with opportunities worldwide.
						</p>
						<p className="mt-8 font-sans text-xl font-normal text-black">
							{/*Starting at $9.99/month*/}
						</p>

						<div className="flex items-center mt-5 space-x-3 sm:space-x-4">
							<a
								href="#"
								title=""
								className="
                  inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                "
								role="button"
							>
								Learn More
							</a>

							<a
								href="#"
								title=""
								className="
                  inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary
                  
                "
								role="button"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
