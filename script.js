// 1 пункт задания 
let arr = ['23','54','46','43','13','45','27'];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    let a = arr[i].indexOf('2');
    if (arr[i].indexOf('2') === 0 || arr[i].indexOf('4') === 0) {
        console.log(arr[i]); 
    }
}


// 2 пункт задания

let n = 100;

nextPrime:
for (let i = 1; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log( i); 
}
