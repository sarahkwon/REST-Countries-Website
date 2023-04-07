import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BackButton from '../components/CountryInformation/BackButton'
import CountryInformation from '../components/CountryInformation/CountryInformation'

import CountryService from '../services/countries'

import '../styles/CountryDetails.css'
import '../styles/Loading.css'
import Loading from '../components/Loading'

const CountryDetails = () => {
  const { countryName } = useParams() //get the country's name in the url

  const [isLoading, setIsLoading] = useState(true)
  const [countryData, setCountryData] = useState()

  useEffect(() => {
    CountryService.getCountryByName(countryName)
      .then(result => {
        setCountryData(result.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }, [countryName])

  if (isLoading) {
    return (
      <div className='Country-Details'>
        <div className='button-container'>
          <BackButton/>
        </div>
        <Loading className='loading-centered'/>
      </div>
      
    )
  }

  return (
    <main>
      <div className='Country-Details'>
        <div className='button-container'>
          <BackButton/>
        </div>
        <CountryInformation country={countryData[0]}/>
      </div>
    </main>
  );
}

export default CountryDetails
