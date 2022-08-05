import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const Form = () => {
  const [cocktailsData, setCocktailsData] = useState([]);
  const [search, setSearch] = useState("");
  
  

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      )
      .then((res) => setCocktailsData(res.data.drinks));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="search cocktails"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
            />
          
        </form>
          

        <div className="btn-sort-container">
          
          
        </div>
      </div>
      <div className="result">
        {cocktailsData.slice(0, 25).map((cocktail) => (
          <Card key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      
          
      </div>
    </div>
  );
};

export default Form;