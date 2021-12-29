import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Women({ addToCart, toggleWishlist }) {
	const womenItems = useContext(allItemsContext).womenItems;
	if (!womenItems) return;
	return (
		<main>
			<h2>Women</h2>
			<div className="card-container">
				{womenItems.map((item) => {
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
		</main>
	);
}
