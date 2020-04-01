import React from "react";
import Item from './Item';
import PropTypes from "prop-types";

const ItemsList = (props) => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {props.items.map((item, index) => (
          <Item key={`item_${index}`} item={item}/>
        ))}
      </ol>
    </div>
  );
};

//check some extra validation for the props
ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsList;
