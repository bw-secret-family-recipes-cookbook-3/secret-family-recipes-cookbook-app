import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Styles } from './Styles';
import { axiosWithAuth } from '../Auth/axiosWithAuth';

const initialRecipe = {
    title: "",
    source: '',
    ingredients: '',
    instructions: '',
    category: '',
    imageUrl: '',
    id: ''
}

const UpdateRecipe = ({food}) => {
  console.log({ food })
  const { title, imageUrl, source, instructions, ingredients, category } = food
  const { push } = useHistory()
  const [recipe, setRecipe] = useState(initialRecipe)
  const {id} = useParams()


  const handleChange = event =>{
    let value = event.target.value;

    setRecipe({
        ...recipe,
        [event.target.name]: value
    })
}

  const handleSubmit = event =>{
    event.preventDefault()
    axiosWithAuth()
        .put(`/api/recipes/${id}`, recipe)
        .then(res =>{
            // console.log(res.data)
            setRecipe(initialRecipe)
            setRecipe(res.data)
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
          <h1>Update Recipe</h1>
                <label>Title:&nbsp;
                    <input
                        name="title"
                        value={recipe.title}
                        type="text"
                        placeholder="Title"
              onChange={handleChange}
              value={title || ''}
                    />
                </label>
                <label>Source:&nbsp;
                    <input 
                        name="source"
                        value={recipe.source}
                        type="text"
                        placeholder="Source"
              onChange={handleChange}
              value={source || ''}
                    />
                </label>
                <label>Ingredients:&nbsp;
                    <input 
                        name="ingredients"
                        value={recipe.ingredients}
                        type="text"
                        placeholder="Ingredients"
              onChange={handleChange}
              value={ingredients || ''}
                    />
        </label>
        <label>Instructions:&nbsp;
                    <input 
                        name="instructions"
                        value={recipe.instructions}
                        type="text"
                        placeholder="Instructions"
              onChange={handleChange}
              value={instructions || ''}
                    />
        </label>
        <label>Category:&nbsp;
                    <input 
                        name="category"
                        value={recipe.category}
                        type="text"
                        placeholder="Category"
              onChange={handleChange}
              value={category || ''}
                    />
        </label>
        <label>Image URL:&nbsp;
                    <input 
                        name="imageUrl"
                        value={recipe.imageUrl}
                        type="text"
                        placeholder="Image URL"
              onChange={handleChange}
              value={imageUrl || ''}
                    />
                </label>
                
                
                <button className="update-form-button">Update</button>
        </form>
        </Styles>
        </div>
    )
  
}

export default UpdateRecipe