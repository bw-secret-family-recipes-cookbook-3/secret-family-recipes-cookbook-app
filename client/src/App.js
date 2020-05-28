import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Customers from './components/customers';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from './components/AddRecipe';
import RecipeCard from './components/RecipeCard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import UpdateRecipe from './components/UpdateRecipe';

import { Route, Link, useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from './Auth/axiosWithAuth';

const baseUrl = 'https://bw-secret-recipe.herokuapp.com/'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [searchField, setSearchField] = useState('')
  const [recipe, setRecipe] = useState(null);
  const [food, setFood] = useState('')

  const params = useParams();
 
  const getRecipes = () => {
    axiosWithAuth()
   
      .get('/api/recipes/my-recipes')
      .then(res => {
        console.log(res)
        setRecipes(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  // const fetchRecipe = (id) => {
  //   axiosWithAuth()
  //     .get(`/api/recipes/${id}`)
  //     .then((res) => {
  //       console.log(res)
  //       setRecipe(res.data)
  //     })
  //     .catch((err) => console.log(err.response));
  // }

  // useEffect(() => {
  //   fetchRecipe(params.id);
  // }, [params.id]);

  // const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchField.toLowerCase()))

  const goToRecipe = (item) => {
    console.log(item)
    setFood(item)
  }
  
    return (
      <div className="App">
        <Navbar />

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        
        <Route exact path='/'>
          <input
          type='search'
          placeholder='Search Recipes'
          onChange={e => setSearchField(e.target.value)}
          />
          <Customers recipes={recipes} goToRecipe={goToRecipe} />
        </Route>

        <Route path="/recipes/:id">
          <RecipeCard recipe={recipe} food={food} />
        </Route>

        <Route path="/add-recipe">
          <AddRecipe setRecipes={setRecipes} />
        </Route>

        <Route path='/update-recipe/:id'>
          <UpdateRecipe food={food} />
        </Route>

      </div>
    );
  }


export default App;
