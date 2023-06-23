import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Welcome from "./Welcome";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Welcome />
			<div className="container-fluid">
				<div className="row mt-2 p-3">
					<Card 
						image="https://placehold.co/500x325/"
						header="Card Title"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						button="Find out more!"
					/>
					
					<Card 
						image="https://placehold.co/500x325?text=Hello+World"
						header="Card Title 2"
						content="Very interesting lines of text Very interesting lines of text Very interesting lines of text Very interesting lines of text "
						button="Find out more!"
					/>
					<Card 
						image="https://placehold.co/500x325?text=Image"
						header="Card Title 3"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						button="Find out more!"
					/>
					<Card 
						image="https://placehold.co/500x325?text=Another+Image"
						header="Card Title 4"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						button="Find out more!!!!!"
					/>
				</div>
			</div>
			<Footer />
			

		</>
	);
};

export default Home;

// where to add variables to use in components?