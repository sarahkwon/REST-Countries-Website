import DarkModeToggleButton from './DarkModeToggleButton'
import '../../styles/Header/Header.css'

const Header = () => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <DarkModeToggleButton/>
    </header>
  );
}

export default Header