// child components
import Card from "./Card";

// cards data
import cardsList from "../data/cardsList";

// elpers
import { v4 as uuidv4 } from "uuid";

const GameContainer = () => {
  const shuffledList = [...cardsList, ...cardsList].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="game-container flex flex-wrap gap-6 mt-5 justify-between">
      {shuffledList.map((card) => (
        <Card key={uuidv4()} cardDetails={card} />
      ))}
    </div>
  );
};

export default GameContainer;
