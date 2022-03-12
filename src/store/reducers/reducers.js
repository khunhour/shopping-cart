export default function cartReducer(state, action) {
	switch (action.type) {
		case "increment":
			return state + action.payload;
		case "decrement":
			return state - action.payload;
		default:
			return state;
	}
}
