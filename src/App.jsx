import GameContainer from "./components/GameContainer"

const App = () => {
	return (
		<>
		<div className="container">
		<h1 className="text-center text-4xl font-bold text-white">Memory Game</h1>
			{/* Game Container */}
			<GameContainer />
		</div>
		</>
	)
}

export default App
