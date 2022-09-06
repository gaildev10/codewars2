//Pythagorean Triple
function isPythagoreanTriple(integers) {
  let [a,b,c] = integers.sort((a,b) => a - b)
  return a **2 + b ** 2 == c ** 2
}