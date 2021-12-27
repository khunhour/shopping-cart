import React from "react";

import Cart from "./content page/Cart";
import Men from "./content page/Men";
import Wishlist from "./content page/Wishlist";
import Women from "./content page/Women";

export default function Main({ addToCart, toggleWishlist }) {
	return (
		<div>
			<Men addToCart={addToCart} toggleWishlist={toggleWishlist} />
			<Women addToCart={addToCart} toggleWishlist={toggleWishlist} />
			<Cart />
			<Wishlist addToCart={addToCart} toggleWishlist={toggleWishlist} />
		</div>
	);
}
