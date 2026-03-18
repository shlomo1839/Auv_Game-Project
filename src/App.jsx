import Menu from './pages/menu.jsx';
import useGameStor from './store/GameStore.jsx';


function App() {
  const screen = useGameStor((state) => state.screen);

  return(
    <div className='app'>
      {screen == 'MENU' && <Menu />}
    </div>
  )
}


export default App;