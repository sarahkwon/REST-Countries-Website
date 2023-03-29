import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import '../../styles/Header/DarkModeToggleButton.css'

const DarkModeToggleButton = () => {
  return (
    <button className='dark-mode-toggle-button'>
      <FontAwesomeIcon icon={faMoon} className='fa'/>
      <p>Dark Mode</p>
    </button>
  )
}

export default DarkModeToggleButton