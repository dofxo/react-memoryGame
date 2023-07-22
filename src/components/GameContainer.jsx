// child components
import Card from "./Card";
import StartGame from "./StartGame";

// cards data
import cardsList from "../data/cardsList";

// elpers
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const GameContainer = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurn] = useState(0);

  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const gameStartHanlde = () => {
    // shuffle list
    const shuffledList = [...cardsList, ...cardsList].sort(
      () => Math.random() - 0.5
    );

    setCards(shuffledList);
    setTurn(0);
  };

  // compairing the choices
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.id === secondChoice.id) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.id === firstChoice.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [firstChoice, secondChoice]);

  // handle card click
  const handleClickCard = (card) => {
    !firstChoice ? setFirstChoice(card) : setSecondChoice(card);
  };

  // restarting turns
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurn((prev) => (prev += 1));
  };

  return (
    <>
      <StartGame gameStartHanlde={gameStartHanlde} turns={turns} />
      <div className="game-container flex flex-wrap gap-6 mt-5 justify-between">
        {cards.map((card) => (
          <Card
            key={uuidv4()}
            cardDetails={card}
            handleClickCard={handleClickCard}
          />
        ))}
      </div>
    </>
  );
};

export default GameContainer;
