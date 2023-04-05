import { useNavigate } from 'react-router-dom'
import '../../styles/Countries/CountryCard.css'

const CountryCard = ({flags, name, population, region, capital}) => {
  const navigate = useNavigate()

  //formats large numbers with commas (1000 --> 1,000)
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <article className='country-card' onClick={() => navigate(`/${name.common}`)}>
      <img src={flags.svg} alt={flags.alt}/>
      <div className='desc-container'>
        <h2>{name.common}</h2>
        <ul className='desc'>
          <li>
            <b>Population: </b>
            {formatNumber(population)}
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