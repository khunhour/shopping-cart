import React from "react";
import Men from "./content page/Men";
import Women from "./content page/Women";

export default function Main({ addToCart, addToWishList }) {
	return (
		<div>
			<Men addToCart={addToCart} addToWishList={addToWishList} />
			<Women addToCart={addToCart} addToWishList={addToWishList} />
		</div>
	);
}
