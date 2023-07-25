// child components
import Card from "./Card";
import StartGame from "./StartGame";

// cards data
import cardsList from "../data/cardsList";

// elpers
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useEffect } from "react";

const GameContainer = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurn] = useState(0);
  const [disable, setDisabled] = useState(false);

  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const startTheGame = () => {
    // duplicates the original array and sorts it in a random order each time
    setCards(
      [...cardsList, ...cardsList]
        .sort(() => Math.random() - 0.5)
        // maps on each Object (item of array) and gives each one of them a unique ID
        .map((card) => {
          return { ...card, id: uuidv4() };
        })
    );
    // set the choices to null incase the didn't change on game restart.
    setFirstChoice(null);
    setSecondChoice(null);
    setTurn(0);
  };

  // on component first render
  useEffect(() => {
    startTheGame();
  }, []);

  // compairing the 2 cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      // set the disabled true to prevent the cards being clicked.
      setDisabled(true);
      // if the choices matches we gonna update the cards state and change their matched key of the paired cards to true.
      if (firstChoice.info === secondChoice.info) {
        setCards((prev) =>
          prev.map((card) => {
            if (card.info === firstChoice.info) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        );
        resetChoice();
      }
      // if the choices doesn't match, we gonna reset the choices after a certain amount of time
      else {
        setTimeout(() => {
          resetChoice();
        }, 800);
      }
    }
  }, [firstChoice, secondChoice]);

  // reset choices
  const resetChoice = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurn((prev) => (prev += 1));
    setDisabled(false);
  };

  // handle Card Click (to store the cardID)
  const handleCardClick = (cardInfo) => {
    !firstChoice ? setFirstChoice(cardInfo) : setSecondChoice(cardInfo);
  };

  return (
    <>
      <StartGame startTheGame={startTheGame} turns={turns} />
      <div className="game-container flex flex-wrap gap-6 mt-5 justify-between">
        {cards.map((card) => (
          <Card
            key={card.id}
            cardDetails={card}
            handleCardClick={handleCardClick}
            flipped={
              card === firstChoice || card === secondChoice || card.matched
            }
            disabled={disable}
          />
        ))}
      </div>
    </>
  );
};

export default GameContainer;
