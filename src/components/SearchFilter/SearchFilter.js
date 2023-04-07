import '../../styles/SearchFilter/SearchFilter.css'
import SearchBar from './SearchBar'
import FilterDropDown from './FilterDropDown'

const SearchFilter = ({ 
  handleSearchInputChange, 
  selectedDropDown, 
  handleSelectedDropDownChange, 
  dropDownOptions
}) => {
  return (
      <div className='searchfilter_container'>
        <SearchBar 
          handleSearchInputChange={handleSearchInputChange}
        />
        <FilterDropDown 
          selectedDropDown={selectedDropDown}
          handleSelectedDropDownChange={handleSelectedDropDownChange}
          dropDownOptions={dropDownOptions}
        />
      </div>
  )
}

export default SearchFilter