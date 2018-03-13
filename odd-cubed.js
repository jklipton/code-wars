function cubeOdd(arr) {

let NaN = 0;
arr.forEach( num => {
  if (isNaN(num)) NaN++;
});
if (NaN > 0) return undefined;

let odd = arr.filter(num => num % 2 !== 0 );
if (odd.length === 0) return 0;

odd = odd.map(num => Math.pow(num, 3))

return (odd.reduce((a,b) => a + b));
}
