const a = 3, b = -6, c = 5, d = 2. //Find the largest & smallest numbers?}
const newArray = Array.of(a,b,c,d);
newArray.sort(function(a, b) {
    return a - b
  })
console.log('smallest: ' + newArray[0] + ', largest: ' + newArray[newArray.length - 1])
