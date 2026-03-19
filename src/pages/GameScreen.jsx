import  {useGameStore } from '../store/GameStore';
import { Enemy } from '../Components/Enemy';
import { useState, useEffect } from 'react';

export const GameScreen = () => {
    const { stage, enemiesAlive,  maxEnemies} = useGameStore();
    const [ enemyList, setEnemyList ] = useState([]);

    const removeEnemyFromList =(idToRemove) => {
        setEnemyList(prevList => prevList.filter(id => id !== idToRemove))
    };



    useEffect(() =>{
        const spawnInterval = setInterval(() => {
            setEnemyList(prevList => {
                if (prevList.length >= maxEnemies) {
                    return prevList;
                }
                // create uniq id for all enemy by date
                return [...prevList, Date.now()]
            })
        }, 5000)
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
                    <Enemy key={id} id={id} onKill={removeEnemyFromList}/>
                ))}
            </div>
        </div>
    )
}
