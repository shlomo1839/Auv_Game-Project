import { Menu } from './pages/Menu';
import { GameScreen } from './pages/GameScreen';
import { useGameStore } from './store/GameStore';
import { GameOverScreen } from './Components/GameOverScreen';
import './App.css'

function App() {
  const screen = useGameStore((state) => state.screen);

  return(
    <div className='app'>
      {screen === 'Menu' && <Menu />}
      {screen === 'Game' && <GameScreen />}
      {screen === 'GameOver' && <GameOverScreen />}
    </div>
  )
}


export default App;