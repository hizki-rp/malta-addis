import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlane,
	faPassport,
	faGraduationCap,
	faMapMarkerAlt,
	faHandHoldingHeart,
	faUsers,
} from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import PropTypes from "prop-types";

const serviceList = [
	{
		icon: faPassport,
		title: "Tourist Visa",
		description:
			"Explore the world with ease! We simplify the tourist visa process, providing expert guidance and support to ensure your travel dreams become a reality.",
	},
	{
		icon: faGraduationCap,
		title: "Study Visa",
		description:
			"Unlock your academic potential abroad. Our study visa services help you navigate the application process, making your international education goals achievable.",
	},
	{
		icon: faPlane,
		title: "Work Visa",
		description:
			"Embark on a global career journey. We assist you in obtaining the necessary work permits and visas, opening doors to exciting employment opportunities worldwide.",
	},
	{
		icon: faMapMarkerAlt,
		title: "Destination Guides",
		description:
			"Plan your perfect trip with our comprehensive destination guides. Discover hidden gems, local insights, and essential travel tips for unforgettable experiences.",
	},
	{
		icon: faHandHoldingHeart,
		title: "General Visa Assistance",
		description:
			"We provide expert guidance and support for all your visa needs. From application preparation to document submission, we're here to assist you every step of the way.",
	},
	{
		icon: faUsers,
		title: "Group Travel Coordination",
		description:
			"Simplify group travel planning with our dedicated coordination services. We handle logistics, bookings, and more, ensuring a seamless and enjoyable trip for everyone.",
	},
];

const ServiceItem = ({ service }) => (
	<div className="bg-white rounded-lg p-6 md:p-8 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-full flex flex-col">
		<div
			className={`flex items-center w-20 h-20 bg-white shadow-xl rounded-full justify-center p-5 text-3xl text-primary mb-4`}
		>
			<FontAwesomeIcon
				icon={service.icon}
				aria-label={service.title + " icon"}
			/>
		</div>
		<div className="flex-grow">
			<h5 className="text-xl font-medium mb-2">{service.title}</h5>
			<p className="opacity-80 text-base">{service.description}</p>
		</div>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Service = () => {
	return (
		<section className="px-16 ezy__service23 py-12 bg-gray-100 text-zinc-900 mt-[-40px]">
			{" "}
		
			{/* Removed dark mode classes */}
			<div className="container mx-auto px-4">
				<h1 className="text-5xl text-center text-gray-800 pt-4">Our Services</h1>
				<div className="flex flex-wrap">
					<div className="w-full text-center mb-12">
						{/* ... (Your title and description) */}
					</div>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{serviceList.map((service, i) => (
						<div key={i}>
							<ServiceItem service={service} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
