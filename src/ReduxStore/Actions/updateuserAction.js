import axios from "axios";
import { REQUEST_UPDATE_USERS, REQUEST_UPDATE_USERS_SUCCESS, REQUEST_UPDATE_USERS_FAIL } from "../Constant";

export const UpdateUserAction = (data, id, setcreden, setform) => async (dispath) => {
	const token = localStorage.getItem("token");

	const updteUrl = "https://shivila.herokuapp.com/api/v1/users/" + id + "/";

	dispath({
		type: REQUEST_UPDATE_USERS,
	});

	await axios
		.put(updteUrl, data, {
			headers: {
				Authorization: "Token " + token,
			},
		})
		.then((res) => {
			console.log(res);
			alert("sucess");
			dispath({
				type: REQUEST_UPDATE_USERS_SUCCESS,
				payload: {
					statusCode: res.status,
				},
			});
		})
		.catch((err) => {
			console.log(err.response);
			dispath({
				type: REQUEST_UPDATE_USERS_FAIL,
				payload: {
					error: err.response.status,
				},
			});
		});

	setcreden({});
	setform({
		full_name: "",
		email: "",
		phone_number: "",
		password: "",
	});
};
