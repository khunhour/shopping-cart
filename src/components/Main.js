import React from "react";
import Men from "./content page/Men";
import Women from "./content page/Women";

export default function Main({
	menItems,
	womenItems,
	addToCart,
	addToWishlist,
}) {
	return (
		<div>
			<Men
				menItems={menItems}
				addToCart={addToCart}
				addToWishlist={addToWishlist}
			/>
			<Women
				womenItems={womenItems}
				addToCart={addToCart}
				addToWishlist={addToWishlist}
			/>
		</div>
	);
}
