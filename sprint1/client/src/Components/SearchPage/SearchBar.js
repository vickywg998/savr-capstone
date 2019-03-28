import React from "react";

const SearchBar = props => {

  let ingredientWord = props.chosenIngredients.join(', ')

  return (
    <div className="searchBar__container">
      <h1 className="searchBar__font">What do you feel like making today?</h1>
      <div id="cover">
        <form onSubmit={props.searchRecipe} method="get" action="" className="searchBar__form">
          <div class="tb">
            <div class="td">
              {" "}
              <input className="searchBar__input" defaultValue={
                  ingredientWord ? ingredientWord : ""
                }  type="text" name="query" required />
            </div>
            <div class="td" id="s-cover">
              <button id="searchBar__button" type="submit"></button>
              <span />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
