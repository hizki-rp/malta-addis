import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const Destinations = () => {
	const visaDestinations = [
		{
			image: "/bg1.jpg", // Replace with your image paths
			title: "Paris, France",
			description: "City of Love, Art, and Culture",
		},
		{
			image: "/bg2.jpg",
			title: "London, UK",
			description: "A historic city with modern vibes",
		},
		{
			image: "/bg3.jpg",
			title: "Dubai, UAE",
			description: "Luxury, innovation, and desert adventures",
		},
		{
			image: "/bg4.jpg",
			title: "New York City, USA",
			description: "The city that never sleeps",
		},
		{
			image: "/bg5.jpg",
			title: "Toronto, Canada",
			description: "Multicultural and vibrant city",
		},
		{
			image: "/bg6.jpg",
			title: "Beijing, China",
			description: "Ancient history and modern marvels",
		},
		{
			image: "/bg-6.jpg",
			title: "Istanbul, Turkey",
			description: "A bridge between Europe and Asia",
		},
		{
			image: "/bg3.jpg",
			title: "Johannesburg, South Africa",
			description: "The City of Gold, rich in history",
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24 px-4">
			{" "}
			{/* Responsive grid */}
			{visaDestinations.map((destination, index) => (
				<article
					key={index}
					className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto"
				>
					<Image // Use Next.js Image component for optimization
						src={destination.image}
						alt={destination.title}
						className="absolute inset-0 h-full w-full object-cover"
						width={500} // Set width and height for proper sizing
						height={300}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
					<h3 className="z-10 mt-3 text-3xl font-bold text-white">
						{destination.title}
					</h3>
					<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
						{destination.description}
					</div>
				</article>
			))}
		</div>
	);
};

export default Destinations;
