import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div>
      <h3>{title}</h3>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image}></img>
    </div>
  );
}

export default Recipe;

