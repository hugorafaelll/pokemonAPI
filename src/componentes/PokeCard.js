import React from "react";
import "./PokeCard.css";

function PokeCard([id, name, image, type, weight, height, stats, statsName]) {
  return (
    <div className="container">
      <div className="show">
        <div className="stat-container-title">
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: "180px", color: "black" }}> No.{id} </p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
