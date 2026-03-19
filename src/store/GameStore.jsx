import { use } from 'react';
import {create} from 'zustand';

export const useGameStore = create((set, get) => ({
    screen: 'Menu',
    maxEnemies: 5,
    stage: 1,
    enemiesAlive: 0,
    totalKillsInStage: 0,

    setScreen: (newScreen) => set({screen: newScreen}),
    setMaxEnemies: (val) => set({maxEnemies: val}),


    addEnemy: () => set((state) => ({
        enemiesAlive: state.enemiesAlive + 1
    })),


    removeEnemy: () => {
        const currentKills = get().totalKillsInStage + 1
        const currentStage = get().stage;

        const killsNedded = currentStage * 5;

        if(currentKills >= killsNedded){
            set((state)=>({
                stage: state.stage+1,
                totalKillsInStage: 0,
                enemiesAlive: Math.max(0, state.enemiesAlive -1),
                maxEnemies: state.maxEnemies + 2
            }));
        } else {
            set((state)=> ({
                enemiesAlive: Math.max(0, state.enemiesAlive -1),
                totalKillsInStage: currentKills
            }))
        }
    },


    startGame: () => set({
        screen: 'Game',
        maxEnemies: 5,
        stage: 1,
        enemiesAlive: 0,
        totalKillsInStage: 0,
    }),
}));