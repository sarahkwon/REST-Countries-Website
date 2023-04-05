import '../../styles/CountryInformation/CountryInformation.css'
import utility from '../../services/utility.js'

const CountryInformation = ({ country }) => {
  console.log(country)
  return (
    <div className='country-information'>
      <h2>Country Name</h2>
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
          {country.region}
        </li>
        <li>
          <b>Sub Region: </b>
          {country.subregion}
        </li>
        <li>
          <b>Capital: </b>
          {country.capital}
        </li>
        <li>
          <b>Top Level Domain: </b>
          {country.tld[0]}
        </li>
        <li>
          <b>Currencies: </b>
          {Object.keys(country.currencies).map((key) => {
            return country.currencies[key].name
          }).join(', ')} 
        </li>
        <li>
          <b>Languages: </b>
          {Object.keys(country.languages).map((key) => {
            return country.languages[key]
          }).join(', ')}
        </li>
      </ul>
    </div>
  )
}

export default CountryInformation