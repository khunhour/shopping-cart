import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
	const [menItems, setMenItems] = useState([]);
	const [womenItems, setWomenItems] = useState([]);
	const [wishList, setWishList] = useState({});
	const [cart, setCard] = useState({});

	// fetch data on mount
	useEffect(() => {
		fetchMenItems();
		fetchWomenItems();
	}, []);

	const fetchMenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/men's%20clothing"
		);
		const formattedData = await data.json();
		setMenItems(formattedData);
	};

	const fetchWomenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/women's%20clothing"
		);
		const formattedData = await data.json();
		setWomenItems(formattedData);
	};

	return (
		<div>
			<h1>App</h1>
			<Header />
			<Main menItems={menItems} womenItems={womenItems} />
		</div>
	);
}
