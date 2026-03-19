import { create } from 'zustand';

export const useGameStore = create((set, get) => ({
    screen: 'Menu',
    maxEnemies: 5,
    stage: 1,
    enemiesAlive: 0,
    totalKillsInStage: 0,
    isVictory: false,
    

    setScreen: (newScreen) => set({ screen: newScreen }),
    
    
    setMaxEnemies: (val) => set({ maxEnemies: val }),
    
    addEnemy: () => set((state) => ({ 
        enemiesAlive: state.enemiesAlive + 1 
    })),


    checkLevelUp: () => {
        const state = get();
        const killsToNextLevel = 10; 

        
        if (state.totalKillsInStage >= killsToNextLevel) {
            if (state.stage === 3) {
                set({ screen: 'GameOver', isVictory: true });
            } else {
                set((state) => ({
                    stage: state.stage + 1,
                    maxEnemies: state.maxEnemies + 2,
                    totalKillsInStage: 0,
                    enemiesAlive: 0
                }));
            }
        }
    },


removeEnemy: () => {
        set((state) => ({
            totalKillsInStage: state.totalKillsInStage + 1,
            enemiesAlive: Math.max(0, state.enemiesAlive - 1)
        }));
        get().checkLevelUp();
    },

    startGame: () => {
        set({ 
            screen: 'Game', 
            stage: 1, 
            maxEnemies: 5,
            enemiesAlive: 0, 
            totalKillsInStage: 0 
        });
    },
}));