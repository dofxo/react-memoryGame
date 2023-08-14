// elpers
import classNames from "classnames";
import { useState } from "react";

// styles
import "../styles/components/Card.scss";

const Card = ({ cardDetails, handleCardClick, flipped, disabled }) => {
	// state to track the click on the card. if it has been clicked once, it could not be clicked twice.
	const [clicked, setClickedStatus] = useState(false);

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
					!disabled && !clicked ? handleCardClick(cardDetails) : "";
					setClickedStatus(true);
					setTimeout(() => {
						setClickedStatus(false);
					}, 800);
				}}
				className="card-front"
			>
				<img src="./assets/images/card-game-bg.png" alt="" />
			</div>
			<div className="card-back">
				<img src={cardDetails.info} alt="" />
			</div>
		</div>
	);
};

export default Card;
