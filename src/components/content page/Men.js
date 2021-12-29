import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Men({ addToCart, toggleWishlist }) {
	const menItems = useContext(allItemsContext).menItems;
	if (!menItems) return;
	return (
		<main>
			<h2>Men</h2>
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
		</main>
	);
}
