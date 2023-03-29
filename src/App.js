import './App.css'
import Header from './components/Header/Header.js'
import SearchFilter from './components/SearchFilter/SearchFilter'

function App() {
  return (
    <main>
      <Header/>
      <div className='App'>
        <SearchFilter/>
      </div>
    </main>
  );
}

export default App;
