import React from "react";
import Card from "../Card";

export default function Men({ menItems }) {
	console.log(menItems);
	return (
		<div>
			{menItems.map((item) => {
				return <Card item={item} key={item.id} />;
			})}
		</div>
	);
}
