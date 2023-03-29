import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import '../../styles/SearchFilter/SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchBar_container'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
      <input type='text' id='countryName' name='countryName' placeholder='Search for a country...'/>
    </div>
    
  )
}

export default SearchBar