import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchContainer = props => {
  return (
      
      <div className="recipe__background">

      <SearchBar searchRecipe={props.searchRecipe} 
                 chosenIngredients={props.chosenIngredients}/>
      <div className="recipe__container">
     
        <SearchResults
          recipes={props.recipes}
          getSingleRecipe={props.getSingleRecipe}
        />
          </div>
        </div>
  );
};
export default SearchContainer;
