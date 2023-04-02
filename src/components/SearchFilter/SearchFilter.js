import '../../styles/SearchFilter/SearchFilter.css'
import SearchBar from './SearchBar'
import FilterDropDown from './FilterDropDown'

const SearchFilter = ({handleSearchInputChange}) => {
  return (
      <div className='searchfilter_container'>
        <SearchBar handleSearchInputChange={handleSearchInputChange}/>
        <FilterDropDown/>
      </div>
  )
}

export default SearchFilter