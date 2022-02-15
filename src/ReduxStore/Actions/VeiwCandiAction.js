import axios from "axios";
import {
  REQUEST_LIST_CANDI,
  REQUEST_CANDI_SUCCESS,
  REQUEST_CANDI_FAIL,
} from "../Constant";

const usersUrl =
  "http://shivila.herokuapp.com/api/v1/users/all/?role=candidate";

export const VeiwCandiAction = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  dispatch({
    type: REQUEST_LIST_CANDI,
  });

  await axios
    .get(usersUrl, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: REQUEST_CANDI_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: REQUEST_CANDI_FAIL,
        payload: {
          error: err.response.status,
        },
      });
    });
};
