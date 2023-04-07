import DarkModeToggleButton from './DarkModeToggleButton'
import '../../styles/Header/Header.css'

const Header = ({ switchTheme, theme }) => {
  console.log(theme)
  return (
    <header data-theme={theme}>
      <div className='header-contents'>
        <h1>Where in the world?</h1>
        <DarkModeToggleButton switchTheme={switchTheme} theme={theme}/>
      </div>
    </header>
  );
}

export default Header