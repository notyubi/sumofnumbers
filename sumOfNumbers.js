const numbers = [1, 2, 3, 4, 5];

function sumForLoop(n) {
  let total = 0;
  for (const num of n) {
    total += num;
  }
  return total;
}

console.log(sumForLoop(numbers));

function sumWhile(n) {
  let total = 0;
  let counter = 0;
  while (counter < n.length) {
    total += n[counter];
    counter++;
  }
  return total;
}

console.log(sumWhile(numbers));

function sumRecur(n) {
  if (n.length === 0) {
    return 0;
  }
  return n[0] + sumRecur(n.slice(1, n.length));
}
console.log(sumRecur(numbers));

function sumUnder(n) {
  return _.reduce(n, function (memo, num) { return memo + num; }, 0);
}
console.log(sumUnder(numbers));
