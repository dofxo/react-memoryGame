// elpers
import { useState } from "react";
import classNames from "classnames";

// styles
import "../styles/components/Card.scss";

const Card = ({ cardDetails }) => {
  // satate to track the clicked status on cards
  const [clicked, setClicked] = useState(false);

  // class name for the card using "ClassNames"
  const clickedClassName = classNames({
    ["clicked-card"]: clicked,
    card: true,
  });
  return (
    <div
      // change the card classList onClick to flip the card
      onClick={() => {
        setClicked((prev) => (prev = true));
      }}
      className={clickedClassName}
    >
      <div className="card-front">
        <img src="../../assets/images/card-bg.jpg" alt="" />
      </div>
      <div className="card-back">{cardDetails}</div>
    </div>
  );
};

export default Card;
