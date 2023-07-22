// elpers
import { useState } from "react";
import classNames from "classnames";

// styles
import "../styles/components/Card.scss";

const Card = ({ cardDetails, handleClickCard }) => {
  // satate to track the clicked status on cards

  // class name for the card using "ClassNames"
  const clickedClassName = classNames({
    ["clicked-card"]: cardDetails.matched,
    card: true,
  });
  return (
    <div
      // change the card classList onClick to flip the card
      onClick={() => {
        handleClickCard(cardDetails);
      }}
      className={clickedClassName}
    >
      <div className="card-front">
        <img src="../../assets/images/card-bg.jpg" alt="" />
      </div>
      <div className="card-back">{cardDetails.info}</div>
    </div>
  );
};

export default Card;
