import axios from "axios";

import { AUTHENTICATION_REQUEST_FAIL, AUTHENTICATION_REQUEST_SUCCESS, REQUEST_AUTHENTICATION } from "../Constant";

const token_genertion_Url = "https://shivila.herokuapp.com/login/";

export const LoginAction = (credentials, navigate) => async (dispatch) => {
	dispatch({ type: REQUEST_AUTHENTICATION });

	await axios
		.post(token_genertion_Url, credentials)

		.then((res) => {
			navigate("/");
			const { data } = res;
			localStorage.setItem("token", data.token);

			return dispatch({
				type: AUTHENTICATION_REQUEST_SUCCESS,
				payload: {
					auth: true,
					token: data.token,
				},
			});
		})
		.catch((err) => {
			navigate("/login");
			return dispatch({
				type: AUTHENTICATION_REQUEST_FAIL,
				payload: {
					message: err,
				},
			});
		});

	/*  await axios.get(authentication_url, {
        headers: {
            authorization: 'Bearer ' + token
        }
    })
        .then(res => {
            if (res.status == 200) {
                return dispatch({
                    type: AUTHENTICATION_REQUEST_SUCCESS,
                    payload: {
                        auth: true,
                        token: res.data.token,
                    }
                })

            }

        })
        .catch(err => {
            return dispatch({
                type: AUTHENTICATION_REQUEST_FAIL,
                payload: {
                    isLoading: false,
                    authenticted: false,
                    payload: "Something went wrong or Wrong Credentials "

                }
            })
        })
 */
};
