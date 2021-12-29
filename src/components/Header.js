import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="upper-nav">
				<h3>{"dev : store"}</h3>
				<div className="upper-nav-links">
					<Link to="/">Home</Link>
					<Link to="/wishlist">WishList</Link>
					<Link to="/checkout">Checkout</Link>
				</div>
			</div>
			<nav className="lower-nav">
				<Link to="/men">Men</Link>
				<Link to="/women">Women</Link>
			</nav>
		</header>
	);
}
