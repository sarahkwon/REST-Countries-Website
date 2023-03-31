import './App.css'
import Header from './components/Header/Header.js'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Countries from './components/Countries/Countries'

function App() {
  return (
    <main>
      <Header/>
      <div className='App'>
        <SearchFilter/>
        <Countries/>
      </div>
    </main>
  );
}

export default App;
