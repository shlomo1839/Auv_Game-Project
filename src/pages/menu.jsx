import { useGameStore } from '../store/GameStore.jsx';

export const Menu = ()=> {
    const {maxEnemies, setMaxEnemies, startGame} = useGameStore();

    return(
        <div className='Menu'>
            <h1>Auv Game!</h1>
            <label>
                Max Enemies On Screen:
                <input 
                    type='number'
                    value={maxEnemies}
                    onChange={(e) => setMaxEnemies(Number(e.target.value))}
                />
            </label>
            <button onClick={startGame}>Start Game</button>
        </div>
    )
};

