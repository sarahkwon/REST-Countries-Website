import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import Loading from "../Loading"
import '../../styles/Countries/Countries.css'
import CountryService from '../../services/countries.js'

const Countries = ({ searchInput, regionFilter }) => {
  //grab from restcountries API here
  const [countriesData, setCountriesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    CountryService.getFiltered('flags', 'name', 'population' , 'region', 'capital')
      .then((result) => {
        setCountriesData(result.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <section className='container'>
      {countriesData
        .filter((country) => //filter based on search bar and dropdown menu
          (country.name.common.toLowerCase().includes(searchInput.toLowerCase()) && 
          ((regionFilter === 'default' || regionFilter === 'all') ? true : country.region.toLowerCase() === regionFilter)))
        .map((country, idx) => //then render the filtered array
          <CountryCard 
            key={idx}
            flags={country.flags}
            name={country.name} 
            population={country.population} 
            region={country.region} 
            capital={country.capital}
          />
        )
      }
    </section>
  );
}

export default Countries