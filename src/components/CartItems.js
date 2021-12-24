import React from "react";

export default function CartItems({ item }) {
	return (
		<div>
			<div>
				<img src={item.image} alt="product" />
				<div>
					<div>{item.title}</div>
					<div>Quantity</div>
					<div>{item.total}</div>
				</div>
				<button>Remove</button>
			</div>
		</div>
	);
}
