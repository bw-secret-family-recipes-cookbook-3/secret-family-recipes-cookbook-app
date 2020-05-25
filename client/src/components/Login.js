// REACT I only
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Styles } from "./Styles";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

import * as yup from "yup";

const initialLoginValues = {
  username: "",
  password: "",
};

const initialLoginErrors = {
  username: "",
  password: "",
};

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters.")
    .required("Username is required to login."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Please enter your password."),
});

function Login() {
  const history = useHistory();
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  const [formDisabled, setFormDisabled] = useState(true);

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(loginSchema, name)
      .validate(value)
      .then((valid) => {
        setLoginErrors({
          ...loginErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0],
        });
      });

    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  useEffect(() => {
    loginSchema.isValid(loginValues).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [loginValues]);

  // POST / api / auth / instructors / login
  // POST / api / auth / clients / login

  // omar12 omar12 instructor
  // omarr omarrr client
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (loginValues.instructorOrClient === "instructor") {
  //     axiosWithAuth()
  //       .post("/api/auth/instructors/login", loginValues)
  //       .then((res) => {
  //         console.log(res);
  //         localStorage.setItem("token", JSON.stringify(res.data.token));
  //         localStorage.setItem("id", JSON.stringify(res.data.id));
  //         history.push(`/account/instructor/${res.data.id}`);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     axiosWithAuth()
  //       .post("/api/auth/clients/login", loginValues)
  //       .then((res) => {
  //         localStorage.setItem("token", JSON.stringify(res.data.token));
  //         localStorage.setItem("id", JSON.stringify(res.data.id));
  //         history.push(`/account/client/${res.data.id}`);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

    //  const loginUser = {
    //    username: e.target.username,
    //    password: e.target.password,
    //  };
  // };

  return (
    <Styles>
      <form>
        <h1>Login</h1>

        <label>
          Username:&nbsp;
          <input
            onChange={onInputChange}
            name="username"
            type="username"
            errors={loginErrors}
          />
        </label>
        <div className="errors">{loginErrors.username}</div>

        <label>
          Password:&nbsp;
          <input
            onChange={onInputChange}
            name="password"
            type="password"
            errors={loginErrors}
          />
        </label>
        <div className="errors">{loginErrors.password}</div>

        <div className="errors">{loginErrors.instructorOrClient}</div>

       

        <h5>
          Need to register? <Link to="/signup">Sign up here.</Link>
        </h5>
      </form>
    </Styles>
  );
}

export default Login;
