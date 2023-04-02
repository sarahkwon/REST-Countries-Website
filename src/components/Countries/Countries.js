import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import '../../styles/Countries/Countries.css'
import CountryService from '../../services/countries.js'

const Countries = () => {

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

  console.log(countriesData)
  return (
    <section className='container'>
      {countriesData.map((country, idx) => 
        <CountryCard 
          key={idx}
          flags={country.flags}
          name={country.name} 
          population={country.population} 
          region={country.region} 
          capital={country.capital}
        />
      )}
    </section>
  );
}

export default Countries