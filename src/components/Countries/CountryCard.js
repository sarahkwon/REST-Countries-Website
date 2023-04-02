
import '../../styles/Countries/CountryCard.css'

const CountryCard = ({flags, name, population, region, capital}) => {
  return (
    <article className='country-card'>
      <img src={flags.svg} alt={flags.alt}/>
      <div className='desc-container'>
        <h2>{name.common}</h2>
        <ul className='desc'>
          <li>
            <b>Population: </b>
            {population}
          </li>
          <li>
            <b>Region: </b>
            {region}
          </li>
          <li>
            <b>Capital: </b>
            {capital}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default CountryCard