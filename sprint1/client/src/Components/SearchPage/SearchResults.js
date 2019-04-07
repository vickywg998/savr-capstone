import React from "react";
import { Link } from "react-router-dom";

const SearchResults = props => {
  return (
    <>
      {props.recipes.length ? (
        <>
          {props.recipes.map((item, i) => {
   
            return (
              <div className="card">
                <Link
                  to={{
                    pathname: `/search/${i}`,
                    state: {
                      item: props.recipes[i]
                    }
                  }}
                >
                  <img src={item.recipe.image} className="recipe__img--size" alt=""/>
                  <h3>{item.recipe.label}</h3>
                  {item.recipe.totalTime > 0 ? (
                    <p className="time__spacing">
                      Preparation Time: {Math.floor(item.recipe.totalTime / 60)}
                      h {item.recipe.totalTime % 60}m
                    </p>
                  ) : null}
                  {item.recipe.dietLabels.length > 0 ? (
                    <small className="text-muted">
                      Diet Labels: {item.recipe.dietLabels}
                    </small>
                  ) : null}
                </Link>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default SearchResults;
