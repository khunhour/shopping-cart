import React from "react";

export default function CartItems({
	item,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
}) {
	const id = item.info.id;
	const total = (item.info.price * item.quantity).toFixed(2);
	return (
		<div>
			<div>
				<img src={item.info.image} alt="product" />
				<div>
					<div>{item.info.title}</div>
					<div>
						Quantity:
						<button onClick={() => decrementQuantity(id)}>-</button>
						{item.quantity}
						<button onClick={() => incrementQuantity(id)}>+</button>
					</div>
					<div>Total:{total}$</div>
				</div>
				<button onClick={() => removeFromCart(id)}>Remove</button>
			</div>
		</div>
	);
}
