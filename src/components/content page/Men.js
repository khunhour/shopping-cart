import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card";

export default function Men() {
	const menItems = useContext(allItemsContext).menItems;
	return (
		<div>
			{menItems.map((item) => {
				return <Card item={item} key={item.id} />;
			})}
		</div>
	);
}
