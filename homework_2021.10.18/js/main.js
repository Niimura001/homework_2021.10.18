const array = [2, 4, 7, 5, 4, 3, 8];
let set = new Set(array);
const indexOfJS = array.indexOf(set);
console.log(indexOfJS);

var data = [1, 4, 7, 12, 21];
var result = data.filter(function(value) {
  return value % 2 === 1;
});
console.log(result);