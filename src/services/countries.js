import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1'

const getFiltered = async (...fields) => {
  try {
    const response = await axios.get(`${baseUrl}/all?fields=${fields.join(',')}`)
    return response
  } catch (err) {
    console.log(err.response.data)
  }
  
}

const getCountryByName = async (countryName) => {
  try {
    const response = await axios.get(`${baseUrl}/name/${countryName}`)
    return response
  } catch (err) {
    console.log(err.response.data)
  }
}

const getCountryNamesByCode = async (codes) => {
  try {
    const response = await axios.get(`${baseUrl}/alpha?codes=${codes.join(',')}&fields=name`)
    return response
  } catch (err) {
    console.log(err.response.data)
  }
}



const CountryService = {
  getFiltered,
  getCountryByName,
  getCountryNamesByCode
};


export default CountryService