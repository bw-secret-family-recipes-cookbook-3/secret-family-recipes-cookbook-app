import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { Link, useHistory } from "react-router-dom"
import { connect, useDispatch } from "react-redux"
import getRecipesByUser from "../action/getRecipeByUser"
import axiosWithAuth from "../utils/axiosWithAuth"
import updateRecipe from "../action/updateRecipe"
import deleteRecipe from "../action/deleteRecipe"
import { recipeToEdit } from "../action/updateRecipe"
import { Styles } from "./Styles"

const UserRecipes = (props) => {
	const [usersRecipes, setUsersRecipes] = useState([])
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		axiosWithAuth()
			.get("/recipes/my-recipes")
			.then((res) => {
				setUsersRecipes(res.data)
				console.log(res)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Styles>
			<div>
				<div className="tabs-container">
					<a
						className="tab"
						href="https://bw1-marketing-page.now.sh/"
					>
						Home
					</a>
					<Link className="tab active" to="/user-recipes">
						My Recipes
					</Link>
					<Link className="tab" to="/add-recipe">
						Add Recipe
					</Link>
				</div>
				{usersRecipes.length === 0 ? (
					<p className="entry-container">
						You Don't Have Any Recipes Yet, add some
					</p>
				) : (
					<div className="recipe-body">
						{usersRecipes.map((recipe) => {
							//console.log("Recipes id Here", recipe.recipe_id)
							return (
								<div key={recipe.recipe_id}>
									<p>{recipe.title}</p>
									<p>{recipe.ingredients}</p>
									<p>{recipe.instructions}</p>
									<p>{recipe.category}</p>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => {
											dispatch(
												recipeToEdit(
													recipe.recipe_id,
													history
												)
											)
										}}
									>
										Update
									</Button>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => {
											dispatch(
												deleteRecipe(
													recipe.recipe_id,
													history
												)
											)
										}}
									>
										Delete
									</Button>
								</div>
							)
						})}
					</div>
				)}
			</div>
		</Styles>
		// </div>
	)
}
const mapStateToProps = ({ getRecipesByUserReducer }) => {
	return {
		recipesByUser: getRecipesByUserReducer.recipe,
	}
}

export default connect(mapStateToProps, {
	getRecipesByUser,
	deleteRecipe,
	updateRecipe,
	recipeToEdit,
})(UserRecipes)
