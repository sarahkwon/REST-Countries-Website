import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import './App.css'

//pages
import Home from './pages/Home.js'
import CountryDetails from './pages/CountryDetails'

//layouts
import RootLayout from './layouts/RootLayout'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  console.log('theme:', theme)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout switchTheme={switchTheme} theme={theme}/>}>
        <Route index element={<Home />}/>
        <Route path=':countryName' element={<CountryDetails/>}/>
      </Route>
    )
  );

  return (
    <div className='App' data-theme={theme}>
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App
