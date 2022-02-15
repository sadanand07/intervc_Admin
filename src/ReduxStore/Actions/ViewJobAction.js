import axios from "axios";
import { REQUEST_VIEW_FAIL, REQUEST_VIEW_JOB, REQUEST_VIEW_SUCCESS } from "../Constant";

const Job_Url = "https://shivila.herokuapp.com/api/v1/jobs/" 


export const ViewJobAction = ( ) => async(dispatch ) =>{
    const token = localStorage.getItem('token');
    dispatch(
        {
            type: REQUEST_VIEW_JOB
        }
    )

    await axios.get(Job_Url,
       {
         headers:{
          Authorization: 'Token ' + token
        }
    })
    .then(res=>{
       /*  console.log("hello")
        console.log(res.data); */
        dispatch({
            type:REQUEST_VIEW_SUCCESS,
            payload:res.data
            
        })
      /*   alert("Successfully Created") */
    })
    .catch(err =>{
      console.log(err.response);
        dispatch({
            type:REQUEST_VIEW_FAIL,
            payload:{
                error:err.response.status
            }
        })
    })
} 