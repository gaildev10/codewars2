//Transportation on Vacation
function rentalCarCost(d) {
  return 40 * d - (d>6 ? 50 : d>2 ? 20 : 0 )
}