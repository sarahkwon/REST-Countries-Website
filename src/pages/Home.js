import { useState } from 'react'
import '../styles/Home.css'
import SearchFilter from '../components/SearchFilter/SearchFilter'
import Countries from '../components/Countries/Countries'

const dropDownOptions = [
  {value: 'default', label: 'Filter by Region'},
  {value: 'all', label: 'All'},
  {value: 'africa', label: 'Africa'},
  {value: 'americas', label: 'Americas'},
  {value: 'antarctic', label: 'Antarctic'},
  {value: 'asia', label: 'Asia'},
  {value: 'europe', label: 'Europe'},
  {value: 'oceania', label: 'Oceania'}
]

const Home = () => {

  const [searchInput, setSearchInput] = useState('')
  const [selectedDropDown, setSelectedDropDown] = useState(dropDownOptions[0].value)

  const handleSearchInputChange = (event) => setSearchInput(event.target.value)
  const handleSelectedDropDownChange = (event) => setSelectedDropDown(event.target.value)

  return (
    <main>
      <div className='Home'>
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

export default Home
