import React, { useState, useEffect }from 'react';
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../Auth/axiosWithAuth"; 
import '../App.css';
import axios from 'axios';
import { Styles } from './Styles';
import { useHistory } from 'react-router-dom';

function AddRecipe() {
  const { push } = useHistory()
  const {
    register, 
    handleSubmit,
    errors
    } = useForm();
    
  const onSubmit = recipe => {
  console.log(recipe)
    axiosWithAuth()
    .post("/api/recipes", recipe)
    .then(res => {
      console.log(res)
      push('/')
    })
    .catch(err => console.log('error',err))
    }
    
  return (
    <Styles>
    <h2>ADD A RECIPE</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title:
          <input id='title' name='title'
            type='text' placeholder='title' 
            ref={register({
                    required: 'Required'
                })}
                  />
                  {errors.title && <p>Title is required</p>}
            </label>
            <label>Source:
                <input id='source' name='source' type='text'
                placeholder='source' 
                ref={register({
                    required: 'Required'
                })}
                />
                </label>
      <label>Ingredients:
          <input id='ingredients' name='ingredients'
            type='text' placeholder='ingredients' 
            ref={register({
                    required: 'Required'
                })}
                  />
                  {errors.ingredients && <p>Ingredients is required</p>}
            </label>
            <label>Instructions:
                <input id='instructions' name='instructions'
              type='text' placeholder='instructions' 
                ref={register({
                    required: 'Required'
                })}
                  />
                  {errors.instructions && <p>Instructions is required</p>}
                </label>
            <label>Category:
                <input id='category' name='category'
                type='text' placeholder='category' 
                ref={register({
                    required: 'Required'
                })}
                  />
                  {errors.category && <p>Category is required</p>}
                </label>
                <label>Recipe Image:
                <input type="text" name="recipeImage"
                placeholder='image url'  ref={register({
                  required:"Required"
                })} />
                {errors.recipeImage && <p>Image is required</p>}
                </label>
             <button type='submit'>Submit</button>
          </form>
    </Styles>
  )
}
export default AddRecipe;


// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { axiosWithAuth } from '../Auth/axiosWithAuth';
// import { Styles } from './Styles'

// const initialRecipe = {
//     title: "",
//     source: '',
//     ingredients: '',
//     instructions: '',
//     category: '',
//     imageUrl: '',
//     id: ''
// }

// const AddRecipe = (props) => {
//   console.log(props)
//   const { push } = useHistory()
//   const [recipe, setRecipe] = useState(initialRecipe)


//   const handleChange = event =>{
//     let value = event.target.value;

//     setRecipe({
//         ...recipe,
//         [event.target.name]: value
//     })
// }

//   const handleSubmit = event =>{
//     event.preventDefault()
//     axiosWithAuth()
//         .post(`/api/recipes/`, recipe)
//         .then(res =>{
//             // console.log(res.data)
//             setRecipe(initialRecipe)
//             props.setRecipes(res.data)
//             push(`/`)
//         })
//         .catch(err =>{
//             console.log(err)
//         })
// }

//   return (
//     <div className='add-form-container'>
//       <Styles>
//         <form className="add-form" on onSubmit={handleSubmit}>
//           <h1>Add Recipe</h1>
//                 <label>Title:&nbsp;
//                     <input
//                         name="title"
//                         value={recipe.title}
//                         type="text"
//                         placeholder="Title"
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>Source:&nbsp;
//                     <input 
//                         name="source"
//                         value={recipe.source}
//                         type="text"
//                         placeholder="Source"
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>Ingredients:&nbsp;
//                     <input 
//                         name="ingredients"
//                         value={recipe.ingredients}
//                         type="text"
//                         placeholder="Ingredients"
//                         onChange={handleChange}
//                     />
//         </label>
//         <label>Instructions:&nbsp;
//                     <input 
//                         name="instructions"
//                         value={recipe.instructions}
//                         type="text"
//                         placeholder="Instructions"
//                         onChange={handleChange}
//                     />
//         </label>
//         <label>Category:&nbsp;
//                     <input 
//                         name="category"
//                         value={recipe.category}
//                         type="text"
//                         placeholder="Category"
//                         onChange={handleChange}
//                     />
//         </label>
//         <label>Image URL:&nbsp;
//                     <input 
//                         name="imageUrl"
//                         value={recipe.imageUrl}
//                         type="text"
//                         placeholder="Image URL"
//                         onChange={handleChange}
//                     />
//                 </label>
                
                
//                 <button className="update-form-button">Add</button>
//         </form>
//         </Styles>
//         </div>
//     )
  
// }

// export default AddRecipe