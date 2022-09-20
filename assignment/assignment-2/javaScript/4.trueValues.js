let count = 0;
function array(arr) {
  for (let element of arr) if (element === true) count++;
  return count;
}

console.log(array([ true, false, true, true, true]));
