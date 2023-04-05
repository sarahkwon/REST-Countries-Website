import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BackButton from '../components/CountryInformation/BackButton'
import CountryInformation from '../components/CountryInformation/CountryInformation'

import CountryService from '../services/countries'

import '../styles/CountryDetails.css'

const CountryDetails = () => {
  const { countryName } = useParams() //get the country's name in the url

  const [loading, setLoading] = useState(true)
  const [countryData, setCountryData] = useState()

  useEffect(() => {
    CountryService.getCountryByName(countryName)
      .then(result => {
        setCountryData(result.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }, [countryName])

  if (loading) {
    return null
  }

  return (
    <div className='Country-Details'>
      <div className='button-container'>
        <BackButton/>
      </div>
      <CountryInformation country={countryData[0]}/>
    </div>
  );
}

export default CountryDetails
