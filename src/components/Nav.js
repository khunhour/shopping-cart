import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<Link to="/men">Men</Link>
			<Link to="/women">Women</Link>
		</nav>
	);
}
