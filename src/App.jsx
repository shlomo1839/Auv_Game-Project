import { Menu } from './pages/Menu.jsx';
import { GameScreen } from './pages/GameScreen.jsx';
import { useGameStore } from './store/GameStore.jsx';
import './App.css'

function App() {
  const screen = useGameStore((state) => state.screen);

  return(
    <div className='app'>
      {screen === 'Menu' && <Menu />}
      {screen === 'Game' && <GameScreen />}
    </div>
  )
}


export default App;