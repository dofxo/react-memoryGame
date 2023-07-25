const StartGame = ({ startTheGame, turns }) => {
  return (
    <div className="flex justify-center mt-5 items-center gap-x-10">
      <button
        onClick={startTheGame}
        className="text-white p-2 bg-purple-500 border border-transparent rounded hover:bg-transparent hover:border-purple-500 hover:border transition"
      >
        restart the game
      </button>
      <h3 className="text-white">Turns : {turns}</h3>
    </div>
  );
};

export default StartGame;
