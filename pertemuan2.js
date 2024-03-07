/*
if (Math.PI + 1 == 3 || Math.PI + 1 == 4) {
    console.log("Error!");
  }
  
  let result = 0;
  let n;
  let upperBound;
  let lowerBound;
  if (n > upperBound || n < lowerBound){
    result = upperBound + lowerBound;
  } else if (n < (upperBound + lowerBound) / 2) {
    result = lowerBound;
  } else {
    result = upperBound;
  }
  
  const obj = { a: 1, b: 2, c: 3 };
  for (const i in obj) {
    console.log(obj[i]);
  }
  
  const iterable = [10, 20, 30];
  for (const value of iterable) {
    console.log(value);
  }
  
  const foo = {bar: "nilai"};
  console.log(foo.bar);

  
  let func1 = (a, b) => (a > b) ? a: b;
  let func2 = (a, b, c) => func1(func1(a, b), func1(b, c));
  let func3 = (func, a, b) => func(a, b);
  
  console.log(func1(3, 5)); // Expected Result: 5
  console.log(func2(7, 11, 8)); // Expected Result: 11
  console.log(func3(func1, 8, 23)); // Expected Result: 23
  
*/

const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// This is how you use Array.map() method to create a new array
// populated with the results of calling a provided function on
// every element in the calling array.
const map1 = arr.map((x) => x ** 2);
console.log(map1);

// Create a new array `map2` populated with only the odd-value from the
// array `arr`
let map2 = arr.map(x => {
	if(x%2==1){
        return x;
    }
  });

map2 = map2.filter(function(x){
    return x !== undefined; 
});
console.log(map2);

// See the following links for hints.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
