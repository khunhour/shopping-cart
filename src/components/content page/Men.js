import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card";

export default function Men({ addToCart, toggleWishlist }) {
	const menItems = useContext(allItemsContext).menItems;
	if (!menItems) return;
	return (
		<div className="card-container">
			{menItems.map((item) => {
				return (
					<Card
						item={item}
						key={item.id}
						addToCart={addToCart}
						toggleWishlist={toggleWishlist}
					/>
				);
			})}
		</div>
	);
}
