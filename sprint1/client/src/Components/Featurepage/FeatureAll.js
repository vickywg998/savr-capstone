import React from "react";
import AvailableItems from "./ExistedList/AvailableItems";

const FeatureAll = props => {

  return (
    <div>
      <AvailableItems  foodItems={props.foodItems}
                      removeItem={props.removeItem}
                      handleOnChangeIngredients={props.handleOnChangeIngredients}
                      value={props.foodItem}      
      />
       <form onSubmit={props.handleSubmitRecipes}>
          <button type="submit" 
          className="addIngredient__button"
          >Search Recipe of the Day!</button>
        </form>
    </div>
  );
};

export default FeatureAll;
