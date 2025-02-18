import React from "react";
import Image from "next/image"; // Import Next.js Image component

const Services = () => {
	const services = [
		{
			image: "https://www.svgrepo.com/show/164986/logo.svg",
			title: "Xyz.com",
			description: "Platform to convert Domains into Content websites.",
		},
		{
			image: "https://www.svgrepo.com/show/120853/logo.svg",
			title: "ABC.com",
			description: "Platform to create dynamic widgets for websites.",
		},
		{
			image: "https://www.svgrepo.com/show/120852/logo.svg",
			title: "ASD.com",
			description:
				"API SaaS Platform that provides API Suit to help you ship fast.",
		},
		{
			image: "https://www.svgrepo.com/show/120850/logo.svg",
			title: "TMK.co",
			description: "Chrome Extension that lets you add ChatGPT on any website",
		},
		// Add more services here...
	];

	return (
		<div className=" p-4 min-h-screen relative bg-gradient-to-r from-slate-50 to-violet-500">
			{" "}
			{/* Added relative for absolute positioning */}
			<div
				aria-hidden="true"
				className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
			>
				<div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-300"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-200"></div>
			</div>
			<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative z-10">
				{" "}
				{/* Added relative and z-index */}
				<div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-90 flex flex-col justify-end">
					{/* ... (SVG and title) ... */}
					<h2 className="my-8 text-2xl font-bold text-gray-900 md:text-4xl">
						Our Services
					</h2>
					<p className="text-gray-600">
						We have built many products and some of them are below
					</p>
				</div>
				<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{" "}
					{/* Responsive grid with gap */}
					{services.map((service, index) => (
						<div
							key={index}
							className="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-3xl overflow-hidden" // Added rounded-3xl and overflow-hidden
						>
							<div className="relative space-y-8 py-12 p-8">
								<Image // Use Next.js Image for optimization
									src={service.image}
									alt={service.title}
									width={100} // Adjust width as needed
									height={100} // Adjust height as needed
									className="w-12 h-12 rounded-full"
								/>
								<div className="space-y-2">
									<h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">
										{service.title}
									</h5>
									<p className="text-gray-900">{service.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
