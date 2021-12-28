import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
export default function Card({ item, addToCart, toggleWishlist }) {
	const icon = item.inWishlist ? (
		<MdFavorite color="red" fontSize="1.8em" />
	) : (
		<MdFavoriteBorder fontSize="1.8em" />
	);
	return (
		<div className="card">
			<img src={item.image} alt="product" />
			<div>{item.title}</div>
			<div>{item.price}$</div>
			<div className="button-container">
				<button
					className="add-to-cart-btn"
					onClick={() => addToCart(item.id, item.category)}
				>
					Add to Cart
				</button>
				<button
					className="toggle-wishlist-btn"
					onClick={() => toggleWishlist(item.id, item.category)}
				>
					{icon}
				</button>
			</div>
		</div>
	);
}
