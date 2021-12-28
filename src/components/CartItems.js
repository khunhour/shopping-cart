import React from "react";

export default function CartItems({
	item,
	incrementQuantity,
	decrementQuantity,
}) {
	return (
		<div>
			<div>
				<img src={item.info.image} alt="product" />
				<div>
					<div>{item.info.title}</div>
					<div>
						Quantity:
						<button onClick={() => decrementQuantity(item.info.id)}>
							-
						</button>
						{item.quantity}
						<button onClick={() => incrementQuantity(item.info.id)}>
							+
						</button>
					</div>
					<div>Total: {item.info.price * item.quantity}$</div>
				</div>
				<button>Remove</button>
			</div>
		</div>
	);
}
