
import '../../styles/Countries/CountryCard.css'

const CountryCard = () => {
  return (
    <article className='country-card'>
      <img src="https://flagcdn.com/us.svg" alt='Flag of America'/>
      <h2>Country Name</h2>
      <ul>
        <li>
          <b>Population: </b>
          999,999,999
        </li>
        <li>
          <b>Region: </b>
          Americas
        </li>
        <li>
          <b>Capital: </b>
          Washington D.C.
        </li>
      </ul>
    </article>
  );
}

export default CountryCard