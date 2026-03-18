import {create} from 'zustand';

const useGameStore = create((set) => ({
    screen: 'MENUE', // ;GAME, 'GAMEOVER'
    maxEnemise: 10,
    stage: 1,
    enemiseAlive: 0,

    setScreen: (newScreen) => set({screen: newScreen}),
    setMaxEnemise: (val) => set({maxEnemise: val}),
    startGame: () => set({screen: 'GAME', stage: 1, enemiesAlive: 0})
}))