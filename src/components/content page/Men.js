import React from "react";
import Card from "../Card";

export default function Men({ menItems }) {
	return (
		<div>
			{menItems.map((item) => {
				return <Card item={item} key={item.id} />;
			})}
		</div>
	);
}
