import React from "react";
import '../../Styles/IndividualRecipe.scss'

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
    <div className="background">
      <div className="central container1">
        <div className="recipe_photo">
          <div className="img_back">
            <img src={image} alt="" className="indImg__size"/>
          </div>
          { totalTime > 0 ? 
            (
              <div className="minute_icon">
            <div className="sub_minute_icon">
            <h3>{totalTime}</h3>
            <span>MINS</span>
          </div>
        </div>
            ) : null
            }

          <div className="recipe_details">
            <h3>{label}</h3>
            {dietLabels.length > 0 ? (
              <p>{dietLabels}</p>
            ) : null}
            <p>
            {healthLabels.join(' ')}
            </p>
          </div>
        </div>

        <div className="ingredients">
          <div className="ingredient_header">
            <h4>Ingredients</h4>
          </div>
          <div className="ingredient_body">
            <ul>
            {ingredients.map((ingredient, i) => {
              return <li>{ingredient.text}</li>;
            })}
            </ul>
            <p>
              <b>More Info on : </b>
              {url}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualRecipe;

