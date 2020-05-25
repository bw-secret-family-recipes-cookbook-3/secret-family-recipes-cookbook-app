// REACT I only
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//import Recaptcha from "react-recaptcha";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

import * as yup from "yup";

import { Styles } from "./Styles";

const API_KEY = process.env.REACT_APP_API_KEY;

const initialSignUpValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialSignUpErrors = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};



const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Need at least 4 characters.")
    .required("Username is required"),
  firstName: yup
    .string()
    .min(2, "Need at least 2 characters.")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Need at least 2 characters")
    .required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required"),
});

function SignUp() {
  const [isVerified, setIsVerified] = useState(false);

  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);

  const [signUpErrors, setSignUpErrors] = useState(initialSignUpErrors);

  const [formDisabled, setFormDisabled] = useState(true);
  const history = useHistory();

  const recaptchaLoaded = () => {
    console.log("captcha loaded");
  };

  // POST / api / auth / instructors / register
  // POST / api / auth / clients / register
  // instructorOrClient
  const onSubmit = (e) => {
    e.preventDefault();

    if (isVerified) {
      const {
        username,
        firstName,
        lastName,
        email,
        password,
      } = signUpValues;

      const values = {
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      };

      // sign up method goes here
    } else {
      alert("Please verify that you are a human");
    }
  };

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    yup
      .reach(signUpSchema, name)
      .validate(value)
      .then((valid) => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setSignUpErrors({
          ...signUpErrors,
          [name]: err.errors[0],
        });
      });

    setSignUpValues({
      ...signUpValues,
      [name]: value,
    });
  };

  useEffect(() => {
    signUpSchema.isValid(signUpValues).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [signUpValues]);

  return (
    <div>
      <Styles>
        <form>
          <h1>Sign Up</h1>

          <div className="errors"></div>

          <label>
            Username:&nbsp;
            <input
              onChange={onInputChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </label>
          <div className="errors">{signUpErrors.username}</div>

          <label>
            First Name:&nbsp;
            <input
              onChange={onInputChange}
              name="firstName"
              type="text"
              placeholder="First name"
            />
          </label>
          <div className="errors">{signUpErrors.firstName}</div>

          <label>
            Last Name:&nbsp;
            <input
              onChange={onInputChange}
              name="lastName"
              type="text"
              placeholder="Last name"
            />
          </label>
          <div className="errors">{signUpErrors.lastName}</div>

          <label>
            Email:&nbsp;
            <input
              onChange={onInputChange}
              name="email"
              type="email"
              placeholder="john@doe.com"
            />
          </label>
          <div className="errors">{signUpErrors.email}</div>

          <div className="errors">{signUpErrors.phoneNumber}</div>

          <label>
            Password:&nbsp;
            <input
              onChange={onInputChange}
              name="password"
              type="password"
              placeholder="password"
            />
          </label>
          <div className="errors">{signUpErrors.password}</div>

          <div className="errors">{signUpErrors.instructorOrClient}</div>

          <button onClick={onSubmit} disabled={formDisabled}>
            Sign Up
          </button>

          
          <h5>
            Already have an account? <Link to="/login">Login here.</Link>
          </h5>
        </form>
      </Styles>
    </div>
  );
}

export default SignUp;
