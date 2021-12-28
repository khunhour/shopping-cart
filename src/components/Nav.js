import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			Nav
			<Link to="/men">Men</Link>
			<Link to="/women">Women</Link>
		</nav>
	);
}
