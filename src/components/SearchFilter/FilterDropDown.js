

import '../../styles/SearchFilter/FilterDropDown.css'

const FilterDropDown = ({ selectedDropDown, handleSelectedDropDownChange, dropDownOptions }) => {
  
  return (
    <div className='filterdropdown_container'>
      <select
        id='region' 
        name='region' 
        onChange={handleSelectedDropDownChange}
        value={selectedDropDown}
      >
        
        {dropDownOptions.map((option,idx) => {
          return option.value === 'default' ? 
            <option key={idx} value={option.value} disabled hidden>{option.label}</option> : 
            <option key={idx} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}

export default FilterDropDown