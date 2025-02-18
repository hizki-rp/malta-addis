import React from "react";

const About = () => {
	return (
		<section className="ezy__about13 light py-20 md:py-28 bg-whie dark:bg-[#1d3c64] text-zinc-900 dark:text-white relative">
			<div className="container px-4 py-8">
				<div className="grid grid-cols-12 gap-5 justify-center items-center">
					<div className="col-span-12 lg:col-span-6">
						<div className="lg:px-7">
							<h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2 bg-gradient-to-r from-rose-600 via-amber-500 to-amber-600 inline-block text-transparent bg-clip-text">
								ABOUT US
							</h1>
							<hr className="w-24 h-1 bg-black dark:bg-white opacity-100 my-6" />
							<p className="text-lg leading-normal opacity-75 my-2">
								We are a team of passionate travel enthusiasts dedicated to
								making your travel dreams a reality. With years of experience in
								the industry, we offer comprehensive visa and travel services
								tailored to your individual needs. Our mission is to provide
								expert guidance, seamless booking experiences, and exceptional
								customer support, ensuring that your journey is smooth,
								stress-free, and unforgettable.
							</p>
							<p className="text-lg leading-normal opacity-75">
								From tourist visas and study permits to work visas and
								destination guides, we've got you covered. We also offer a range
								of ticketing services, including flight and event bookings,
								hotel reservations, and travel packages. We believe in building
								long-lasting relationships with our clients, and we're committed
								to providing personalized attention and support every step of
								the way.
							</p>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="w-[36vw] absolute top-0 right-0 bottom-0 float-left bg-black bg-opacity-30" />
						<div className="relative flex justify-center lg:flex-col lg:pl-20">
							<img
								src="https://cdn.easyfrontend.com/pictures/about/about13_1.jpg"
								alt=""
								className="rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16"
							/>
							<img
								src="https://cdn.easyfrontend.com/pictures/about/about13_2.jpg"
								alt=""
								className="hidden md:block rotate-45 w-60 h-60 lg:w-96 lg:h-96 object-cover mt-16 lg:-mt-16"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
