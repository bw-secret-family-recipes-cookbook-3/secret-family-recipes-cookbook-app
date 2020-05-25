import React from 'react';
import { Link } from 'react-router-dom'

import CardBootStrap from './CardBootStrap';
import { Grid } from '@material-ui/core';


const Customers = (props) => {
  
 

  return (
    <div>
     
      <div className="grid-container">
      
        <Grid container spacing={3}>
        <Grid container item sm={12} spacing={5}>
        
            {props.recipes.map(recipe => (
              <Link  key={recipe.id} to={`/recipes/${recipe.id}`}>
              <CardBootStrap
                goToRecipe={() => props.goToRecipe(recipe)}
                recipe={recipe}
                />
                </Link>
            ))}

        </Grid>
        </Grid>
 
      </div>
    
    </div>
    );
  }


export default Customers;
