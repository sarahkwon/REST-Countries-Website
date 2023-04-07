import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import '../../styles/Header/DarkModeToggleButton.css'

const DarkModeToggleButton = ({ switchTheme, theme }) => {
  return (
    <button className='dark-mode-toggle-button' onClick={switchTheme}>
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} className='fa'/> : <FontAwesomeIcon icon={faMoonSolid} className='fa'/>}
      {theme === 'light' ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggleButton