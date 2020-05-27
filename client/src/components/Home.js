import React from "react"
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"

const home = () => {
	return (
		<div className="tabs-container">
			<Link className="tab" to="/all-recipes">
				All Recipes
			</Link>
			<Link className="tab" to="/user-recipes">
				My Recipes
			</Link>
			<Link className="tab" to="/add-recipe">
				Add Recipe
			</Link>
		</div>
	)
}
export default Home
