import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const categories = [
	{ label: "All", value: "", isActive: false },
	{ label: "Branding", value: "Branding", isActive: true },
	{ label: "Code", value: "Code", isActive: false },
	{ label: "Marketing", value: "Marketing", isActive: false },
];

const portfolioList = [
	{
		image: "/images/vip1.jpg", // Local image path (relative to /public)
		title: "Canada",
		categories: ["VIP Tourist Visa"],
	},
	{
		image: "/images/vip2.jpg", // Local image path
		title: "Greece",
		categories: ["VIP Tourist Visa"],
	},
	{
		image: "/images/visit1.jpg", // Local image path
		title: "Albania",
		categories: ["Visit Visa"],
	},
	{
		image: "/images/visit2.jpg", // Local image path
		title: "Netherland",
		categories: ["Visit Visa"],
	},
	{
		image: "/images/visit3.jpg", // Local image path
		title: "Moldova",
		categories: ["Visit Visa"],
	},
	{
		image: "/images/visit4.jpg", // Local image path
		title: "Italy",
		categories: ["Visit Visa"],
	},
	{
		image: "/images/visit5.jpg", // Local image path
		title: "Turkey ",
		categories: ["Visit Visa"],
	},
	{
		image: "/images/study1.jpg", // Local image path
		title: "Italy, China, USA and Belarus",
		categories: ["Study Visa"],
	},
];

const Flyers = () => {
	return (
		<section className="px-16 ezy__portfolio9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-6 lg:gap-12">
					<div className="col-span-12 md:col-span-4 md:mt-6 lg:mt-12 md:pt-6 lg:pt-12">
						<div className="xl:my-12 xl:py-12">
							<div className="mb-6 md:my-12 lg:py-12">
								<h2 className="bg-gradient-to-r from-rose-600 via-amber-500 to-amber-600 inline-block text-transparent bg-clip-text text-3xl leading-none md:text-[45px] mb-6">
									Travel With US!
								</h2>
								<p className="text-lg leading-8 mb-2">
									We guide you to one of the top destinations.
								</p>
								<div className="col-span-12 mt-6"></div>
							</div>
						</div>
						{portfolioList.slice(0, 2).map((portfolio, i) => (
							<div
								className="group rounded-xl overflow-hidden relative mt-6"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-auto w-full"
								/>
								<div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
									<h5 className="font-medium text-xl">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</div>

					<div className="col-span-12 md:col-span-4 md:mt-6 md:pt-6 lg:mt-12 lg:pt-12">
						{portfolioList.slice(2, 5).map((portfolio, i) => (
							<div
								className="group rounded-xl overflow-hidden relative mt-6"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-auto w-full"
								/>
								<div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
									<h5 className="font-medium text-xl">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</div>
					<div className="col-span-12 md:col-span-4">
						{portfolioList.slice(5, 8).map((portfolio, i) => (
							<div
								className="group rounded-xl overflow-hidden relative mt-6"
								key={i}
							>
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-auto w-full"
								/>
								<div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
									<h5 className="font-medium text-xl">{portfolio.title}</h5>
									<p className="mb-0">{portfolio.categories.join(", ")}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Flyers;
