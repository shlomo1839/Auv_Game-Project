import  {useGameStore } from '../store/GameStore';
import { Enemy } from '../Components/Enemy';

export const GameScreen = () => {
    const { stage, enemiesAlive,  maxEnemies} = useGameStore();

    return (
        <div className='game-container'>
            <div className='hud'>
                <span>Stage: {stage}</span>
                <span>Alive: {enemiesAlive} / {maxEnemies}</span>
            </div>
            <div className='game-area'>
                <Enemy />
            </div>
        </div>
    )
}
