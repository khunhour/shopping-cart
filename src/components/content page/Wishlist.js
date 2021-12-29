import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card/Card";

export default function Wishlist({ addToCart, toggleWishlist }) {
	const wishlistItems = useContext(allItemsContext).wishlist;
	let wishlist;
	if (wishlistItems.length === 0) {
		wishlist = <h4>Your Wishlist Is Empty.</h4>;
	} else {
		wishlist = (
			<div className="card-container">
				{wishlistItems.map((item) => {
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
	return (
		<main>
			<h2>Wishlist</h2>
			{wishlist}
		</main>
	);
}
