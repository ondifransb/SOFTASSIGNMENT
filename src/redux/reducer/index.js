import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const axiosState = {
	starwars: [{}],
	id: [1],
};

function reducers(state = axiosState, action) {
	switch (action.type) {
		case "GETDATA":
			return {
				...state,
				starwars: action.alldata,
			};

		default:
			return state;
	}
}

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
