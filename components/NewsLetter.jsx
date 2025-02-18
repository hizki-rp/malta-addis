"use client";

import React, { useState } from "react";

const SubscribeForm = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null); // Clear any previous errors

		if (!email) {
			setError("Please enter your email address.");
			return;
		}

		// Basic email validation (you can use a more robust regex)
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		try {
			// Here you would typically make an API call to your backend
			// to subscribe the user.  I'm using a mock fetch for demonstration.
			const response = await fetch("/api/subscribe", {
				// Replace with your API endpoint
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			if (!response.ok) {
				const data = await response.json(); // Try to get error message from backend
				throw new Error(data.message || "Subscription failed."); // Display backend's error or generic
			}

			setSubscribed(true);
			setEmail(""); // Clear the input field
		} catch (err) {
			setError(err.message);
		}
	};

	if (subscribed) {
		return <p className="text-white">Thank you for subscribing!</p>;
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group mb-4 mt-3">
				<input
					type="email"
					className="h-14 leading-10 bg-blue-100 bg-opacity-10 border border-transparent rounded-lg focus:outline-none focus:border-gray-400 w-full placeholder:text-white pl-4"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{error && <p className="text-red-500 mt-1">{error}</p>}{" "}
				{/* Display error message */}
			</div>

			<button
				type="submit"
				className="px-7 py-3 border hover:bg-white hover:text-black font-bold text-white hover:bg-opacity-90 rounded transition w-full mt-2"
			>
				Subscribe
			</button>
		</form>
	);
};

const NewsLetter = () => {
	return (
		<section className="px-16 ezy__cta19 light py-14 md:py-24 bg-gray-200  text-gray-900 relative">
			<div className="container px-4">
				<div className=" dark:bg-[#0b1727] rounded-2xl overflow-hidden relative p-6 lg:p-12">
					{/* ... (Your lines and other decorative elements) */}
					<div className="grid grid-cols-12 justify-between p-4 lg:p-12">
						<div className="col-span-12 lg:col-span-6">
							<h1 className="text-xl md:text-4xl leading-none font-bold mb-6 text-gray-100">
								Subscribe for Newsletter
							</h1>
							<div className="grid grid-cols-12">
								<div className="col-span-12 lg:col-span-11">
									<p className="leading-6 lg:pr-10 text-justify text-gray-200">
										Stay up-to-date with the latest travel deals, tips, and
										inspiration. Subscribe to our newsletter and be the first to
										know about exclusive offers and exciting destinations.
									</p>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
							<SubscribeForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
