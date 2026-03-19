import  {useGameStore } from '../store/GameStore';
import { Enemy } from '../Components/Enemy';
import { useState, useEffect } from 'react';

export const GameScreen = () => {
    const { stage, enemiesAlive,  maxEnemies} = useGameStore();
    const [ enemyList, setEnemyList ] = useState([]);
    
    useEffect(() =>{
        const spawnInterval = setInterval(() => {
            setEnemyList(prevList => {
                if (!prevList || prevList.length >= maxEnemies) {
                    return prevList;
                }
                // create uniq id for all enemy by date
                return [...prevList, Date.now()]
            })
        }, 1000)
        return ()=>clearInterval(spawnInterval)
    }, [maxEnemies])
            

    return (
        <div className='game-container'>
            <div className='hud'>
                <span>Stage: {stage}</span>
                <span>Alive: {enemiesAlive} / {maxEnemies}</span>
            </div>
            <div className='game-area'>
                {enemyList.map(id => (
                    <Enemy key={id} />
                ))}
            </div>
        </div>
    )
}
