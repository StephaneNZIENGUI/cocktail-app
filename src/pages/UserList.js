import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let cocktailsId = window.localStorage.cocktails
      ? window.localStorage.cocktails.split(",")
      : [];

    for (let i = 0; i < cocktailsId.length; i++) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita&api_key=1`
        )
        .then((res) => setListData((listData) => [...listData, res.data.drinks]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((cocktail) => <Card cocktail={cocktail} key={cocktail.idDrink} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;