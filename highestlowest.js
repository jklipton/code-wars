function highAndLow(numbers){
  const array = numbers.split(' ');
  const max = array.reduce(function(a, b){
    return Math.max(a,b);
  });
  const min = array.reduce(function(a, b){
    return Math.min(a,b);
  })
  return "" + max + ' ' + min;
}
