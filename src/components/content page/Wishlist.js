import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import Card from "../Card";

export default function Wishlist({ addToCart, toggleWishlist }) {
	const wishlistItems = useContext(allItemsContext).wishlist;
	if (wishlistItems.length === 0) {
		return <div>No Items In Your wishlist</div>;
	} else {
		return (
			<div>
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
}
