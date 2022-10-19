import "./EditMenu.css";
import React, { useState } from "react";

const EditMenu = ({ name, price }) => {
  const [editingName, setEditingValue] = useState(name);
  const [editingPrice, setEditingPrice] = useState(price);
  const onChangeName = (event) => setEditingValue(event.target.value);
  const onChangePrice = (event) => setEditingPrice(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlurName = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(name);
    } 
  };

  const onBlurPrice = (event) => {
    if (event.target.value.trim() === "") {
      setEditingPrice(price);
    } 
  };

  return (
    <div className="container">
      <div>
        <input
          className="edit-input-name"
          type="text"
          aria-label="Field name"
          value={editingName}
          onChange={onChangeName}
          onKeyDown={onKeyDown}
          onBlur={onBlurName}
        />
      </div>
      <div>
        <input
          className="edit-input-price"
          type="text"
          aria-label="Field name"
          value={editingPrice}
          onChange={onChangePrice}
          onKeyDown={onKeyDown}
          onBlur={onBlurPrice}
        />
      </div>
    </div>
  );
};

export default EditMenu;
