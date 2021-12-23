import React from "react";

export default function Card({ item }) {
	return (
		<div>
			<img src={item.image} alt="product" />
			<div>{item.title}</div>
			<div>{item.price}$</div>
			<button>Add to Cart</button>
		</div>
	);
}
