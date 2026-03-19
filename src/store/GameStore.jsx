import { use } from 'react';
import {create} from 'zustand';

export const useGameStore = create((set) => ({
    screen: 'Menu', // ;Game, 'GAMEOVER'
    maxEnemies: 10,
    stage: 1,
    enemiesAlive: 0,

    setScreen: (newScreen) => set({screen: newScreen}),
    setMaxEnemies: (val) => set({maxEnemies: val}),
    startGame: () => set({screen: 'Game', stage: 1, enemiesAlive: 0}),

    removeEnemy: () => set((state) => ({
        enemiesAlive: Math.max(0, state.enemiesAlive - 1)
    })),

    addEnemy: () => set((state) => ({
        enemiesAlive: state.enemiesAlive +1
    })),
}));