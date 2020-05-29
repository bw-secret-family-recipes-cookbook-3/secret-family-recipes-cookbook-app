import React, { useEffect, useState } from "react"

import { Card, Button } from "react-bootstrap"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"
import { Styles } from "./Styles"
import { useParams, useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 445,
		maxHeight: 500,
		flexDirection: "row",
		overflow: "hidden",
		padding: "20px",
	},
	media: {
		height: 10,
		paddingTop: "56.25%", // 16:9

		"&:hover": {
			transform: "scale(1.5)",
			transition: "transform 0.5s",
		},
	},
}))

const CardBootStrap = (props) => {
	console.log(props.recipe)
	const classes = useStyles()

	const [recipe, setRecipe] = useState(null)
	const params = useParams()
	const { push } = useHistory()

	return (
		<Styles>
			<div className="card-recipe">
				<Card
					style={{
						width: "20rem",
						overflow: "hidden",
						padding: "10px",
					}}
				>
					<CardMedia
						className={classes.media}
						image={props.recipe.recipeImage}
						title="Paella dish"
					/>
					<Card.Body>
						<Card.Title>{props.recipe.title}</Card.Title>
						<Card.Text>Category: {props.recipe.category}</Card.Text>
						<Button variant="primary" onClick={props.goToRecipe}>
							Get Recipe
						</Button>
					</Card.Body>
				</Card>
			</div>
		</Styles>
	)
}

export default CardBootStrap
