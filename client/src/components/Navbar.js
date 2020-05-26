import React from 'react'
import { Link } from "react-router-dom";
import { NavStyles } from './Styles';

function Navbar() {
  return (
    <NavStyles>
      
      <header>
        
        <div className='container'>
        <h1>Secret Family Recipes Cookbook</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/add-recipe'>Add Recipe</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </nav>
        </div>

      </header>
      
    </NavStyles>
  )
}

export default Navbar