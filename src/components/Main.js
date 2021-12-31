import React from "react";
import Cart from "./content page/Cart";
import Men from "./content page/Men";
import Wishlist from "./content page/Wishlist";
import Women from "./content page/Women";
import Home from "./content page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

export default function Main({
	addToCart,
	toggleWishlist,
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	clearCart,
}) {
	console.log("main");
	return (
		<>
			<BrowserRouter basename="/shopping-cart/">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path="/men"
						element={
							<>
								<Header />
								<Men
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/women"
						element={
							<>
								<Header />
								<Women
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Cart
									incrementQuantity={incrementQuantity}
									decrementQuantity={decrementQuantity}
									removeFromCart={removeFromCart}
									clearCart={clearCart}
								/>
							</>
						}
					/>
					<Route
						path="wishlist"
						element={
							<>
								<Header />
								<Wishlist
									addToCart={addToCart}
									toggleWishlist={toggleWishlist}
								/>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
