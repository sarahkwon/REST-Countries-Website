import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import '../../styles/Countries/Countries.css'
import CountryService from '../../services/countries.js'

const Countries = ({ searchInput }) => {
  //grab from restcountries API here
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    CountryService.getFiltered('flags', 'name', 'population' , 'region', 'capital')
      .then((result) => {
        setCountriesData(result.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <section className='container'>
      {countriesData
        .filter((country) =>  //filter based on search bar
          country.name.common.toLowerCase().includes(searchInput.toLowerCase()))
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