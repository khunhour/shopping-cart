import React from "react";

export default function Card({ item, addToCart, toggleWishList }) {
	return (
		<div>
			<img src={item.image} alt="product" />
			<div>{item.title}</div>
			<div>{item.price}$</div>
			<button onClick={() => addToCart(item.id)}>Add to Cart</button>
			<button onClick={() => toggleWishList(item.id)}>
				Add To WishList
			</button>
		</div>
	);
}
