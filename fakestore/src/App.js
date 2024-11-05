
import Termekek from './components/Termekek';
import Kosar from './components/Kosar';
import { useContext } from 'react';
import { ApiContext } from './contexts/ApiContext';

function App() {

  const {termekLista} = useContext(ApiContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
      </header>
      <main className='row'>
        <aside className='col-lg-3'>
          <h3>Kosár</h3>
          <Kosar/>
        </aside>
        <article className='col-lg-9'>
          <h3>Termékek</h3>
          <Termekek termekLista={termekLista}/>
        </article>
      </main>
    </div>
  );
}

export default App;
