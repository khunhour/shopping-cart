import React from "react";

export default function Card({ item, addToCart, toggleWishlist }) {
	return (
		<div>
			<img src={item.image} alt="product" />
			<div>{item.title}</div>
			<div>{item.price}$</div>
			<button onClick={() => addToCart(item.id, item.category)}>
				Add to Cart
			</button>
			<button onClick={() => toggleWishlist(item.id, item.category)}>
				{item.inWishlist ? "in wishlist" : "not in wish list"}
			</button>
		</div>
	);
}
