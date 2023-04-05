import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './App.css'

//pages
import Home from './pages/Home.js'
import CountryDetails from './pages/CountryDetails'

//layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />}/>
      <Route path=':countryName' element={<CountryDetails/>}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
