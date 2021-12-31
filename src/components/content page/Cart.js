import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import CartItems from "../Cart Items/CartItems";

export default function Cart({
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	clearCart,
}) {
	const cartItems = useContext(allItemsContext).cartItems;

	let cart;
	if (cartItems.length === 0) {
		cart = <h4>Your Cart is Empty.</h4>;
	} else {
		const totalPrice = getTotal(cartItems);
		cart = (
			<div className="cart-items-container">
				{cartItems.map((item) => {
					return (
						<CartItems
							item={item}
							key={item.id}
							incrementQuantity={incrementQuantity}
							decrementQuantity={decrementQuantity}
							removeFromCart={removeFromCart}
						/>
					);
				})}
				<div className="cart-items-total">
					<div>Total: {totalPrice}$</div>
					<button onClick={clearCart}>Proceed to Checkout</button>
				</div>
			</div>
		);
	}
	return (
		<main>
			<h2>Check Out</h2>
			{cart}
		</main>
	);
}

function getTotal(items) {
	const total = items.reduce((sum, item) => {
		return (sum += item.quantity * item.info.price);
	}, 0);
	return total.toFixed(2);
}
