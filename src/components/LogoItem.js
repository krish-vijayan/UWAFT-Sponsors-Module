import React from "react";
import "../App.css";

function LogoItem(props) {
  return (
    <>
      <a href={props.link} target="blank">
        <img src={props.logo} className="Sponser-logo" />
      </a>
    </>
  );
}

export default LogoItem;