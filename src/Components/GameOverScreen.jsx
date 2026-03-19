import { useGameStore } from '../store/GameStore';

export const GameOverScreen = () => {
    const { stage, isVictory, startGame, setScreen } = useGameStore();

    return (
        <div className="game-over-container">
            <h1 className={isVictory ? "victory-title" : "loss-title"}>
                {isVictory ? "MISSION COMPLETE" : "WASTED"}
            </h1>
            
            <div className="stats-box">
                <p>FINAL STAGE: <strong>{stage}</strong></p>
                <p>RANK: <strong>{isVictory ? "LEGEND" : "RECRUIT"}</strong></p>
            </div>

            <div className="end-buttons">
                <button onClick={startGame} className="btn-restart">
                    [ REPLAY ]
                </button>
                <button onClick={() => setScreen('Menu')} className="btn-home">
                    [ EXIT ]
                </button>
            </div>
        </div>
    );
};