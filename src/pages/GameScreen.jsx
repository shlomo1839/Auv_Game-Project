import { useGameStore } from '../store/GameStore';
import { Enemy } from '../Components/Enemy';
import { useState, useEffect } from 'react';

export const GameScreen = () => {
    const { stage, enemiesAlive, maxEnemies, setScreen } = useGameStore();
    const [enemyList, setEnemyList] = useState([]);

    const removeEnemyFromList = (idToRemove) => {
        setEnemyList(prevList => prevList.filter(id => id !== idToRemove));
    };

    
    useEffect(() => {
        const currentSpawnRate = Math.max(800, 3000 - (stage * 200));

        const spawnInterval = setInterval(() => {
            setEnemyList(prevList =>{
                const { totalKillsInStage } = useGameStore.getState();
                
                if (totalKillsInStage >= 10) {
                    return prevList;
                }
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
                const currentAlive = useGameStore.getState().enemiesAlive;
                if (currentAlive >= maxEnemies) {
                    setScreen('GameOver'); 
                }
            }, 3000);

            return () => clearTimeout(lossTimer);
        }
    }, [enemiesAlive, maxEnemies, setScreen]);

    return (
        <div className='game-container'>
            <div className='hud'>
                <div style={{ color: enemiesAlive >= maxEnemies - 1 ? '#ff4d4d' : '#00ff00' }}>
                    <span>Stage: {stage} / 3 </span>
                    <br />
                    <span>Alive: {enemiesAlive} / {maxEnemies}</span>
                    {enemiesAlive >= maxEnemies && <strong> - DANGER!</strong>}
                </div>
            </div>
            
            <div className='game-area'>
                {enemyList.map(id => (
                    <Enemy 
                        key={id} 
                        id={id} 
                        onKill={removeEnemyFromList}
                    />
                ))}
            </div>
        </div>
    );
};