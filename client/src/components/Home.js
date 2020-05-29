import React from "react"
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"
import { Styles } from "./Styles"

const Home = () => {
	return (
		<Styles>
			<div className="tabs-container">
				<Link className="tab" to="/all-recipes">
					Home
				</Link>
				<Link className="tab" to="/user-recipes">
					My Recipes
				</Link>
				<Link className="tab" to="/add-recipe">
					Add Recipe
				</Link>
			</div>
		</Styles>
	)
}
export default Home
