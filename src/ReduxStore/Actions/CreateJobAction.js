import axios from "axios"
import { REQUEST_CREATE_JOB, REQUEST_CREATE_JOB_FAIL, REQUEST_CREATE_JOB_SUCCESS } from "../Constant"

const  Create_Job_Url = "https://shivila.herokuapp.com/api/v1/jobs/" 



export const CreateJobAction = (data,setjobDetails) => async(dispatch) =>{
     const token = localStorage.getItem('token');
      dispatch(
          {
              type: REQUEST_CREATE_JOB
          }
      )

      await axios.post(Create_Job_Url, data ,
         {
           headers:{
            Authorization: 'Token ' + token
          }
      })
      .then(res=>{
          console.log(res);
         
          dispatch({
              type:REQUEST_CREATE_JOB_SUCCESS,
              payload:{
                  statusCode: res.status
              }
          })
          
       /*    alert("Successfully Created"); */
      })
      .catch(err =>{
        console.log(err.response);
          dispatch({
              type:REQUEST_CREATE_JOB_FAIL,
              payload:{
                  error:err.response.status
              }
          })
      })

      setjobDetails({
        title: "",
        location: "",
        description: "",
        positions: "",
        category: "",
        min_qualification: "",
        min_experience: 1,
        required_skills: "",
        ctc: 1,
      })

}