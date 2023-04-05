import '../../styles/CountryInformation/CountryInformation.css'
import utility from '../../services/utility.js'

import BorderCountriesList from './BorderCountriesList'

const CountryInformation = ({ country }) => {
  return (
    <section className='country-information'>
      <div className='center'>
        <img src={country.flags.svg} alt={country.flags.alt}/>
      </div>
      <div className='center'>
        <h2>{country.name.common}</h2>
        <ul>
          <li>
            <b>Native Name: </b>
            {country.name.official}
          </li>
          <li>
            <b>Population: </b>
            {utility.formatNumber(country.population)}
          </li>
          <li>
            <b>Region: </b>
            {country.region ? country.region : 'none'}
          </li>
          <li>
            <b>Sub Region: </b>
            {country.subregion ? country.subregion : 'none'}
          </li>
          <li>
            <b>Capital: </b>
            {country.capital ? country.capital : 'none'}
          </li>
          <li className='li-gap'>
            <b>Top Level Domain: </b>
            {country.tld ? country.tld[0] : 'none'}
          </li>
          <li>
            <b>Currencies: </b>
            {country.currencies ? Object.keys(country.currencies).map((key) => {
              return country.currencies[key].name
            }).join(', ') : 'none'} 
          </li>
          <li>
            <b>Languages: </b>
            {country.languages ? Object.keys(country.languages).map((key) => {
              return country.languages[key]
            }).join(', ') : 'none'}
          </li>
        </ul>
        <span>
          <b>Border Countries: </b>
          {country.borders ? <BorderCountriesList borderCountries={country.borders}/> : 'none'}
        </span>
        
      </div>
      
    </section>
  )
}

export default CountryInformation