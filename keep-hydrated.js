/*
Keep Hydrated: because nathan knows it is important to stay hydrated, he drinks 0.5 litres of water par hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

ex: time = 3 => litres = 1
*/

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(11.8));
