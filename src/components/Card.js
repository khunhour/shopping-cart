import React from "react";

export default function Card({ item, addToCard, addToWishList }) {
	return (
		<div>
			<img src={item.image} alt="product" />
			<div>{item.title}</div>
			<div>{item.price}$</div>
			<button onClick={addToCard}>Add to Cart</button>
			<button onClick={addToWishList}>Add To WishList</button>
		</div>
	);
}
