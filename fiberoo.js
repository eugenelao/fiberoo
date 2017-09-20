function fib() {
  let result = [0,1];
  let lastLastTerm = 0;
  let lastTerm = 1;
  let temp;
  for(i = 3; i <= 100; i++) {
    result.push(lastTerm + lastLastTerm);
    temp = lastTerm;
    lastTerm = lastTerm + lastLastTerm;
    lastLastTerm = temp;
  }
  return result;
}

function numsToStrings(numArr) {
  return _.map(numArr, function(num){return `${num}`});
}

function numEvenNums(numArr) {
 let result = 0;
  for(i = 0; i < numArr.length; i++) {
    if(numArr[i] % 2 == 0) {
      result++;
    }
  }
  return result;
}

console.log(numEvenNums(fib()));