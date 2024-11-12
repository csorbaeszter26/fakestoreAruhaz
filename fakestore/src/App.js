
import Termekek from './components/Termekek';
import Kosar from './components/Kosar';
import { useContext } from 'react';
import { ApiContext } from './contexts/ApiContext';
import Public from './pages/Public';
import Urlap from './contexts/Urlap';
import Admin from './pages/Admin';

function App() {

  const {termekLista} = useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
      </header>
      
      <main>
        <Admin/>
      </main>
    </div>
  );
}

export default App;
