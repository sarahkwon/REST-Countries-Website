import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.js'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Countries from './components/Countries/Countries'

function App() {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = (event) => setSearchInput(event.target.value)

  return (
    <main>
      <Header/>
      <div className='App'>
        <SearchFilter handleSearchInputChange={handleSearchInputChange}/>
        <Countries searchInput={searchInput}/>
      </div>
    </main>
  );
}

export default App;
