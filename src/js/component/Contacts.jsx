import React from "react";
import ContactCard from "./ContactCard.jsx";
import data from "../data.js";

function Contacts() {
	return (
		<>
			{data.map((item, index) => {
				return <ContactCard item={item} key={index} />;
			})}
		</>
	);
}

export default Contacts;
