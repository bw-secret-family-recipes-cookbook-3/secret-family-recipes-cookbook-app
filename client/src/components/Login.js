import React, { useState, useEffect }from 'react';
import { useForm } from "react-hook-form";
import '../App.css';
import axios from 'axios';
import { Styles } from "./Styles";
import { Link, useHistory } from "react-router-dom"


function Login() {
  const { push } = useHistory() 

  const onSubmit = user => {
    axios.post("https://bw-secret-recipe.herokuapp.com/api/auth/login", user)
    .then(res =>{
      console.log(res)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user_id", res.data.user_id)
      push(`/`)
    })
    .catch(err => console.log("error 2", err))
  }
  const {
    register, 
      handleSubmit,
    errors
  } = useForm();
  return (
    <Styles>
    <h2>LOGIN</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>username:
          <input
            id='username' 
            name='username'
            type='text'
            placeholder='John Doe'
            ref={register({
                    required: 'Required'
                })}
                  />
                  {errors.username && <p>Username is required</p>}
            </label>
            <label>password:
                <input
                id='password'
                name='password'
                      type='password'
                      placeholder='password'
                ref={register({
                    required: 'Required'
                })}
                  />
                  {errors.password && <p>Password is required</p>}
                </label>
                    <button type='submit'>Submit</button>
                    </form>
    </Styles>
  )
}
export default Login;




// import React, { useState, useEffect } from "react"
// import { Link, useHistory } from "react-router-dom"
// import { Styles } from "./Styles"
// // import { axiosWithAuth } from "../Auth/axiosWithAuth"
// import axios from 'axios'
// import * as yup from "yup"
// const initialLoginValues = {
//     username: "",
//     password: "",
// }
// const initialLoginErrors = {
//     username: "",
//     password: "",
// }
// const loginSchema = yup.object().shape({
//     username: yup
//         .string()
//         .min(4, "Username must be at least 4 characters.")
//         .required("Username is required to login."),
//     password: yup
//         .string()
//         .min(6, "Password must be at least 6 characters.")
//         .required("Please enter your password."),
// })
// function Login() {
//     const history = useHistory()
//     const [loginValues, setLoginValues] = useState(initialLoginValues)
//     const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
//     const [formDisabled, setFormDisabled] = useState(true)
//     //base url: https://secret-family-recipe-app.herokuapp.com
//     // POST / api / auth / instructors / login
//     // POST / api / auth / clients / login
//     const onInputChange = (e) => {
//         e.preventDefault()
//        // axiosWithAuth()
//             axios
//             .post("https://bw-secret-recipe.herokuapp.com/api/auth/login", loginValues)
//             .then((res) => {
//                 console.log(res)
//                 localStorage.setItem("token", JSON.stringify(res.data.token))
//                 localStorage.setItem("id", JSON.stringify(res.data.user_id))
//                 history.push(`/api/recipes`)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//         // const loginUser = {
//         //     username: e.target.username,
//         //     password: e.target.password,
//         // }
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
    
//         //if (isVerified) {
//           const {
//             username,
           
//             password,
//           } = loginValues;
    
//           const values = {
//             username,
//             password,
           
//          };
//           //axiosWithAuth()
//           axios
//               .post("https://bw-secret-recipe.herokuapp.com/api/auth/login", values)
//               .then((res) => {
//                 console.log(res);
//                 history.push("/api/recipes");
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//       };
    
//     return (
//         <Styles>
//             <form>
//                 <h1>Login</h1>
//                 <label>
//                     Username:&nbsp;
//                     <input
//                         onChange={onInputChange}
//                         name="username"
//                         type="username"
//                         errors={loginErrors}
//                     />
//                 </label>
//                 <div className="errors">{loginErrors.username}</div>
//                 <label>
//                     Password:&nbsp;
//                     <input
//                         onChange={onInputChange}
//                         name="password"
//                         type="password"
//                         errors={loginErrors}
//                     />
//                 </label>
//                 <div className="errors">{loginErrors.password}</div>
//                 <div className="errors">{loginErrors.instructorOrClient}</div>
//                 <button onSubmit={onSubmit}> LogIn </button>
//                 <h5>
//                     Need to register? <Link to="/signup">Sign up here.</Link>
//                 </h5>
//             </form>
//         </Styles>
//     )
// }
// export default Login