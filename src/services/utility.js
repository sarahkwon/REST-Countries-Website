//formats large numbers with commas (1000 --> 1,000)
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const utility = {
  formatNumber
}

export default utility