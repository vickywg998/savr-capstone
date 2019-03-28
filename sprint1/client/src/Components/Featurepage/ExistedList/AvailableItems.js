import React from "react";
import AvailableItem from "./AvailableItem";
import Table from "react-bootstrap/Table";

const AvailableItems = props => {

  const availableItems = props.foodItems.map(item => {

    return (
      <AvailableItem
        foodItem={item.foodItem}
        category={item.category}
        expiryDate={item.expiryDate}
        id={item.id}
        removeItem={props.removeItem}
        handleOnChangeIngredients={props.handleOnChangeIngredients}
        value={item.foodItem}
    
      />
    );
  });
  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Category</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>{availableItems}</tbody>
        
      </Table>
     
    </>
  );
};

export default AvailableItems;
