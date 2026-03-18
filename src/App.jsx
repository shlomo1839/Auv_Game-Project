import Menu from './pages/menu.jsx';
import GameScreen from './pages/GameScreen.jsx.jsx';
import useGameStor from './store/GameStore.jsx';


function App() {
  const screen = useGameStor((state) => state.screen);

  return(
    <div className='app'>
      {screen === 'MENU' && <Menu />}
      {screen === 'Game' && <GameScreen />}
    </div>
  )
}


export default App;