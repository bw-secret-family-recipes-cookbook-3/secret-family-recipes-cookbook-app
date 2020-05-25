const express = require('express');
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let foodRecipes = [
  {
    title: "aliceblue",
    source: 'grandma',
    ingredients: 'pepper, cucumber',
    instructions: 'boil for awhile',
    category: 'chicken',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1547&q=80',
    id: 1
  },
  {
    title: "chicken tar tar",
    source: 'daddy',
    ingredients: 'salt, cucumber',
    instructions: 'fry for awhile',
    category: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    id: 2
  },
  {
    title: "pizza",
    source: 'tony',
    ingredients: 'Cooking spray, lukewarm water, granulated sugar,packet active dry yeast, all-purpose flour, kosher salt, extra-virgin olive oil',
    instructions: 'Grease a large bowl with cooking spray. In a small bowl add water and sugar and stir to dissolve, then sprinkle over yeast and let sit until frothy, about 8 minutes.',
    category: 'hamburger',
    imageUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    id: 3
  },
  {
    title: "pasta",
    source: 'gordon',
    ingredients: 'duck, cucumber',
    instructions: 'shake for awhile',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    id: 4
  },
  {
    title: "soup",
    source: 'book',
    ingredients: 'water, cucumber',
    instructions: 'sun dry for awhile',
    category: 'soup',
    imageUrl: 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=694&q=80',
    id: 5
  },
  {
    title: "crackers",
    source: 'box',
    ingredients: 'flower, cucumber',
    instructions: 'stir for awhile',
    category: 'snack',
    imageUrl: 'https://images.unsplash.com/photo-1588575866383-e2a07af0e7d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    id: 6
  },
  {
    title: "eggs",
    source: 'carton',
    ingredients: 'eggs, cucumber',
    instructions: 'boil for awhile',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1544378730-8b5104b18790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1332&q=80',
    id: 7
  },
  {
    title: "cheese",
    source: 'package',
    ingredients: '1 tbsp. vegetable oil 2 lb. beef chuck stew meat cubed into 1 inch pieces 1 tbsp. extra-virgin olive oil 1 onion chopped 2 carrots peeled and cut into rounds',
    instructions: 'In a large dutch oven or heavy-bottomed pot over medium heat, heat oil. Add beef and cook until seared on all sides, 10 minutes, working in batches if necessary. Transfer beef to a plate. ',
    category: 'dairy',
    imageUrl: 'https://images.unsplash.com/photo-1586197122509-651125c9605a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    id: 8
  }
];

let recipeId = foodRecipes.length;

// axios get foot recipes list
app.get('/api/recipes', (req, res) => {
  res.send(foodRecipes);
});

// axios get individual recipe
app.get("/api/recipes/:id", (req, res) => {
  const recipe = foodRecipes.filter(recipe => `${recipe.id}` === req.params.id)[0];
  res.status(200).json(recipe);
});

// axios posting new recipe
app.post("/api/recipes", (req, res) => {
  if (req.body.title !== undefined) {
    const newRecipe = req.body;
    newRecipe["id"] = recipeId;
    foodRecipes.push(newRecipe);
  }
  ++recipeId;
  res.status(201).json(foodRecipes);
});

app.put("/api/recipes/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the movie id");
  if (
    req.body.id === undefined ||
    !req.body.title ||
    !req.body.imageUrl ||
    !req.body.ingredients ||
    !req.body.instructions ||
    !req.body.source
  ) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  foodRecipes = foodRecipes.map(recipe => {
    if (`${recipe.id}` === req.params.id) {
      return req.body;
    }
    return recipe;
  });
  res.status(200).send(req.body);
});

app.delete("/api/recipes/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the movie id");
  foodRecipes = foodRecipes.filter(recipe => `${recipe.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get("/", function(req, res) {
  res.send("App is working 👍");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);