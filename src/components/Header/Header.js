import DarkModeToggleButton from './DarkModeToggleButton'
import '../../styles/Header/Header.css'

const Header = () => {
  return (
    <header>
      <div className='header-contents'>
        <h1>Where in the world?</h1>
        <DarkModeToggleButton/>
      </div>
    </header>
  );
}

export default Header