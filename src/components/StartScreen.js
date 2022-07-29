import "./StartScreen.css";

const StartScreen = ({startGame}) => {
	return <div className="start">
        <h1>Secret<span>W</span>ord</h1>
        
        <button onClick={startGame}>Começar o jogo</button>
    </div>;
};

export default StartScreen;
