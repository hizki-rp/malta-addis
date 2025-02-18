import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlane,
	faPassport,
	faGraduationCap,
	faMapMarkerAlt,
	faHandHoldingHeart,
	faUsers,
	faTicketAlt,
	faHotel,
	faGift,
	faBell, // Added icon for alerts
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
	{
		icon: faPlane,
		title: "Flight Booking",
		description:
			"Effortlessly reserve domestic and international flights with our user-friendly booking system.",
	},
	{
		icon: faTicketAlt,
		title: "Event Tickets",
		description:
			"Secure tickets for concerts, sports events, theater performances, and other live entertainment.",
	},
	{
		icon: faBell, // Using the bell icon for alerts
		title: "Travel Alerts & Updates",
		description:
			"Stay informed with real-time updates on travel conditions, delays, and cancellations.",
	},
	{
		icon: faPlane, // Reusing the plane icon for travel packages
		title: "Travel Packages",
		description:
			"Explore bundled travel options that combine flights, accommodations, and other services for a comprehensive travel experience.",
	},
	{
		icon: faHotel,
		title: "Hotel Booking",
		description:
			"Book accommodations ranging from luxury hotels to budget-friendly options, ensuring a comfortable stay wherever you go.",
	},
	{
		icon: faGift,
		title: "Loyalty Programs",
		description:
			"Enjoy exclusive rewards and benefits with our frequent traveller loyalty programs.",
	},
	{
		icon: faUsers,
		title: "Bulk Booking Services",
		description:
			"Streamline your group or corporate travel arrangements with our efficient bulk booking services.",
	},
	{
		icon: faHandHoldingHeart, // Reusing the icon for customer support
		title: "Customer Support",
		description:
			"Receive dedicated assistance for all your booking inquiries, changes, and issues.",
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
			<h5 className="text-2xl font-medium mb-2">{service.title}</h5>
			<p className="opacity-80 text-base">{service.description}</p>
		</div>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Ticketing = () => {
	return (
		<section className="px-16 ezy__service23 py-14 md:py-24 bg-gray-100 text-zinc-900">
			<div className="container mx-auto px-4">
				<h1 className="text-6xl text-center text-gray-800 mb-8">
					Ticketing Services
				</h1>
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

export default Ticketing;
