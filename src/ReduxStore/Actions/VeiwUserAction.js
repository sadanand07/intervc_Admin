import axios from "axios";
import { REQUEST_LIST_USERS, REQUEST_USERS_SUCCESS, REQUEST_USERS_FAIL } from "../Constant";

const usersUrl = "http://shivila.herokuapp.com/api/v1/users/all/?role=hr";

export const VeiwUserAction = () => async (dispatch) => {
	const token = localStorage.getItem("token");

	dispatch({
		type: REQUEST_LIST_USERS,
	});

	await axios
		.get(usersUrl, {
			headers: {
				Authorization: "Token " + token,
			},
		})
		.then((res) => {
			dispatch({ type: REQUEST_USERS_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log(err.response);
			dispatch({
				type: REQUEST_USERS_FAIL,
				payload: {
					error: err.response.status,
				},
			});
		});
};
