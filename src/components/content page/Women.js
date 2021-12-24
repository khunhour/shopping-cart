import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card";

export default function Women() {
	const womenItems = useContext(allItemsContext).womenItems;
	if (!womenItems) return;
	return (
		<div>
			{womenItems.map((item) => {
				return <Card item={item} key={item.id} />;
			})}
		</div>
	);
}
