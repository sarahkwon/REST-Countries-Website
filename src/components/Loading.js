import '../styles/Loading.css'

const Loading = ({ className }) => {
  return (
    <div className={`loading ${className}`}>
      <img src='/loading-icon.svg' alt='Circle loading icon'/>
    </div>
  )
}

export default Loading