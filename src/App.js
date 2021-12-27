import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export const allItemsContext = React.createContext(null);
export const cartItemsContext = React.createContext(null);

export default function App() {
	const [menItems, setMenItems] = useState([]);
	const [womenItems, setWomenItems] = useState([]);
	const [wishList, setWishList] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const allItems = { menItems, womenItems };

	// fetch data on mount
	useEffect(() => {
		fetchMenItems();
		fetchWomenItems();
	}, []);

	const toggleWishList = (id) => {
		const allItemsArray = menItems.concat(womenItems);
		const existingItem = wishList.filter((item) => item.id === id);
		const targetItem = allItemsArray.filter((item) => item.id === id)[0];
		if (existingItem.length === 0) {
			setWishList((prevState) => [...prevState, targetItem]);
		} else {
			let updatedItems = wishList.filter((item) => item.id !== id);
			setWishList(updatedItems);
		}
	};

	// remove e
	const addToCart = (id) => {
		const allItemsArray = menItems.concat(womenItems);
		const targetItem = allItemsArray.filter((item) => item.id === id)[0];
		const existingItem = cartItems.filter((item) => item.info.id === id);

		if (existingItem.length === 0) {
			const newItem = { info: targetItem, quantity: 1 };
			setCartItems((prevState) => [...prevState, newItem]);
		} else {
			let updatedItems = cartItems.map((item) => {
				if (item.info.id === id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setCartItems(updatedItems);
		}
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

	return (
		<allItemsContext.Provider value={allItems}>
			<cartItemsContext.Provider value={cartItems}>
				<div>
					<h1>App</h1>
					<Header />
					<Main
						addToCart={addToCart}
						toggleWishList={toggleWishList}
					/>
				</div>
			</cartItemsContext.Provider>
		</allItemsContext.Provider>
	);
}
