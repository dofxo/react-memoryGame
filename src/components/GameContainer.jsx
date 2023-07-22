// child components
import Card from "./Card";

// cards data
import cardsList from "../data/cardsList";

// elpers
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const GameContainer = () => {
  const shuffledList = [...cardsList, ...cardsList].sort(
    () => Math.random() - 0.5
  );

  const [cards, setCards] = useState(shuffledList);

  return (
    <div className="game-container flex flex-wrap gap-6 mt-5 justify-between">
      {cards.map((card) => (
        <Card key={uuidv4()} cardDetails={card} />
      ))}
    </div>
  );
};

export default GameContainer;
