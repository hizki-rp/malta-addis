"use client";

import React, { useState } from "react";

const ContactForm = () => {
	const [validated, setValidated] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);

		if (form.checkValidity() === true) {
			// Here, you would typically send the form data to your server
			// using fetch or Axios.  For this example, we'll just log it.
			console.log("Form Data:", formData);

			// Clear the form after successful submission (optional)
			setFormData({ name: "", email: "", message: "" });
			setValidated(false); // Reset validation
			alert("Message sent successfully!"); // Or a better user feedback
		}
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<form noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required // Add required attribute for validation
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
					value={formData.message}
					onChange={handleChange}
					required
				></textarea>
			</div>
			<div className="text-start">
				<button
					type="submit"
					className="border hover:bg-opacity-90 hover:bg-gray-100 hover:text-gray-900 text-white px-8 py-3 rounded mb-4"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-12">
		<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contact Us
		</h2>
		<p className="text-lg mb-12">
			Fill out the form below, and we'll get back to you as soon
			as possible.
		</p>

		<ContactForm />
	</div>
);

const Contact = () => {
	return (
		<section className="ezy__contact11 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden ">
			<div
				className="bg-no-repeat bg-left-bottom bg-cover py-14"
				style={{
					backgroundImage:
						"url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)",
				}}
			>
				<div className="container px-14 pt-20">
					<div className="grid grid-cols-12 py-6">
						<div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0 px-6">
							<h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">
								Get in Touch
							</h2>
							<p className="text-lg text-white">
								We're eager to assist you with your travel and visa needs. Our
								team is dedicated to providing personalized service and expert
								guidance. Contact us today to begin your journey!
							</p>
						</div>
						<div className="col-span-12 lg:col-span-5 lg:col-start-8">
							<ContactFormCard />
						</div>
					</div>
				</div>
			</div>
			<div className="ezy__contact11-blank-card"></div>
		</section>
	);
};

export default Contact;
