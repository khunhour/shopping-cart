import React, { useContext } from "react";
import { allItemsContext } from "../../App";
import CartItems from "../CartItems";

export default function Cart({
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
}) {
	const cartItems = useContext(allItemsContext).cartItems;
	if (cartItems.length === 0) {
		return <div>No Items In Your Cart!</div>;
	} else {
		return (
			<div>
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
			</div>
		);
	}
}
