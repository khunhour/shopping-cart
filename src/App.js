import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
	const [menItems, setMenItems] = useState([]);
	const [womenItems, setWomenItems] = useState([]);
	const [wishList, setWishList] = useState({});
	const [cartItems, setCartItems] = useState({});

	// fetch data on mount
	useEffect(() => {
		fetchMenItems();
		fetchWomenItems();
	}, []);

	const addToWishList = (e, id) => {
		const allItems = menItems.concat(womenItems);
		const targetItem = allItems.filter((item) => item.id === id);
		setWishList(...wishList, targetItem);
	};

	const addToCart = (e, id) => {
		const allItems = menItems.concat(womenItems);
		const targetItem = allItems.filter((item) => item.id === id);
		setCartItems(...cartItems, targetItem);
	};

	const fetchMenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/men's%20clothing"
		);
		const formattedData = await data.json();
		console.log(formattedData);
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
