import React from "react";
import Img from "next/image";

import bg1 from "../public/Images/visit1.jpg";
import bg2 from "../public/Images/visit2.jpg";
import bg3 from "../public/Images/visit2.jpg";
import bg4 from "../public/Images/visit4.jpg";

const images = [
	{
		src:
			"https://drive.google.com/file/d/1sGRryPLU2rSnp7myAQsC1LuYiP7JVgvC/view?usp=drive_link", // Placeholder for the image URL
		rotation: "rotate-6", // Class for a slight right tilt
	},
	{
		src: "https://drive.google.com/file/d/1sGRryPLU2rSnp7myAQsC1LuYiP7JVgvC/view?usp=drive_link", // Placeholder for the image URL
		rotation: "-rotate-12", // Class for a pronounced left tilt
	},
	{
		src: "https://drive.google.com/file/d/1sGRryPLU2rSnp7myAQsC1LuYiP7JVgvC/view?usp=drive_link", // Placeholder for the image URL
		rotation: "rotate-6", // Repeat class for consistency or thematic design
	},
	{
		src: "https://drive.google.com/file/d/1sGRryPLU2rSnp7myAQsC1LuYiP7JVgvC/view?usp=drive_link", // Placeholder for the image URL
		rotation: "-rotate-12", // Repeat class for consistency or thematic design
	},
];

const AnimatedCards = () => {
	// Define an array of image objects to make the component more dynamic and easily editable.

	return (
		<div className="hidden lg:grid mt-12 lg:grid-cols-4 mx-auto scale-125">
			{images.map((image, index) => (
				<a href="#_" key={index}>
					<Img
						src={image.src}
				
						width={100}
						height={100}
						className={`rounded-xl  ${image.rotation} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
						alt="#_"
					/>
				</a>
			))}
		</div>
	);
};

export default AnimatedCards;
