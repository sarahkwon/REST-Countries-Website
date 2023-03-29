import '../../styles/SearchFilter/SearchFilter.css'
import SearchBar from './SearchBar'
import FilterDropDown from './FilterDropDown'

const SearchFilter = () => {
  return (
    <div className='searchfilter_container'>
      <SearchBar/>
      <FilterDropDown/>
    </div>
  )
}

export default SearchFilter