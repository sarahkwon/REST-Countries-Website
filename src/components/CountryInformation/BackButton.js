import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useNavigate } from "react-router-dom"

import '../../styles/CountryInformation/BackButton.css'

const BackButton = () => {
  const navigate = useNavigate()
  
  return (
    <button className='back-button' onClick={() => navigate('/')}>
      <FontAwesomeIcon icon={faArrowLeftLong} className='fa fa-lg'/>
      Back
    </button>
  )
}

export default BackButton