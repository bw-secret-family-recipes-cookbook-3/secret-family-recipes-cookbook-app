import React from "react"

import "./App.css"

// COMPONENTS IMPORTS

import { Route, Switch } from "react-router-dom"
import { PrivateRoute } from "./utils/PrivateRoute"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import UserRecipes from "./components/UserRecipes"
import AddRecipe from "./components/AddRecipe"
import RecipesList from "./components/RecipeList"
import UpdateRecipe from "./components/UpdateRecipe"

// TRANSITION IMPORTS
import { CSSTransition, TransitionGroup } from "react-transition-group"

function App() {
	return (
		// <BrowserRouter>
		<div className="App">
			<div className="navigation">
				<div className="logo">
					<h1>Secret Family Recipes</h1>
				</div>
				<div className="nav-link-container">
					{/* <Link to="/login">Login</Link> */}
					<a className="nav-link" href="" target="_blank"></a>
					<a className="nav-link" href="" target="_blank"></a>
					{/* <Link to="/">Sign Up</Link> */}
				</div>
			</div>
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition
							key={location.key}
							timeout={500}
							classNames="fade"
						>
							<Switch location={location}>
								{/* ROUTES */}
								<Route exact path="/" component={SignUp} />
								<Route exact path="/login" component={Login} />

								{/* PRIVATE ROUTES */}

								<PrivateRoute
									exact
									path="/user-recipes"
									component={UserRecipes}
								/>
								<PrivateRoute
									exact
									path="/all-recipes"
									component={RecipesList}
								/>
								<PrivateRoute
									exact
									path="/add-recipe"
									component={AddRecipe}
								/>
								<PrivateRoute
									exact
									path="/update-form/:id"
									component={UpdateRecipe}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			></Route>
		</div>
		// </BrowserRouter>
	)
}

export default App
// trying to force new deploment on vercel
