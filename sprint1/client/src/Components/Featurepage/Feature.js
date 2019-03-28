import React from "react";
import AddListItem from "./AddNew/AddListItem";

const Feature = props => {
return (
  <div>
      <AddListItem
        handleSubmitEvent={props.handleSubmitEvent}
        foodItems={props.foodItems}
        content={props.content}
        presetValues={props.presetValues}
      />

  </div>
);
};

export default Feature;
