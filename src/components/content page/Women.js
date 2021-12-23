import React from "react";
import Card from "../Card";

export default function Women({ womenItems }) {
	return (
		<div>
			{womenItems.map((item) => {
				return <Card item={item} key={item.id} />;
			})}
		</div>
	);
}
