import React from "react";
import "../../Styles/IndividualRecipe.scss";

const IndividualRecipe = props => {
  const {
    image,
    label,
    dietLabels,
    totalTime,
    url,
    healthLabels,
    ingredients
  } = props.item.recipe;

  return (
    <div className="individualRecipe__bg">
      <div className="recipe__container--big">
        <div className="recipe__wrapper recipe__wrapper--left">
          <div className="recipe__img--wrapper">
            <img src={image} alt="" className="indImg__size" />
          </div>

          <div className="recipeLabel__container">
            <div className="recipeLabel__wrapper">
              {totalTime > 0 ? (
                <span className="minute_icon">
                  <span className="sub_minute_icon">
                    <h3>{totalTime}</h3>
                    <span className="min">MINS</span>
                  </span>
                </span>
              ) : null}
              <h3 className="recipeLabel__position">{label}</h3>
            </div>
            <div className="recipeLabel__wrapper">
              {dietLabels.length > 0 ? <p>{dietLabels}</p> : null}
              <p>{healthLabels.join(" , ")}</p>
            </div>
          </div>
        </div>
        <div className="recipe__wrapper recipe__wrapper--right">
          <h4 className="ingredient__header">Ingredients</h4>

          <div className="ingredientList__position">
            <ul>
              {ingredients.map((ingredient, i) => {
                return <li>{ingredient.text}</li>;
              })}
            </ul>
            <p>
              <b>More Info on : </b>
              <span>{url}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualRecipe;
