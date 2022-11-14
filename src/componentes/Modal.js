import React from "react";
import pokeball from "../images/pokeball.png";
import bg from "../images/bg";
function Modal({
  onclick,
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Modal;
