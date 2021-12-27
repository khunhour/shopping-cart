import React from "react";

import Cart from "./content page/Cart";
import Men from "./content page/Men";
import Women from "./content page/Women";

export default function Main({ addToCart, toggleWishList }) {
	return (
		<div>
			<Men addToCart={addToCart} toggleWishList={toggleWishList} />
			<Women addToCart={addToCart} toggleWishList={toggleWishList} />
			<Cart />
		</div>
	);
}
