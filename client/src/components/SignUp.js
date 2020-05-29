import React, { useState } from "react"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import { Styles } from "./Styles"

// IMPORT ACTION
import signUp from "../action/userSignUp"

const SignUp = (props) => {
	const [userInfo, setUserInfo] = useState({
		username: "",
		password: "",
	})

	const handleChange = (e) => {
		// console.log(e);
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
		console.log(e.target.name, e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(userInfo)

		props.signUp(userInfo)

		setUserInfo({
			username: "",
			password: "",
		})

		props.history.push("/login")
	}

	return (
		<Styles>
			<div className="entry-container">
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<br />
					<TextField
						required
						label="Username"
						id="username"
						name="username"
						value={userInfo.username}
						onChange={handleChange}
					/>
					<br />
					<TextField
						required
						label="Password"
						id="password"
						type="password"
						name="password"
						value={userInfo.password}
						onChange={handleChange}
					/>
					<br />
					<br />
					<Button type="submit" variant="contained" color="primary">
						Sign Up
					</Button>
				</form>
				<br />
				Already have an account, <Link to="/login">Log In</Link>
			</div>
		</Styles>
	)
}

export default connect(null, { signUp })(SignUp)
