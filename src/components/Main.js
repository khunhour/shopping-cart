import React from "react";
import Men from "./content page/Men";
import Women from "./content page/Women";

export default function Main({ menItems, womenItems }) {
	return (
		<div>
			<Men menItems={menItems} />
			<Women womenItems={womenItems} />
		</div>
	);
}
