import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import "./Card.css";

export default function Card({ item, addToCart, toggleWishlist }) {
	const icon = item.inWishlist ? (
		<MdFavorite color="red" fontSize="1em" />
	) : (
		<MdFavoriteBorder fontSize="1em" />
	);
	return (
		<div className="card">
			<div className="card-upper">
				<div className="card-image">
					<img src={item.image} alt="product" />
				</div>
				<div>{item.title}</div>
			</div>
			<div className="card-lower">
				<div>Price: {item.price}$</div>
				<div className="card-button-container">
					<button
						className="card-add-to-cart-btn"
						onClick={() => addToCart(item.id, item.category)}
					>
						Add to Cart
					</button>
					<button
						className="card-toggle-wishlist-btn"
						onClick={() => toggleWishlist(item.id, item.category)}
					>
						{icon}
					</button>
				</div>
			</div>
		</div>
	);
}
