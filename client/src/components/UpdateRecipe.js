import React, { useState, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { Link, useParams, useHistory } from "react-router-dom"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Styles } from "./Styles"

// STYLES IMPORT

import InputLabel from "@material-ui/core/InputLabel"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import updateRecipe from "../action/updateRecipe"

const UpdateRecipe = (props) => {
	const { id } = useParams()
	const history = useHistory()
	const dispatch = useDispatch()

	const { register, handleSubmit } = useForm()

	const onSubmit = (updatedRecipe) => {
		console.log(updatedRecipe, "NEW RECIPE")
		dispatch(updateRecipe(updatedRecipe, props.recipe_id, history))
		//console.log(updatedRecipe, "NEW RECIPE")

		props.history.push("/user-recipes")
		console.log(props.recipe_id, "recipe.id")
	}
	// const [state, setState] = useState({
	// 	title: "title",
	// 	source: "source",
	// 	ingredients: "ingredients",
	// 	instructions: "instruction",
	// 	category: "category",
	// })

	// const changeHandler = (e) => {
	// 	e.persist()
	// 	setState({ ...state, [e.target.name]: e.target.value })
	// }

	//const handleSubmit = (e) => {
	//	e.preventDefault()
	//	console.log("I am submitted", state)
	//
	//	props.updateRecipe(state)
	//
	//
	//	setState({
	//		title: "title",
	//		source: "source",
	//		ingredients: "ingredients",
	//		instructions: "instructions",
	//		category: "category",
	//	})
	//
	//	props.history.push("/recipes")
	//}

	return (
		<Styles>
			<div className="container">
				<div className="tabs-container">
					<Link
						className="tab"
						onClick={props.getRecipes}
						to="/all-recipes"
					>
						Home
					</Link>
					<Link className="tab" to="/user-recipes">
						My Recipes
					</Link>
					<Link className="tab" to="/add-recipe">
						Add Recipe
					</Link>
				</div>
				<div className="entry-container">
					<h2>Update Recipe</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<br />
						<input
							type="text"
							label="Title"
							id="title"
							name="title"
							ref={register({
								required: "required",
							})}
						/>
						<br />
						<input
							type="text"
							id="source"
							name="source"
							placeholder="source"
							ref={register({
								required: "required",
							})}
						/>
						<br />
						<input
							type="text"
							label="Ingredients"
							id="ingredients"
							name="ingredients"
							ref={register({
								required: "required",
							})}
						/>
						<br />
						<input
							multiline
							type="text"
							label="instructions"
							id="instructions"
							name="instructions"
							ref={register({
								required: "required",
							})}
						/>
						<br />

						<input
							type="text"
							label="category"
							id="category"
							name="category"
							ref={register({
								required: "required",
							})}
						/>
						<br />
						<br />
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Update Recipe
						</Button>
					</form>
				</div>
			</div>
		</Styles>
	)
}

const mapStateToProps = ({ loginReducer, updateRecipeReducer }) => {
	return {
		recipe: updateRecipeReducer.recipe,
		recipe_id: updateRecipeReducer.recipeToEdit,
		user_id: loginReducer.userID,
	}
}

export default connect(mapStateToProps, { updateRecipe })(UpdateRecipe)
