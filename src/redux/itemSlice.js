import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
	const womenData = await fetch(
		"https://fakestoreapi.com/products/category/women's%20clothing"
	);
	const menData = await fetch(
		"https://fakestoreapi.com/products/category/men's%20clothing"
	);
	const jsonWomenData = await womenData.json();
	const jsonMenData = await menData.json();
	const formattedMenData = jsonMenData.map((item) => {
		return {
			...item,
			inWishlist: false,
			cart: {
				inCart: false,
				quantity: 0,
			},
		};
	});
	const formattedWomenData = jsonWomenData.map((item) => {
		return {
			...item,
			inWishlist: false,
			cart: {
				inCart: false,
				quantity: 0,
			},
		};
	});
	const allItems = formattedMenData.concat(formattedWomenData);
	return allItems;
});

export const itemSlice = createSlice({
	name: "items",
	initialState: [],
	reducers: {
		increment: (state) => {
			state.quantity += 1;
		},
		decrement: (state) => {
			state.quantity -= 1;
		},
	},
	extraReducers: {
		[fetchItems.fulfilled]: (state, action) => {
			state.push(...action.payload);
		},
	},
});

export const { increment, decrement, itemsFetched } = itemSlice.actions;
export default itemSlice.reducer;
