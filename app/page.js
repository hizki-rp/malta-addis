import Flyers from "../components/Flyers";
import AnimatedCards from "../components/AnimatedCards";
import Destinations from "../components/Destinations";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Ticketing from "../components/Ticketing";
import Contact from "../components/Contact";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
	return (
		<>
			<Hero />
			<Service />
			<Flyers />
			<NewsLetter />
			<Ticketing />
			<Contact />

			{/*<AnimatedCards />*/}
		</>
	);
}
