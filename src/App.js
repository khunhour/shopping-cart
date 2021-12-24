import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export const allItemsContext = React.createContext(null);
export const eventListenerContext = React.createContext(null);

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

	const addToWishList = (e) => {
		const allItemsArray = menItems.concat(womenItems);
		const targetItem = allItemsArray.filter(
			(item) => item.id === e.target.id
		);
		setWishList(...wishList, targetItem);
	};

	const addToCart = (e) => {
		// add quantity
		const allItemsArray = menItems.concat(womenItems);
		const targetItem = allItemsArray.filter(
			(item) => item.id === e.target.id
		);
		setCartItems(...cartItems, targetItem);
	};

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

	let allItems = { menItems, womenItems };
	let allEventListener = { addToCart, addToWishList };
	console.group(allEventListener);
	console.log(menItems);
	console.log(allItems);
	return (
		// add eventlistener context
		<allItemsContext.Provider value={allEventListener}>
			<allItemsContext.Provider value={allItems}>
				<div>
					<h1>App</h1>
					<Header />
					<Main />
				</div>
			</allItemsContext.Provider>
		</allItemsContext.Provider>
	);
}
