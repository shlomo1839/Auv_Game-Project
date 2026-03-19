import  {useGameStore } from '../store/GameStore';
import { Enemy } from '../Components/Enemy';
import { useState, useEffect } from 'react';

export const GameScreen = () => {
    const { stage, enemiesAlive,  maxEnemies, setScreen} = useGameStore();
    const [ enemyList, setEnemyList ] = useState([]);

    const removeEnemyFromList =(idToRemove) => {
        setEnemyList(prevList => prevList.filter(id => id !== idToRemove))
    };

    useEffect(() => {
        const currentSpawnRate = Math.max(500, 3000 - (stage * 400));

        const spawnInterval = setInterval(() => {
            setEnemyList(prevList => {
                if (prevList.length >= maxEnemies) {
                    return prevList;
                }
                return [...prevList, Date.now()];
            });
        }, currentSpawnRate);

        return () => clearInterval(spawnInterval);
    }, [maxEnemies, stage]);


    useEffect(() => {
        if (enemiesAlive >= maxEnemies) {
            const lossTimer = setTimeout(() => {
                if (useGameStore.getState().enemiesAlive >= maxEnemies) {
                    alert(`Game Over! You reached Stage ${stage}`);
                    setScreen('Menu');
                }
            }, 2000);

            return () => clearTimeout(lossTimer);
        }
    }, [enemiesAlive, maxEnemies, stage, setScreen]);
            

    return (
        <div className='game-container'>
            <div className='hud'>
        
                <div style={{ color: enemiesAlive >= maxEnemies - 1 ? 'red' : '#00ff00' }}>
                    <span>Stage: {stage}</span>
                    <br />
                    <span>Alive: {enemiesAlive} / {maxEnemies}</span>
                    {enemiesAlive >= maxEnemies && <strong> - DANGER!</strong>}
                </div>
            </div>
            
            <div className='game-area'>
                {enemyList.map(id => (
                    <Enemy key={id} id={id} onKill={removeEnemyFromList}/>
                ))}
            </div>
        </div>
    );
}
