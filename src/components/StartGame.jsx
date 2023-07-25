const StartGame = ({ startTheGame, turns }) => {
  return (
    <div className="flex justify-center mt-5 items-center gap-x-10">
      <button
        onClick={startTheGame}
        className="text-white p-2 bg-red-600 border border-transparent rounded hover:bg-transparent hover:border-red-600 hover:border transition"
      >
        restart the game
      </button>
      <h3 className="text-white">Turns : {turns}</h3>
    </div>
  );
};

export default StartGame;
