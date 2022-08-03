import React from "react";

const Card = ({ cocktail }) => {
  

  
  return (
    <div className="card">
      <img src={cocktail.strDrinkThumb ?
        cocktail.strDrinkThumb: "./image/1.png"} alt="affiche le film" />
      <h2>{cocktail.strDrink}</h2><br/>
      <p>Ingredients List to buy :&nbsp;
       {cocktail.strIngredient1}, {cocktail.strIngredient2}, 
        {cocktail.strIngredient3}, {cocktail.strIngredient4}, 
        {cocktail.strIngredient5}, {cocktail.strIngredient6}</p>
        <p>Instructions<br/>
        {cocktail.strInstructions}</p>
        

       
          
        




        </div>

    
  
  );
};

export default Card;
