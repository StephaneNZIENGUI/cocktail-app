import React from "react";

const Card = ({ cocktail }) => {
  
    const addStorage = () => {
        let storedData = window.localStorage.cocktails? 
        window.localStorage.cocktails.split(",") : [];

        if (!storedData.includes(cocktail.idDrink.toString())){
        storedData.push(cocktail.idDrink);
        window.localStorage.cocktails = storedData;
        } 
    };

  return (
    <div className="card">
      <img
        src={cocktail.strDrinkThumb?
          cocktail.strDrinkThumb: "./image/1.png"
             
        }
        alt="affiche film"
      />
      <h1>{cocktail.strDrink}</h1>
      <p>- Category :&nbsp;{cocktail.strCategory}<br/>
         - Glass :&nbsp;{cocktail.strGlass}<br/>
         - List of ingredients to buy :&nbsp;{cocktail.strMeasure1}{cocktail.strIngredient1},
       {cocktail.strMeasure2}{cocktail.strIngredient2},
       {cocktail.strMeasure3}{cocktail.strIngredient3},
       {cocktail.strMeasure4}{cocktail.strIngredient4},
       {cocktail.strMeasure5}{cocktail.strIngredient5},
       {cocktail.strMeasure6}{cocktail.strIngredient6},
       {cocktail.strMeasure7}{cocktail.strIngredient7}<br/>
        - Instructions :&nbsp;
        {cocktail.strInstructions}</p>

        <div className="btn" onClick={() => addStorage()}>Ajouter au coup de coeur</div>
        

       
          
        




        
      
    </div>
  );
};

export default Card;