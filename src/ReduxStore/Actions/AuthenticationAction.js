import axios from "axios";
import { AUTHENTICATION_REQUEST_FAIL, AUTHENTICATION_REQUEST_SUCCESS, REQUEST_AUTHENTICATION } from "../Constant";

const authentication_url = "https://shivila.herokuapp.com/user/";

export const AuthenticationAction = () => async (dispatch) => {
	const token = localStorage.getItem("token");

	dispatch({ type: REQUEST_AUTHENTICATION });

	await axios
		.get(authentication_url, {
			headers: {
				Authorization: "Token " + token,
			},
		})
		.then((res) => {
			if (res.status === 200) {
				dispatch({
					type: AUTHENTICATION_REQUEST_SUCCESS,
					payload: {
						auth: true,
						token: token,
					},
				});
			}
		})
		.catch((err) => {
			dispatch({
				type: AUTHENTICATION_REQUEST_FAIL,
				payload: {
					isLoading: false,
					authenticated: false,
					message: err,
				},
			});
		});
};
