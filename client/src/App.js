import React, { useReducer } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import NewRecipe from "./components/NewRecipeForm"
import LoginWrapper from "./components/LoginWrapper"

import { Context, reducer, axiosAuth, PrivateRoute } from "./utils"
import Footer from "./components/Footer"

import "./App.css"

function App() {
	let [state, dispatch] = useReducer(reducer)

	const initRecipes = localStorage.getItem("recipes")
		? JSON.parse(localStorage.getItem("recipes"))
		: []
	const initShowRecipes = localStorage.getItem("show recipes")
		? JSON.parse(localStorage.getItem("show recipes"))
		: []

	state = state || { recipes: initRecipes, "show recipes": initShowRecipes }

	return (
		<Context.Provider value={{ state, dispatch }}>
			<main>
				<Switch>
					<Route exact path="/" component={LoginWrapper} />
					<Route exact path="/login" component={LoginWrapper} />
					<Route path="/signup" component={LoginWrapper} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/new-recipe" component={NewRecipe} />
					{/* <Redirect from="/login" to="/dashboard" /> */}
				</Switch>

				<Footer />
			</main>
		</Context.Provider>
	)
}

export default App
