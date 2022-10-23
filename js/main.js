let randomNumber = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(0, 100))

var x = '';
var empty = '';

console.log('Слово «» занимает ' + x.length + ' значений');
