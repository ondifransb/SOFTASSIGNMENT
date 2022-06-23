import axios from "axios";

export const FetchData = () => {
	return async (dispatch, getState) => {
		// console.log("clicked");
		await axios.get("https://swapi.dev/api/people/10/").then((res) => {
			// console.log(res.data);
			dispatch({
				type: "GETDATA",
				alldata: res.data,
			});
		});
	};
};
