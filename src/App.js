import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.js'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Countries from './components/Countries/Countries'

const dropDownOptions = [
  {value: 'default', label: 'Filter by Region'},
  {value: 'all', label: 'All'},
  {value: 'africa', label: 'Africa'},
  {value: 'americas', label: 'Americas'},
  {value: 'asia', label: 'Asia'},
  {value: 'europe', label: 'Europe'},
  {value: 'oceania', label: 'Oceania'}
]

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [selectedDropDown, setSelectedDropDown] = useState(dropDownOptions[0].value)

  const handleSearchInputChange = (event) => setSearchInput(event.target.value)
  const handleSelectedDropDownChange = (event) => setSelectedDropDown(event.target.value)

  return (
    <main>
      <Header/>
      <div className='App'>
        <SearchFilter 
          selectedDropDown={selectedDropDown}
          handleSearchInputChange={handleSearchInputChange} 
          handleSelectedDropDownChange={handleSelectedDropDownChange} 
          dropDownOptions={dropDownOptions}
        />
        <Countries searchInput={searchInput} regionFilter={selectedDropDown}/>
      </div>
    </main>
  );
}

export default App
