import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";

const store = configureStore({
	reducer: {
		items: itemSlice,
	},
});

export default store;
// const { count } = useSelector((state) => state.cart);
// const dispatch = useDispatch()

// ()=> dispatch(increment())
