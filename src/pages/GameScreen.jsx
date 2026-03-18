import useGameStore from '../store/GameStore/jsx';

function GameScreen() {
    const { stage, enemiesAlive,  maxEnemies} =useGameStore();

    return (
        <div className='game-container'>
            <div className='hud'>
                <span>Stage: {stage}</span>
                <span>Alive: {enemiesAlive}</span>
            </div>
            <div className='game-area'>
                <p>map area: next</p>
            </div>
        </div>
    )
}