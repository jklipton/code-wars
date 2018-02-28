

function findOutlier(integers){
  let odds = [];
  let evens = [];
  integers.forEach(function(number){
    if (!Number.isInteger(number/2)){
      odds.push(number);
    } else if (Number.isInteger(number/2)){
      evens.push(number);
    }
  })
  if (odds.length === 1){
    return odds[0];
  } else {
    return evens[0];
  }
}
