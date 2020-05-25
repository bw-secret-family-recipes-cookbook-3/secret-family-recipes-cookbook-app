import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Styles } from './Styles'

const initialRecipe = {
    title: "",
    source: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '',
    id: ''
}

const AddRecipe = (props) => {
  console.log(props)
  const { push } = useHistory()
  const [recipe, setRecipe] = useState(initialRecipe)


  const handleChange = event =>{
    let value = event.target.value;

    setRecipe({
        ...recipe,
        [event.target.name]: value
    })
}

  const handleSubmit = event =>{
    event.preventDefault()
    axios
        .post(`http://localhost:5000/api/recipes/`, recipe)
        .then(res =>{
            // console.log(res.data)
            setRecipe(initialRecipe)
            props.setRecipes(res.data)
            push(`/`)
        })
        .catch(err =>{
            console.log(err)
        })
}

  return (
    <div className='add-form-container'>
      <Styles>
        <form className="add-form" on onSubmit={handleSubmit}>
          <h1>Add Recipe</h1>
                <label>Title:&nbsp;
                    <input
                        name="title"
                        value={recipe.title}
                        type="text"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                </label>
                <label>Source:&nbsp;
                    <input 
                        name="source"
                        value={recipe.source}
                        type="text"
                        placeholder="Source"
                        onChange={handleChange}
                    />
                </label>
                <label>Ingredients:&nbsp;
                    <input 
                        name="ingredients"
                        value={recipe.ingredients}
                        type="text"
                        placeholder="Ingredients"
                        onChange={handleChange}
                    />
        </label>
        <label>Instructions:&nbsp;
                    <input 
                        name="instructions"
                        value={recipe.instructions}
                        type="text"
                        placeholder="Instructions"
                        onChange={handleChange}
                    />
        </label>
        <label>Category:&nbsp;
                    <input 
                        name="category"
                        value={recipe.category}
                        type="text"
                        placeholder="Category"
                        onChange={handleChange}
                    />
        </label>
        <label>Image URL:&nbsp;
                    <input 
                        name="imageUrl"
                        value={recipe.imageUrl}
                        type="text"
                        placeholder="Image URL"
                        onChange={handleChange}
                    />
                </label>
                
                
                <button className="update-form-button">Add</button>
        </form>
        </Styles>
        </div>
    )
  
}

export default AddRecipe