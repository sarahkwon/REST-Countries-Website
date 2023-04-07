import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const RootLayout = ({ switchTheme, theme }) => {
  return (
    <div>
      <Header switchTheme={switchTheme} theme={theme}/>
      <Outlet/>
    </div>
    
  )
}

export default RootLayout