import React, { useState } from "react"
import { Link } from "react-router-dom"
// import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

// import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux"
import { addRecipe } from "../action/addRecipe"
import { Styles } from "./Styles"

const initialState = {
	title: "",
	source: "",
	ingredients: "",
	instructions: "",
	category: "",
}

const AddRecipe = (props) => {
	const [recipeToAdd, setRecipeToAdd] = useState(initialState)

	const onChange = (e) => {
		setRecipeToAdd({
			...recipeToAdd,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		props.addRecipe(recipeToAdd)
		setRecipeToAdd("")

		props.history.push("/user-recipes")
		console.log(recipeToAdd)
	}

	return (
		<Styles>
			<div>
				<div className="tabs-container">
					<Link
						className="tab"
						href="https://bw1-marketing-page.now.sh/"
					>
						Home
					</Link>
					<Link className="tab" to="/user-recipes">
						My Recipes
					</Link>
					<Link className="tab active" to="/add-recipe">
						Add Recipe
					</Link>
				</div>
				<div className="entry-container">
					<h2>Add a Recipe</h2>
					<form onSubmit={handleSubmit}>
						<br />
						<TextField
							required
							label="title"
							id="title"
							name="title"
							value={recipeToAdd.title}
							onChange={onChange}
						/>
						<br />
						<TextField
							required
							label="source"
							id="source"
							name="source"
							value={recipeToAdd.source}
							onChange={onChange}
						/>
						<br />
						<TextField
							required
							label="ingredients"
							id="ingredients"
							name="ingredients"
							value={recipeToAdd.ingredients}
							onChange={onChange}
						/>
						<br />
						<TextField
							multiline
							required
							label="instructions"
							id="instructions"
							name="instructions"
							value={recipeToAdd.instructions}
							onChange={onChange}
						/>
						<br />

						<TextField
							required
							label="category"
							id="category"
							name="category"
							value={recipeToAdd.category}
							onChange={onChange}
						/>
						<br />
						<br />
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</Styles>
	)
}

const mapStateToProps = (state) => {
	return {
		addRecipe: state.addRecipe,
	}
}

export default connect(mapStateToProps, { addRecipe })(AddRecipe)
