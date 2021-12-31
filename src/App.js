import React, { useEffect, useState } from "react";
import Main from "./components/Main";

export const allItemsContext = React.createContext(null);
export const cartItemsContext = React.createContext(null);

export default function App() {
	const [menItems, setMenItems] = useState([]);
	const [womenItems, setWomenItems] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const allItems = { menItems, womenItems, wishlist, cartItems };
	// fetch data on mount
	useEffect(() => {
		fetchMenItems();
		fetchWomenItems();
	}, []);
	// update wishlist based on men and women items updates
	useEffect(() => {
		const menWishlist = menItems.filter((item) => item.inWishlist);
		const womenWishlist = womenItems.filter((item) => item.inWishlist);
		const currentWishlist = menWishlist.concat(womenWishlist);
		setWishlist(currentWishlist);
	}, [menItems, womenItems]);

	const toggleWishlist = (id, category) => {
		if (category === "men's clothing") {
			const updatedItems = menItems.map((item) => {
				if (item.id === id) {
					return { ...item, inWishlist: !item.inWishlist };
				}
				return item;
			});
			setMenItems(updatedItems);
		} else {
			const updatedItems = womenItems.map((item) => {
				if (item.id === id) {
					return { ...item, inWishlist: !item.inWishlist };
				}
				return item;
			});
			setWomenItems(updatedItems);
		}
	};

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

	const clearCart = () => {
		alert("Thank you for shopping at dev:store. Happy Coding!");
		setCartItems([]);
	};

	const incrementQuantity = (id) => {
		let updatedItems = cartItems.map((item) => {
			if (item.info.id === id) {
				return { ...item, quantity: item.quantity + 1 };
			}
			return item;
		});
		setCartItems(updatedItems);
	};

	const decrementQuantity = (id) => {
		const updatedItems = cartItems.map((item) => {
			if (item.info.id === id) {
				if (item.quantity === 0) {
					return item;
				} else {
					return { ...item, quantity: item.quantity - 1 };
				}
			}
			return item;
		});
		const filteredItems = updatedItems.filter((item) => item.quantity > 0);
		setCartItems(filteredItems);
	};

	const removeFromCart = (id) => {
		let updatedItems = cartItems.filter((item) => item.info.id !== id);
		setCartItems(updatedItems);
	};

	const fetchMenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/men's%20clothing"
		);
		const formattedData = await data.json();
		const updatedData = formattedData.map((item) => {
			return { ...item, inWishlist: false };
		});
		setMenItems(updatedData);
	};

	const fetchWomenItems = async () => {
		const data = await fetch(
			"https://fakestoreapi.com/products/category/women's%20clothing"
		);
		const formattedData = await data.json();
		const updatedData = formattedData.map((item) => {
			return { ...item, inWishlist: false };
		});
		setWomenItems(updatedData);
	};

	return (
		<allItemsContext.Provider value={allItems}>
			<div>
				<Main
					addToCart={addToCart}
					toggleWishlist={toggleWishlist}
					incrementQuantity={incrementQuantity}
					decrementQuantity={decrementQuantity}
					removeFromCart={removeFromCart}
					clearCart={clearCart}
				/>
			</div>
		</allItemsContext.Provider>
	);
}
