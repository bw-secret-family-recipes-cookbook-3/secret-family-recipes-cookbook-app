// REACT I only
import React, { useState } from "react"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import login from "../action/userLogin"
import { Styles } from "./Styles"

const Login = (props) => {
	const [loginInfo, setLoginInfo] = useState({
		username: "",
		password: "",
	})

	const handleChange = (e) => {
		setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(loginInfo)

		props.login(loginInfo, props.history)
		setLoginInfo({
			username: "",
			password: "",
		})
	}

	return (
		<Styles>
			<div className="entry-container">
				<h2>Log In</h2>
				<form onSubmit={handleSubmit}>
					<TextField
						required
						label="Username"
						id="username"
						name="username"
						value={loginInfo.username}
						onChange={handleChange}
					/>
					<br />
					<TextField
						required
						label="Password"
						id="password"
						type="password"
						name="password"
						value={loginInfo.password}
						onChange={handleChange}
					/>
					<br />
					<br />
					<Button type="submit" variant="contained" color="primary">
						Log In
					</Button>
				</form>
				<br />
				New to the app, <Link to="/">Sign Up</Link>
			</div>
		</Styles>
	)
}

export default connect(null, { login })(Login)
