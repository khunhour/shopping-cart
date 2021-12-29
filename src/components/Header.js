import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { allItemsContext } from "../App";
import { MdFavorite, MdHome } from "react-icons/md";
export default function Header() {
	const cartItems = useContext(allItemsContext).cartItems;
	const totalItems = getTotalQuantities(cartItems);
	return (
		<header>
			<div className="upper-nav">
				<div className="logo">dev:store</div>
				<div className="upper-nav-links">
					<Link to="/">
						<MdHome /> Home
					</Link>
					<Link to="/wishlist">
						<MdFavorite /> WishList
					</Link>
					<Link to="/checkout">
						<MdShoppingCart color="white" /> Cart{`(${totalItems})`}
					</Link>
				</div>
			</div>
			<nav className="lower-nav">
				<Link to="/men">Men</Link>
				<Link to="/women">Women</Link>
			</nav>
		</header>
	);
}

function getTotalQuantities(items) {
	const total = items.reduce((sum, item) => {
		return (sum += item.quantity);
	}, 0);
	return total;
}
