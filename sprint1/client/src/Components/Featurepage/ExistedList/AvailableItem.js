import React from "react";
import { Link } from "react-router-dom";

const AvailableItem = props => {
  return (
  <>
    <tr>
      <td>
        <label>
          {/* <Link to={`/feature/${props.id}`}> */}
            <input 
            type="checkbox" 
            onChange={props.handleOnChangeIngredients}
            value={props.foodItem}
            />
          <span className="itemName__font">{props.foodItem}</span>
          {/* </Link> */}
        </label>
      </td>
      <td>{props.category}</td>
      <td>Expiring in: {props.expiryDate} days</td>
      <td>
        {" "}
        <button
          type="submit"
          className="remove__button--color"
          onClick={() => props.removeItem(props.id)}
        >
          Remove
        </button>
      </td>
    </tr>

</>
  );
};

// AvailableItem.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };

export default AvailableItem;
