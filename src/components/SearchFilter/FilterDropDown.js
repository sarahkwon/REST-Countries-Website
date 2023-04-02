

import '../../styles/SearchFilter/FilterDropDown.css'

const FilterDropDown = () => {
  return (
    <div className='filterdropdown_container'>
      <select id='region' name='region' defaultValue={'default'}>
        <option value='default' disabled hidden>Filter by Region</option>
        <option>Some</option>
        <option>Arbitrary</option>
        <option>Options</option>
        <option>That</option>
        <option>Will</option>
        <option>Be</option>
        <option>Mapped</option>
        <option>Out</option>
      </select>
    </div>
  )
}

export default FilterDropDown