import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<img src="" alt="logo" />
			<div>
				<Link to="/">Home</Link> | {""}
				<Link to="/wishlist">WishList</Link>
				<Link to="/checkout">Checkout</Link>
			</div>
			<Nav />
		</header>
	);
}
