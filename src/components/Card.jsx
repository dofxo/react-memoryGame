// elpers
import classNames from "classnames";

// styles
import "../styles/components/Card.scss";

const Card = ({ cardDetails, handleCardClick, flipped, disabled }) => {
  // class name for the card using "ClassNames"
  const clickedClassName = classNames({
    ["clicked-card"]: flipped,
    card: true,
  });
  return (
    <div className={clickedClassName}>
      <div
        // change the card classList onClick to flip the card if the disabled prop is false.
        onClick={() => {
          !disabled ? handleCardClick(cardDetails) : "";
        }}
        className="card-front"
      >
        <img src="../../assets/images/card-game-bg.png" alt="" />
      </div>
      <div className="card-back">{cardDetails.info}</div>
    </div>
  );
};

export default Card;
