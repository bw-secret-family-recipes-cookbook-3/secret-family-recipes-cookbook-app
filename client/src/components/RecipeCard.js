import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../Auth/axiosWithAuth';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 445,
//     flexDirection: "row"
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

export default function RecipeCard({food}) {
  const { title, imageUrl, source, instructions, ingredients, category } = food;
  const { push } = useHistory();

  const deleteRecipe = (id) => {
    
    axiosWithAuth()
      .delete(`api/recipes/${id}`)
      .then((res) => {
        console.log(res.data)
        push('/')
      })
      .catch(err => console.log(err))
  }
  

  return (
    <div className='recipe-card'>
    
      <div>
        <img src={imageUrl}  className="image-class" />
      </div>

      <div className="text-class">
        <h2>Name: {title}</h2>
        <h3>Source: {source}</h3>
        <h3>Category: {category}</h3>
        <p><strong>Ingredients:</strong> {ingredients}</p>
        <p><strong>Instructions:</strong> {instructions}</p>
        <Link to='/update-recipe/:id'>
          <Button className='recipe-card-edit'>
            Update Recipe
          </Button>
        </Link>
        
        <Button
          className='recipe-card-delete'
          onClick={deleteRecipe}
        >
          Delete Recipe
          </Button>
      </div>
       
    </div>
  );
}

