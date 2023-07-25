// child components
import Card from "./Card";
import StartGame from "./StartGame";

// cards data
import cardsList from "../data/cardsList";

// elpers
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const GameContainer = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurn] = useState(0);

  const gameStartHanlde = () => {
    // shuffle list
    const shuffledList = [...cardsList, ...cardsList].sort(
      () => Math.random() - 0.5
    );
    setCards(shuffledList);
    setTurn(0);
  };

  return (
    <>
      <StartGame gameStartHanlde={gameStartHanlde} turns={turns} />
      <div className="game-container flex flex-wrap gap-6 mt-5 justify-between">
        {cards.map((card) => (
          <Card key={uuidv4()} cardDetails={card} />
        ))}
      </div>
    </>
  );
};

export default GameContainer;
