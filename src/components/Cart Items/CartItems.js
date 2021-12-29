import React from "react";
import "./CartItems.css";
export default function CartItems({
	item,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
}) {
	const id = item.info.id;
	const total = (item.info.price * item.quantity).toFixed(2);
	return (
		<div className="cart-items">
			<img src={item.info.image} alt="product" />
			<div className="cart-items-info">
				<div>{item.info.title}</div>
				<div>
					{"Quantity: "}
					<button
						className="minus-btn"
						onClick={() => decrementQuantity(id)}
					>
						-
					</button>
					{` ${item.quantity} `}
					<button
						className="plus-btn"
						onClick={() => incrementQuantity(id)}
					>
						+
					</button>
				</div>
				<div>Total: {total}$</div>
				<button onClick={() => removeFromCart(id)}>Remove</button>
			</div>
		</div>
	);
}
