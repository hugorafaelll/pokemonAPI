import React, { useState } from "react";
import "./PokeCard.css";
import pokeball from "../images/pokeball.png";
import Modal from "./Modal";

function PokeCard({ id, name, image, type, weight, height, stats, statsName }) {
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <img src={image} alt={name} className="image-title" />
            <p
              style={{
                width: "180px",
                color: "black",
                textTransform: "uppercase",
              }}
            >
              No.
              {id}
            </p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" className="pokeball-title" />
          </div>
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{ background: "#dbdbd9", textAlign: "center" }}
              className="stats-left"
            >
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div style={{ background: "#ffffffff" }} className="stats-right">
              <p>{type}</p>
              <p>{height} 0 cm </p>
              <p>{weight} lbs </p>
            </div>
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img
          src={image}
          alt={name}
          style={{
            maxHeight: "550px",
            marginRight: "10px",
            width: "50px",
          }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
    </div>
  );
}

export default PokeCard;
