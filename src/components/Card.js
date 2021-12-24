import React from "react";

export default function Card({ item, addToCart, addToWishList }) {
	return (
		<div>
			<img src={item.image} alt="product" />
			<div>{item.title}</div>
			<div>{item.price}$</div>
			<button onClick={(e) => addToCart(e, item.id)}>Add to Cart</button>
			<button onClick={addToWishList}>Add To WishList</button>
		</div>
	);
}
