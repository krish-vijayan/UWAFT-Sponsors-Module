import React from "react";
import "../App.css";

function CarouselItem(props) {
  return (
    <>
      <a href={props.link} target="blank">
        <img src={props.logo} className="Sponser-logo" />
      </a>
    </>
  );
}

export default CarouselItem;